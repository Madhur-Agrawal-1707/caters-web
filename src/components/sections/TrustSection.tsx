import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export default function TrustSection() {
  const stats = siteConfig.statistics.filter((s) => s.value.trim().length > 0);

  return (
    <section className="border-t border-[var(--color-line)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={siteConfig.trust.eyebrow}
          heading={siteConfig.trust.heading}
          body={siteConfig.trust.body}
        />

        {stats.length > 0 && (
          <Reveal
            as="dl"
            delay={150}
            className="mt-14 grid grid-cols-2 gap-8 border-t border-[var(--color-line)] pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.id}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium text-[var(--color-maroon)] sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-[var(--color-ink)]/60">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
