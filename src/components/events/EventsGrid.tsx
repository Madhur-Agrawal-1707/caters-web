"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { events, eventTypes } from "@/data/events";
import { cn } from "@/lib/utils";

export default function EventsGrid() {
  const [active, setActive] = useState<(typeof eventTypes)[number]>("All");

  const filtered = active === "All" ? events : events.filter((e) => e.type === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {eventTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActive(type)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors duration-200",
              active === type
                ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
                : "border border-[var(--color-line)] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)]"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event, i) => (
          <EventCard key={event.id} event={event} delay={(i % 3) * 70} />
        ))}
      </div>
    </div>
  );
}
