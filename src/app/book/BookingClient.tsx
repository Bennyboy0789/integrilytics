"use client";

import { useState, useTransition, useActionState } from "react";
import {
  consultations,
  MODE_LABELS,
  MODE_BLURB,
  priceLabel,
  type Consultation,
  type Mode,
} from "./consultations";
import { fetchSlots, submitBooking, type BookingState } from "./actions";
import type { Slot } from "../lib/graph";

const CATEGORIES: Array<{ key: "all" | Mode; label: string }> = [
  { key: "all", label: "All" },
  { key: "remote", label: "Remote" },
  { key: "office", label: "Office" },
  { key: "onsite", label: "On-Site" },
];

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function upcomingWeekdays(count: number): Array<{ iso: string; label: string }> {
  const out: Array<{ iso: string; label: string }> = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (out.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      out.push({
        iso: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
        label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const initialState: BookingState = { ok: false, message: "" };

export default function BookingClient() {
  const [category, setCategory] = useState<"all" | Mode>("all");
  const [service, setService] = useState<Consultation | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [configured, setConfigured] = useState(true);
  const [slotError, setSlotError] = useState<string | undefined>();
  const [loadingSlots, startSlots] = useTransition();
  const [state, formAction, pending] = useActionState(submitBooking, initialState);

  const days = upcomingWeekdays(10);

  function chooseService(s: Consultation) {
    setService(s);
    setDate(null);
    setTime(null);
    setSlots([]);
    setSlotError(undefined);
  }

  function chooseDate(iso: string) {
    setDate(iso);
    setTime(null);
    setSlots([]);
    setSlotError(undefined);
    startSlots(async () => {
      const r = await fetchSlots(service!.id, iso);
      setConfigured(r.configured);
      setSlots(r.slots);
      setSlotError(r.error);
    });
  }

  // ---- Confirmation ----
  if (state.ok) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-blue-900">You&apos;re on the calendar</h2>
        <p className="mt-3 text-gray-600">{state.message}</p>
        {state.joinUrl && (
          <a
            href={state.joinUrl}
            className="mt-6 inline-block rounded-full bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Join Microsoft Teams meeting
          </a>
        )}
      </div>
    );
  }

  // ---- Step 1: choose a consultation ----
  if (!service) {
    const list = consultations.filter((c) => category === "all" || c.mode === category);
    return (
      <div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCategory(c.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                category === c.key
                  ? "bg-blue-900 text-white"
                  : "bg-blue-50 text-blue-800 hover:bg-blue-100"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div
              key={c.id}
              className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {MODE_LABELS[c.mode]}
                </span>
                <span className="text-xs font-medium text-gray-400">{c.minutes} min</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900">{c.title}</h3>
              <p className="mt-2 flex-1 text-gray-600">{c.tagline}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-900">{priceLabel(c.price)}</span>
                <button
                  type="button"
                  onClick={() => chooseService(c)}
                  className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  {c.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- Step 2: schedule + details ----
  return (
    <form action={formAction} className="mx-auto max-w-3xl">
      <button
        type="button"
        onClick={() => setService(null)}
        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
      >
        ← Choose a different consultation
      </button>

      <div className="mt-4 rounded-3xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-blue-900">{service.title}</h2>
            <p className="text-sm text-gray-600">{MODE_BLURB[service.mode]}</p>
          </div>
          <span className="text-lg font-bold text-blue-900">
            {priceLabel(service.price)}
          </span>
        </div>
      </div>

      {/* Date */}
      <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
        1. Pick a day
      </h3>
      <div className="flex flex-wrap gap-2">
        {days.map((d) => (
          <button
            key={d.iso}
            type="button"
            onClick={() => chooseDate(d.iso)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              date === d.iso
                ? "border-blue-900 bg-blue-900 text-white"
                : "border-gray-200 text-gray-700 hover:border-blue-300"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Time */}
      {date && (
        <>
          <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
            2. Pick a time <span className="normal-case text-gray-400">(Eastern Time)</span>
          </h3>
          {loadingSlots ? (
            <p className="text-gray-500">Loading available times…</p>
          ) : !configured ? (
            <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Online booking is being set up. Please call (888) 316-0360 to schedule for now.
            </p>
          ) : slotError ? (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{slotError}</p>
          ) : slots.length === 0 ? (
            <p className="text-gray-500">No open times that day. Try another day.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {slots.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setTime(s.value)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    time === s.value
                      ? "border-blue-900 bg-blue-900 text-white"
                      : "border-gray-200 text-gray-700 hover:border-blue-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {/* Details */}
      {date && time && (
        <>
          <h3 className="mt-8 mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            3. Your details
          </h3>
          <div className="hidden" aria-hidden="true">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Name" autoComplete="name" className={inputClass} />
            <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
            <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputClass} />
            {service.mode === "onsite" && (
              <input name="address" required placeholder="On-site address" className={inputClass} />
            )}
          </div>
          <textarea
            name="notes"
            rows={3}
            placeholder="What would you like to cover? (optional)"
            className={`${inputClass} mt-4`}
          />

          {service.price > 0 && (
            <p className="mt-3 text-sm text-gray-500">
              This is a {priceLabel(service.price)} consultation. We will follow up with payment
              details after you book.
            </p>
          )}

          {!state.ok && state.message && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {state.message}
            </p>
          )}

          <input type="hidden" name="serviceId" value={service.id} />
          <input type="hidden" name="date" value={date} />
          <input type="hidden" name="time" value={time} />

          <button
            type="submit"
            disabled={pending}
            className="mt-5 w-full rounded-full bg-blue-900 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-800 disabled:opacity-70 sm:w-auto"
          >
            {pending ? "Booking…" : service.action === "Request to Book" ? "Request to Book" : "Confirm Booking"}
          </button>
        </>
      )}
    </form>
  );
}
