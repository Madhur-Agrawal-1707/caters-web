import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { EventItem } from "@/types";

export default function EventCard({ event, delay = 0 }: { event: EventItem; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/events/${event.slug}`} className="group block">
        <ImagePlaceholder
          src={event.images[0]}
          alt={event.title}
          label={event.title}
          className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <p className="mt-4 text-xs tracking-[0.1em] text-[var(--color-maroon)] uppercase">
          {event.type}
          {event.year ? ` · ${event.year}` : ""}
        </p>
        <h3 className="font-display mt-1 text-xl font-medium">{event.title}</h3>
        {event.location && (
          <p className="mt-1 text-sm text-[var(--color-ink)]/55">{event.location}</p>
        )}
      </Link>
    </Reveal>
  );
}
