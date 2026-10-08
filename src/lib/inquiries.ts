import type { QuoteInquiry, InquirySubmissionResult } from "@/types";

// Frontend-safe inquiry abstraction. No backend/CRM is connected yet, so
// this intentionally does NOT claim a lead was stored anywhere durable.
// When a provider is connected (email API, CRM, Supabase, Formspree,
// Resend, etc.), replace the body of this function — nothing else in the
// app needs to change since every quote submission calls this single
// entry point.
export async function submitInquiry(
  inquiry: QuoteInquiry
): Promise<InquirySubmissionResult> {
  if (process.env.NODE_ENV === "development") {
    console.info("[submitInquiry] No backend configured. Inquiry payload:", inquiry);
  }

  // Simulate network latency so the UI's loading state is exercised.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    success: true,
    message:
      "Thank you. Your event details have been received. Continue on WhatsApp to speak with our team directly.",
  };
}
