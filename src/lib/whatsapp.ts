import { business, formatPhoneForWhatsApp } from "@/config/business";
import type { QuoteInquiry } from "@/types";
import { allMenuItems } from "@/data/menu";

export function buildWhatsAppUrl(message: string): string {
  const number = formatPhoneForWhatsApp(business.whatsapp);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function defaultWhatsAppMessage(): string {
  return `Hello ${business.name},\n\nI would like to enquire about catering for my event.`;
}

export function buildInquiryWhatsAppMessage(inquiry: QuoteInquiry): string {
  const selectedNames = inquiry.requirements.selectedMenuItemIds
    .map((id) => allMenuItems.find((item) => item.id === id)?.name)
    .filter((name): name is string => Boolean(name));

  const lines = [
    `Hello ${business.name},`,
    "",
    "I would like to enquire about catering for my event.",
    "",
    `Name: ${inquiry.contact.name}`,
    `Phone: ${inquiry.contact.phone}`,
    inquiry.contact.email ? `Email: ${inquiry.contact.email}` : undefined,
    `Event: ${inquiry.event.eventType}`,
    `Date: ${inquiry.event.eventDate}`,
    `City: ${inquiry.event.city}`,
    inquiry.event.venue ? `Venue: ${inquiry.event.venue}` : undefined,
    `Guests: ${inquiry.event.guests}`,
    "",
    selectedNames.length > 0 ? "Selected Menu:" : undefined,
    ...selectedNames.map((name) => `- ${name}`),
    inquiry.requirements.additionalRequirements
      ? `\nAdditional Requirements:\n${inquiry.requirements.additionalRequirements}`
      : undefined,
  ].filter((line): line is string => line !== undefined);

  return lines.join("\n");
}
