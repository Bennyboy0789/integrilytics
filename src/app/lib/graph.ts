import type { Consultation } from "../book/consultations";

// ---- Config (env-driven; edit hours/timezone here) ----
const TENANT_ID = process.env.MS_TENANT_ID;
const CLIENT_ID = process.env.MS_CLIENT_ID;
const CLIENT_SECRET = process.env.MS_CLIENT_SECRET;
const MAILBOX = process.env.BOOKING_MAILBOX; // UPN/email whose calendar receives bookings
const OFFICE_ADDRESS = process.env.OFFICE_ADDRESS || "IntegriLytics Office, Fayetteville, NC";

// Graph wants a Windows time-zone id here (handles DST automatically).
const TIMEZONE = process.env.BOOKING_TIMEZONE || "Eastern Standard Time";
const BUSINESS_START_HOUR = 9; // 9:00 AM
const BUSINESS_END_HOUR = 17; // 5:00 PM

export function isBookingConfigured(): boolean {
  return Boolean(TENANT_ID && CLIENT_ID && CLIENT_SECRET && MAILBOX);
}

export type Slot = { value: string; label: string }; // value "HH:MM" (24h), label "9:30 AM"

// ---- Token (client-credentials, cached in-memory) ----
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) return cachedToken.token;

  const res = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { token: data.access_token, expiresAt: now + data.expires_in * 1000 };
  return data.access_token;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function to12h(hour24: number, minute: number): string {
  const period = hour24 >= 12 ? "PM" : "AM";
  const h = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${h}:${pad(minute)} ${period}`;
}

// ---- Availability: free 'HH:MM' start times for a given day + duration ----
export async function getAvailableSlots(dateISO: string, minutes: number): Promise<Slot[]> {
  const token = await getToken();

  const startDateTime = `${dateISO}T${pad(BUSINESS_START_HOUR)}:00:00`;
  const endDateTime = `${dateISO}T${pad(BUSINESS_END_HOUR)}:00:00`;

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAILBOX!)}/calendar/getSchedule`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: `outlook.timezone="${TIMEZONE}"`,
      },
      body: JSON.stringify({
        schedules: [MAILBOX],
        startTime: { dateTime: startDateTime, timeZone: TIMEZONE },
        endTime: { dateTime: endDateTime, timeZone: TIMEZONE },
        availabilityViewInterval: minutes,
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`getSchedule failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { value: { availabilityView: string }[] };
  const view = data.value?.[0]?.availabilityView ?? "";

  const totalMinutes = (BUSINESS_END_HOUR - BUSINESS_START_HOUR) * 60;
  const slots: Slot[] = [];
  for (let i = 0; i < view.length; i++) {
    const offset = i * minutes;
    if (offset + minutes > totalMinutes) break;
    if (view[i] !== "0") continue; // only fully-free intervals
    const startMin = BUSINESS_START_HOUR * 60 + offset;
    const h = Math.floor(startMin / 60);
    const m = startMin % 60;
    slots.push({ value: `${pad(h)}:${pad(m)}`, label: to12h(h, m) });
  }
  return slots;
}

// ---- Create the booking event on the mailbox calendar ----
export type BookingInput = {
  service: Consultation;
  dateISO: string; // YYYY-MM-DD
  time: string; // HH:MM (24h)
  name: string;
  email: string;
  phone?: string;
  address?: string; // required for on-site
  notes?: string;
};

export type BookingResult = { ok: true; joinUrl?: string } | { ok: false; error: string };

export async function createBooking(input: BookingInput): Promise<BookingResult> {
  const { service, dateISO, time, name, email, phone, address, notes } = input;

  const [h, m] = time.split(":").map(Number);
  const startMin = h * 60 + m;
  const endMin = startMin + service.minutes;
  const startDateTime = `${dateISO}T${pad(Math.floor(startMin / 60))}:${pad(startMin % 60)}:00`;
  const endDateTime = `${dateISO}T${pad(Math.floor(endMin / 60))}:${pad(endMin % 60)}:00`;

  const isOnsite = service.mode === "onsite";
  const bodyLines = [
    `Consultation: ${service.title}`,
    `Client: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    address ? `Address: ${address}` : null,
    service.price > 0 ? `Fee: $${service.price} (payment to be arranged)` : "Fee: Free",
    isOnsite ? "STATUS: On-site request, pending confirmation before travel is arranged." : null,
    "",
    notes ? `Notes: ${notes}` : null,
  ].filter(Boolean);

  const event: Record<string, unknown> = {
    subject: `${service.title} — ${name}`,
    start: { dateTime: startDateTime, timeZone: TIMEZONE },
    end: { dateTime: endDateTime, timeZone: TIMEZONE },
    body: { contentType: "text", content: bodyLines.join("\n") },
    attendees: [
      { emailAddress: { address: email, name }, type: "required" },
    ],
    // On-site is a request until we confirm travel.
    showAs: isOnsite ? "tentative" : "busy",
  };

  if (service.mode === "remote") {
    event.isOnlineMeeting = true;
    event.onlineMeetingProvider = "teamsForBusiness";
  } else if (service.mode === "office") {
    event.location = { displayName: OFFICE_ADDRESS };
  } else {
    event.location = { displayName: address || "Client site (on-site)" };
  }

  try {
    const token = await getToken();
    const res = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAILBOX!)}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Prefer: `outlook.timezone="${TIMEZONE}"`,
        },
        body: JSON.stringify(event),
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return { ok: false, error: `Event creation failed: ${res.status} ${await res.text()}` };
    }
    const created = (await res.json()) as { onlineMeeting?: { joinUrl?: string } };
    return { ok: true, joinUrl: created.onlineMeeting?.joinUrl };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}
