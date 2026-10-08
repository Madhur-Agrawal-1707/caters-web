import { cn } from "@/lib/utils";

const steps = ["Your Details", "Your Event", "Requirements", "Review"];

export default function QuoteStepIndicator({ current }: { current: number }) {
  return (
    <ol className="mb-10 flex items-center gap-2 sm:gap-4">
      {steps.map((label, i) => (
        <li key={label} className="flex flex-1 items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors",
                i === current
                  ? "bg-[var(--color-maroon)] text-[var(--color-ivory)]"
                  : i < current
                  ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
                  : "bg-[var(--color-cream)] text-[var(--color-ink)]/50"
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "hidden text-xs font-medium sm:inline",
                i === current ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]/45"
              )}
            >
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span className="h-px flex-1 bg-[var(--color-line)]" />
          )}
        </li>
      ))}
    </ol>
  );
}
