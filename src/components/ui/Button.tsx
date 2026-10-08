import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "link";

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-[0.01em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "rounded-none bg-[var(--color-ink)] text-[var(--color-ivory)] px-7 py-3.5 hover:bg-[var(--color-maroon-deep)]",
  secondary:
    "rounded-none border border-[var(--color-ink)]/70 text-[var(--color-ink)] px-7 py-3.5 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)]",
  link: "text-[var(--color-ink)] py-1 underline-offset-4 decoration-[var(--color-gold)]/0 hover:decoration-[var(--color-gold)] underline decoration-transparent",
};

export function Button({
  children,
  variant = "primary",
  className,
  showArrow,
  href,
  ...rest
}: BaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const content = (
    <>
      {children}
      {showArrow && <ArrowUpRight className="size-4" strokeWidth={1.75} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {content}
    </button>
  );
}
