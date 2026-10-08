import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind PS Caterers and proprietor Ram Sewak Krishna — an approach to catering built on hospitality and attention to detail.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            About Us
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            The Story Behind the Table
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary-txt">
            Our approach to catering is built on hospitality, attention to detail, and a deep love for sharing great food.
          </p>
        </Container>
      </div>

      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden card-shadow aspect-[4/5] w-full bg-gray-100">
              <ImagePlaceholder
                alt={`${business.proprietor}, proprietor of ${business.name}`}
                label="Owner Portrait"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-2">
              Proprietor
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-txt mb-6">
              {business.proprietor}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-secondary-txt">
              <p>
                [CLIENT TO PROVIDE] — a biography for {business.proprietor},
                covering how {business.name} came to be, the philosophy behind
                its catering, and what guides the team's approach to
                hospitality. This section is structured and ready — supply the
                details and they will appear here in full.
              </p>
              <p>
                Every menu is planned around the specific event it's
                serving. Attention goes into presentation, timing and service —
                not just the dishes themselves — because hospitality is felt in
                the details of how an event is run, not only in what's on
                the plate.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="bg-gray-50 py-24">
        <Container className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Our Philosophy",
              body: "[CLIENT TO PROVIDE] — the principles that guide how menus are built and events are served.",
            },
            {
              title: "Our Approach",
              body: "[CLIENT TO PROVIDE] — how the team plans, prepares and executes an event from first enquiry to final course.",
            },
            {
              title: "Looking Ahead",
              body: "[CLIENT TO PROVIDE] — the vision for where the business is headed as it reaches more cities across India.",
            },
          ].map((block, i) => (
            <Reveal key={block.title} delay={i * 80} className="bg-white p-8 lg:p-10 rounded-[2rem] card-shadow">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary-light)] mb-6 flex items-center justify-center text-[var(--color-primary)] font-display font-bold text-2xl shadow-sm">
                {i + 1}
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-txt mb-4">{block.title}</h3>
              <p className="text-secondary-txt leading-relaxed">
                {block.body}
              </p>
            </Reveal>
          ))}
        </Container>
      </div>
    </div>
  );
}
