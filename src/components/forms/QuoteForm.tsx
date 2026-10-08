"use client";

import { useState } from "react";
import Link from "next/link";
import { useMenuSelection } from "@/components/menu/MenuSelectionContext";
import { allMenuItems } from "@/data/menu";
import { submitInquiry } from "@/lib/inquiries";
import { buildInquiryWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import type { EventType, QuoteInquiry } from "@/types";
import QuoteStepIndicator from "./QuoteStepIndicator";
import { Button } from "@/components/ui/Button";
import { X, CheckCircle2 } from "lucide-react";

const eventTypes: EventType[] = [
  "Wedding",
  "Engagement / Sagai",
  "Family Function",
  "Religious Function",
  "Corporate Event",
  "Birthday / Anniversary",
  "Large Gathering",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  eventType: EventType | "";
  eventDate: string;
  city: string;
  venue: string;
  guests: string;
  additionalRequirements: string;
}

const emptyState: FormState = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  city: "",
  venue: "",
  guests: "",
  additionalRequirements: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validateStep(step: number, form: FormState): Errors {
  const errors: Errors = {};
  if (step === 0) {
    if (!form.name.trim()) errors.name = "Please share your name.";
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      errors.phone = "Enter a valid phone number.";
    }
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
  }
  if (step === 1) {
    if (!form.eventType) errors.eventType = "Select an event type.";
    if (!form.eventDate) errors.eventDate = "Select a date.";
    if (!form.city.trim()) errors.city = "Enter the event city.";
    if (!form.guests.trim() || Number(form.guests) <= 0) {
      errors.guests = "Enter the expected number of guests.";
    }
  }
  return errors;
}

export default function QuoteForm() {
  const { selectedIds, toggle } = useMenuSelection();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const selectedItems = allMenuItems.filter((item) => selectedIds.includes(item.id));

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function goNext() {
    const stepErrors = validateStep(step, form);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setStep((s) => Math.min(s + 1, 3));
    }
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    setSubmitting(true);
    const inquiry: QuoteInquiry = {
      contact: { name: form.name, phone: form.phone, email: form.email || undefined },
      event: {
        eventType: form.eventType,
        eventDate: form.eventDate,
        city: form.city,
        venue: form.venue || undefined,
        guests: form.guests,
      },
      requirements: {
        selectedMenuItemIds: selectedIds,
        additionalRequirements: form.additionalRequirements || undefined,
      },
    };
    const res = await submitInquiry(inquiry);
    setResult(res);
    setSubmitting(false);
  }

  if (result?.success) {
    const inquiry: QuoteInquiry = {
      contact: { name: form.name, phone: form.phone, email: form.email || undefined },
      event: {
        eventType: form.eventType,
        eventDate: form.eventDate,
        city: form.city,
        venue: form.venue || undefined,
        guests: form.guests,
      },
      requirements: {
        selectedMenuItemIds: selectedIds,
        additionalRequirements: form.additionalRequirements || undefined,
      },
    };
    return (
      <div className="border border-[var(--color-line)] px-6 py-14 text-center sm:px-14">
        <CheckCircle2 className="mx-auto size-10 text-[var(--color-maroon)]" strokeWidth={1.25} />
        <h2 className="font-display mt-5 text-2xl font-medium sm:text-3xl">Thank you.</h2>
        <p className="mt-2 text-[var(--color-ink)]/70">
          Your event details have been received.
        </p>
        <Button
          href={buildWhatsAppUrl(buildInquiryWhatsAppMessage(inquiry))}
          className="mt-8"
          showArrow
        >
          Continue on WhatsApp
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[var(--color-line)] bg-[var(--color-ivory)] px-4 py-3 text-sm focus:border-[var(--color-ink)]/50 focus:outline-none";
  const labelClass = "mb-1.5 block text-xs font-medium text-[var(--color-ink)]/70";
  const errorClass = "mt-1 text-xs text-[var(--color-maroon)]";

  return (
    <div>
      <QuoteStepIndicator current={step} />

      {step === 0 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass} htmlFor="name">Name</label>
            <input
              id="name"
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="email">Email (optional)</label>
            <input
              id="email"
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className={errorClass}>{errors.email}</p>}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className={labelClass} htmlFor="eventType">Event Type</label>
            <select
              id="eventType"
              className={inputClass}
              value={form.eventType}
              onChange={(e) => update("eventType", e.target.value as EventType)}
              aria-invalid={!!errors.eventType}
            >
              <option value="">Select event type</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.eventType && <p className={errorClass}>{errors.eventType}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="eventDate">Event Date</label>
            <input
              id="eventDate"
              type="date"
              className={inputClass}
              value={form.eventDate}
              onChange={(e) => update("eventDate", e.target.value)}
              aria-invalid={!!errors.eventDate}
            />
            {errors.eventDate && <p className={errorClass}>{errors.eventDate}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="city">City</label>
            <input
              id="city"
              className={inputClass}
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              aria-invalid={!!errors.city}
            />
            {errors.city && <p className={errorClass}>{errors.city}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="venue">Venue (optional)</label>
            <input
              id="venue"
              className={inputClass}
              value={form.venue}
              onChange={(e) => update("venue", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="guests">Expected Guests</label>
            <input
              id="guests"
              type="number"
              min={1}
              className={inputClass}
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              aria-invalid={!!errors.guests}
            />
            {errors.guests && <p className={errorClass}>{errors.guests}</p>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <p className={labelClass}>Selected Menu Items</p>
            {selectedItems.length === 0 ? (
              <p className="text-sm text-[var(--color-ink)]/55">
                No dishes selected yet. Visit the{" "}
                <Link href="/menu" className="link-underline text-[var(--color-maroon)]">
                  menu
                </Link>{" "}
                to build your event menu, or continue without selecting specific dishes.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-line)] border-t border-b border-[var(--color-line)]">
                {selectedItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-2.5 text-sm">
                    {item.name}
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-[var(--color-ink)]/40 hover:text-[var(--color-maroon)]"
                    >
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <label className={labelClass} htmlFor="requirements">Additional Requirements</label>
            <textarea
              id="requirements"
              rows={4}
              className={inputClass}
              value={form.additionalRequirements}
              onChange={(e) => update("additionalRequirements", e.target.value)}
              placeholder="Dietary preferences, live counters, service style, anything else we should know…"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 text-sm">
          <div>
            <p className={labelClass}>Event Details</p>
            <dl className="grid grid-cols-2 gap-y-2 border-t border-[var(--color-line)] pt-3">
              <dt className="text-[var(--color-ink)]/55">Type</dt>
              <dd>{form.eventType || "—"}</dd>
              <dt className="text-[var(--color-ink)]/55">Date</dt>
              <dd>{form.eventDate || "—"}</dd>
              <dt className="text-[var(--color-ink)]/55">City</dt>
              <dd>{form.city || "—"}</dd>
              <dt className="text-[var(--color-ink)]/55">Venue</dt>
              <dd>{form.venue || "—"}</dd>
              <dt className="text-[var(--color-ink)]/55">Guests</dt>
              <dd>{form.guests || "—"}</dd>
            </dl>
          </div>
          <div>
            <p className={labelClass}>Selected Dishes</p>
            {selectedItems.length === 0 ? (
              <p className="text-[var(--color-ink)]/55">None selected.</p>
            ) : (
              <p className="text-[var(--color-ink)]/80">
                {selectedItems.map((i) => i.name).join(", ")}
              </p>
            )}
          </div>
          <div>
            <p className={labelClass}>Contact Details</p>
            <p>{form.name} · {form.phone}{form.email ? ` · ${form.email}` : ""}</p>
          </div>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between">
        {step > 0 ? (
          <Button variant="link" onClick={goBack} type="button">
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <Button onClick={goNext} type="button">
            Continue
          </Button>
        ) : (
          <Button onClick={handleSubmit} type="button" disabled={submitting}>
            {submitting ? "Submitting…" : "Request a Quote"}
          </Button>
        )}
      </div>
    </div>
  );
}
