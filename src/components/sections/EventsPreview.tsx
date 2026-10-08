import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { events } from "@/data/events";

export default function EventsPreview() {
  const featured = events.slice(0, 3);

  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-cream)]/40 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Event Portfolio"
            heading="Occasions We've Helped Shape"
            className="mb-0"
          />
          <Button href="/events" variant="secondary" showArrow className="hidden sm:inline-flex">
            View Events
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((event, i) => (
            <Reveal key={event.id} delay={i * 80}>
              <Link href={`/events/${event.slug}`} className="group block">
                <ImagePlaceholder
                  src={event.images[0]}
                  alt={event.title}
                  label={event.title}
                  className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <p className="mt-4 text-xs tracking-[0.1em] text-[var(--color-maroon)] uppercase">
                  {event.type}
                </p>
                <h3 className="font-display mt-1 text-xl font-medium">{event.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>

        <Button href="/events" variant="secondary" showArrow className="mt-10 sm:hidden">
          View Events
        </Button>
      </Container>
    </section>
  );
}
