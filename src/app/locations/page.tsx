import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { serviceLocations } from "@/data/content";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "PS Caterers is available for events across India, subject to event requirements and availability.",
};

export default function LocationsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="border-b border-[var(--color-line)] bg-[var(--color-ink)] py-16 text-[var(--color-ivory)] sm:py-24">
        <Container>
          <p className="mb-4 text-xs font-medium tracking-[0.14em] text-[var(--color-champagne)]">
            Service Coverage
          </p>
          <h1 className="font-display max-w-2xl text-[2.2rem] leading-[1.1] font-medium sm:text-[3rem]">
            {siteConfig.locations.heading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-ivory)]/70 sm:text-lg">
            {siteConfig.locations.body}
          </p>
          <Button
            href="/contact"
            variant="secondary"
            showArrow
            className="mt-8 border-[var(--color-ivory)]/50 text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-ink)]"
          >
            Check Availability for Your City
          </Button>
        </Container>
      </div>

      <Container className="py-14 sm:py-20">
        {serviceLocations.length > 0 ? (
          <Reveal>
            <h2 className="font-display text-xl font-medium">Confirmed Service Locations</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {serviceLocations.map((loc) => (
                <li
                  key={loc.city}
                  className="border border-[var(--color-line)] px-4 py-3 text-sm"
                >
                  {loc.city}
                  {loc.state ? `, ${loc.state}` : ""}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <Reveal className="max-w-xl">
            <h2 className="font-display text-xl font-medium">
              Confirmed Locations — Coming Soon
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/60">
              Specific service locations will be listed here once confirmed
              by the client. In the meantime, get in touch with your city and
              event date, and our team will confirm coverage directly.
            </p>
          </Reveal>
        )}
      </Container>
    </div>
  );
}
