import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function PanIndiaSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-20 text-[var(--color-ivory)] sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.14em] text-[var(--color-champagne)]">
            Coverage
          </p>
          <h2 className="font-display text-[2rem] leading-[1.1] font-medium sm:text-[2.6rem]">
            {siteConfig.locations.heading}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-ivory)]/70 sm:text-lg">
            {siteConfig.locations.body}
          </p>
          <Button href="/locations" variant="secondary" showArrow className="mt-8 border-[var(--color-ivory)]/50 text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-ink)]">
            View Service Coverage
          </Button>
        </Reveal>

        <Reveal delay={150} className="relative aspect-[4/3] w-full">
          {/* Destination-inspired abstract mark rather than a literal map asset */}
          <svg viewBox="0 0 400 400" className="h-full w-full opacity-90" aria-hidden>
            <circle cx="200" cy="200" r="1" fill="none" />
            {Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={40 + i * 38}
                fill="none"
                stroke="var(--color-champagne)"
                strokeOpacity={0.18}
              />
            ))}
            <circle cx="200" cy="200" r="5" fill="var(--color-champagne)" />
          </svg>
        </Reveal>
      </Container>
    </section>
  );
}
