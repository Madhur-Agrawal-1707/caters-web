import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium tracking-[0.14em] text-[var(--color-maroon)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[2rem] leading-[1.1] font-medium sm:text-[2.6rem] lg:text-[3.1rem]">
        {heading}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]/70 sm:text-lg">
          {body}
        </p>
      )}
    </Reveal>
  );
}
