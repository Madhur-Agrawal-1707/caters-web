import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const frames = [
  { label: "Close-up Preparation", size: "sm:row-span-2" },
  { label: "Live Counter Service", size: "" },
  { label: "Buffet Presentation", size: "" },
];

export default function FoodExperience() {
  return (
    <section className="border-t border-[var(--color-line)] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-medium tracking-[0.14em] text-[var(--color-maroon)]">
              The Food
            </p>
            <h2 className="font-display text-[2.1rem] leading-[1.1] font-medium sm:text-[2.6rem]">
              Food Worth Remembering
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-ink)]/70 sm:text-lg">
              From traditional Indian favourites to thoughtfully prepared live
              counters, our menus are designed to make food an essential part
              of the celebration.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="grid grid-cols-2 gap-3 sm:grid-rows-2 sm:gap-4"
          >
            {frames.map((frame) => (
              <ImagePlaceholder
                key={frame.label}
                alt={frame.label}
                label={frame.label}
                className={`aspect-[4/5] ${frame.size}`}
              />
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
