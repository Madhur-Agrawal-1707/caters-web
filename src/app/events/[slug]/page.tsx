import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { events, getEventBySlug } from "@/data/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="pt-16 sm:pt-20">
      <ImagePlaceholder
        alt={event.title}
        label={event.title}
        src={event.images[0]}
        className="aspect-[16/9] w-full sm:aspect-[21/9]"
      />

      <Container className="py-12 sm:py-16">
        <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-maroon)] uppercase">
          {event.type}
          {event.location ? ` · ${event.location}` : ""}
          {event.year ? ` · ${event.year}` : ""}
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-[2rem] leading-[1.1] font-medium sm:text-[2.8rem]">
          {event.title}
        </h1>

        {event.isDemoData && (
          <p className="mt-4 max-w-xl text-xs italic text-[var(--color-ink)]/45">
            This is a sample entry used to illustrate the page layout. It will
            be replaced with real event details once supplied by the client.
          </p>
        )}

        <Reveal className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-ink)]/70">
          <p>{event.story}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <ImagePlaceholder
              key={i}
              alt={`${event.title} — gallery image ${i + 1}`}
              label="Event Gallery"
              className="aspect-square"
            />
          ))}
        </div>

        <div className="mt-14 border-t border-[var(--color-line)] pt-10">
          <h2 className="font-display text-xl font-medium">Food & Service Highlights</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-ink)]/60">
            [CLIENT TO PROVIDE] — specific menu highlights and service notes
            for this event.
          </p>
        </div>

        <div className="mt-12">
          <Button href="/contact" showArrow>Plan Your Event</Button>
        </div>
      </Container>
    </div>
  );
}
