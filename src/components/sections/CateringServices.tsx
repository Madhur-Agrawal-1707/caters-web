import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { cateringServices } from "@/data/content";
import { cn } from "@/lib/utils";

export default function CateringServices() {
  return (
    <section id="services" className="border-t border-[var(--color-line)] bg-[var(--color-cream)]/40 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catering Services"
          heading="Designed Around Your Occasion"
          body="From intimate family gatherings to large weddings, every engagement is planned around the specifics of the event."
        />

        <div className="mt-14 flex flex-col divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
          {cateringServices.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 60}
              className={cn(
                "grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[auto_1fr_auto] sm:gap-10",
                i % 2 === 1 && "sm:[direction:rtl] sm:[&>*]:[direction:ltr]"
              )}
            >
              <span className="font-display text-sm text-[var(--color-ink)]/40">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-display text-2xl font-medium sm:text-[1.7rem]">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                  {service.description}
                </p>
              </div>

              <ImagePlaceholder
                src={service.image}
                alt={service.title}
                label={service.title}
                className="h-36 w-full sm:h-28 sm:w-44"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
