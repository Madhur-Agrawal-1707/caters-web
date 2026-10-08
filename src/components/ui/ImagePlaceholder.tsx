import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders a supplied image when `src` is present; otherwise renders a
 * tasteful placeholder block naming what belongs there, rather than an
 * unrelated stock photo. See MEDIA README for asset replacement.
 */
export default function ImagePlaceholder({
  src,
  alt,
  label,
  className,
  fill = true,
  sizes,
  priority,
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-[var(--color-cream)]", className)}>
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes ?? "100vw"}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-ivory)] to-[var(--color-champagne)]/40",
        className
      )}
    >
      <div className="grain absolute inset-0" />
      <span className="relative px-4 text-center font-display text-sm italic text-[var(--color-ink)]/40">
        {label}
      </span>
    </div>
  );
}
