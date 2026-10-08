import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="border-t border-[var(--color-line)] py-24 sm:py-32">
      <Container narrow className="text-center">
        <Reveal>
          <h2 className="font-display text-[2.2rem] leading-[1.1] font-medium sm:text-[3rem]">
            {siteConfig.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[var(--color-ink)]/70 sm:text-lg">
            {siteConfig.finalCta.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Request a Quote</Button>
            <Button href={buildWhatsAppUrl(defaultWhatsAppMessage())} variant="secondary">
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
