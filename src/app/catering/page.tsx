import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { cateringServices } from "@/data/content";
import { slugify } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering Services",
  description:
    "PS Caterers designs menus and event execution for weddings, corporate events, private celebrations, religious functions and large gatherings.",
};

const highlights = [
  {
    title: "Live Counters",
    body: "Punjabi, Chinese, bakery, fruit chaat and mocktail stations, prepared and served live at your event.",
  },
  {
    title: "Custom Menus",
    body: "Menus shaped around your guest list, dietary preferences and the specific occasion you're celebrating.",
  },
  {
    title: "Event Execution",
    body: "Planning, timing and coordination on the day, so the food arrives exactly as intended.",
  },
  {
    title: "Service Team",
    body: "Trained hospitality and service staff to support your event from setup through to the final course.",
  },
];

export default function CateringPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            Catering Services
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            Catering Built Around Your Event
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary-txt">
            Every engagement — large or small — is planned around the
            specifics of the occasion, from the menu to the way it's served.
          </p>
        </Container>
      </div>

      {/* Services */}
      <Container className="py-16 sm:py-24">
        <div className="space-y-24">
          {cateringServices.map((service, i) => (
            <Reveal
              key={service.id}
              id={slugify(service.title)}
              delay={i * 60}
              className="grid grid-cols-1 items-center gap-10 lg:gap-16 sm:grid-cols-2 scroll-mt-24"
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <h2 className="font-display text-3xl font-bold text-primary-txt sm:text-4xl mb-4">
                  {service.title}
                </h2>
                <p className="max-w-md text-lg leading-relaxed text-secondary-txt">
                  {service.description}
                </p>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden card-shadow aspect-[4/3] w-full bg-gray-100">
                <ImagePlaceholder
                  alt={service.title}
                  label={service.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Highlights */}
      <div className="bg-zinc-900 py-24 text-white">
        <Container>
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-center mb-16">
            What Every Event Includes
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="size-8 text-[var(--color-primary)] mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">
                  {h.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {h.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <Container className="py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-txt mb-8">
            Tell us about your event
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-primary)] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-[var(--color-primary-hover)] active:scale-95 shadow-md shadow-[var(--color-primary)]/20"
            >
              Request a Quote
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-white border-2 border-[var(--color-border)] px-8 py-4 rounded-full text-primary-txt font-semibold text-lg transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-95"
            >
              Explore Menu
            </Link>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
