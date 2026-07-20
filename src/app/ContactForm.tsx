"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.ok) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-blue-900">Message received</h3>
        <p className="mt-2 text-gray-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl text-left">
      {/* Honeypot — hidden from users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Name <span className="text-blue-600">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Email <span className="text-blue-600">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@yourbusiness.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-gray-700">
            What do you need help with?
          </label>
          <select id="service" name="service" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            <option>Accounting</option>
            <option>Human Resources</option>
            <option>Operational Oversight</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">
          How can we help? <span className="text-blue-600">*</span>
        </label>
        <textarea id="message" name="message" required rows={4} className={inputClass} placeholder="Tell us a bit about your business and what you need." />
      </div>

      {!state.ok && state.message && (
        <p aria-live="polite" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 w-full rounded-full bg-blue-900 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Sending..." : "Get My Free Consultation"}
      </button>
      <p className="mt-3 text-sm text-gray-500">Free, no obligation. We reply within one business day.</p>
    </form>
  );
}
