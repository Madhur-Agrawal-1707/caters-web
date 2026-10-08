import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import FaqAccordion from "@/components/ui/FaqAccordion";
import QuoteForm from "@/components/forms/QuoteForm";
import { MenuSelectionProvider } from "@/components/menu/MenuSelectionContext";
import { faqItems } from "@/data/content";
import { business, formatPhoneForTel } from "@/config/business";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PS Caterers to plan catering for your wedding, corporate event or celebration. Request a quote or reach us directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            Contact
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            Let's Plan Something Extraordinary.
          </h1>
        </Container>
      </div>

      <Container className="grid grid-cols-1 gap-14 py-14 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <h2 className="font-display text-xl font-medium">Reach Us Directly</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-[var(--color-maroon)]" />
              <a href={`tel:${formatPhoneForTel(business.phone)}`} className="link-underline">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="size-4 text-[var(--color-maroon)]" />
              <a
                href={buildWhatsAppUrl(defaultWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-[var(--color-maroon)]" />
              <span className="text-[var(--color-ink)]/70">
                Available for events across India, subject to confirmation.
              </span>
            </li>
          </ul>

          <div className="mt-12">
            <h2 className="font-display text-xl font-medium">Frequently Asked</h2>
            <div className="mt-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>

        <div>
          <Suspense fallback={null}>
            <MenuSelectionProvider>
              <QuoteForm />
            </MenuSelectionProvider>
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
