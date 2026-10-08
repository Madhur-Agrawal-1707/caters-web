import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import EventsGrid from "@/components/events/EventsGrid";

export const metadata: Metadata = {
  title: "Events",
  description:
    "A portfolio of events catered by PS Caterers — weddings, corporate gatherings, family celebrations, traditional functions and large events.",
};

export default function EventsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            Event Portfolio
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            Occasions We've Helped Shape
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary-txt">
            The entries below are placeholders illustrating how real event
            work will be presented once photography and details are supplied
            by the client.
          </p>
        </Container>
      </div>

      <Container className="py-14 sm:py-20">
        <EventsGrid />
      </Container>
    </div>
  );
}
