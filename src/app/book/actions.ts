"use server";

import { getConsultation } from "./consultations";
import {
  isBookingConfigured,
  getAvailableSlots,
  createBooking,
  type Slot,
} from "../lib/graph";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SlotsResult = {
  configured: boolean;
  slots: Slot[];
  error?: string;
};

export async function fetchSlots(serviceId: string, dateISO: string): Promise<SlotsResult> {
  const service = getConsultation(serviceId);
  if (!service) return { configured: true, slots: [], error: "Unknown consultation type." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO)) {
    return { configured: true, slots: [], error: "Invalid date." };
  }
  if (!isBookingConfigured()) {
    return { configured: false, slots: [] };
  }
  try {
    const slots = await getAvailableSlots(dateISO, service.minutes);
    return { configured: true, slots };
  } catch (err) {
    console.error("[book] fetchSlots failed:", err);
    return { configured: true, slots: [], error: "Could not load times right now." };
  }
}

export type BookingState = {
  ok: boolean;
  message: string;
  joinUrl?: string;
};

export async function submitBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  // Honeypot
  if (String(formData.get("company") || "").trim() !== "") {
    return { ok: true, message: "Thanks. Your request has been received." };
  }

  const serviceId = String(formData.get("serviceId") || "");
  const dateISO = String(formData.get("date") || "");
  const time = String(formData.get("time") || "");
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const notes = String(formData.get("notes") || "").trim();

  const service = getConsultation(serviceId);
  if (!service) return { ok: false, message: "Please choose a consultation type." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO) || !/^\d{2}:\d{2}$/.test(time)) {
    return { ok: false, message: "Please choose a date and time." };
  }
  if (!name || !email) return { ok: false, message: "Please add your name and email." };
  if (!EMAIL_RE.test(email)) return { ok: false, message: "Please enter a valid email address." };
  if (service.mode === "onsite" && !address) {
    return { ok: false, message: "Please add the on-site address for your visit." };
  }

  if (!isBookingConfigured()) {
    return {
      ok: false,
      message: "Online booking is being set up. Please call (888) 316-0360 to schedule.",
    };
  }

  const result = await createBooking({
    service,
    dateISO,
    time,
    name,
    email,
    phone,
    address,
    notes,
  });

  if (!result.ok) {
    console.error("[book] createBooking failed:", result.error);
    return {
      ok: false,
      message: "Something went wrong booking that time. Please try another slot or call us.",
    };
  }

  const isOnsite = service.mode === "onsite";
  const base = isOnsite
    ? "Your on-site consultation request has been received. We will confirm before arranging travel."
    : "Your consultation is booked. A calendar invitation is on its way to your email.";
  const pay =
    service.price > 0
      ? ` This is a $${service.price} consultation; we will follow up with payment details.`
      : "";
  return { ok: true, message: base + pay, joinUrl: result.joinUrl };
}
