"use client";

import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { GalleryItem } from "@/types";

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const item = items[index];

  const goPrev = () => onNavigate((index - 1 + items.length) % items.length);
  const goNext = () => onNavigate((index + 1) % items.length);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-ink)]/96 px-4"
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) goPrev();
        if (delta < -50) goNext();
        touchStartX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 p-2 text-[var(--color-ivory)]/80 hover:text-[var(--color-ivory)]"
      >
        <X className="size-6" />
      </button>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 p-2 text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] sm:block"
      >
        <ChevronLeft className="size-8" strokeWidth={1.25} />
      </button>

      <div className="max-h-[80vh] w-full max-w-3xl">
        <ImagePlaceholder
          src={item.src}
          alt={item.alt}
          label={item.title ?? "Gallery Photograph"}
          className="aspect-[4/3] w-full"
        />
        <p className="mt-4 text-center text-sm text-[var(--color-ivory)]/60">
          {index + 1} / {items.length}
        </p>
      </div>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next image"
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 p-2 text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] sm:block"
      >
        <ChevronRight className="size-8" strokeWidth={1.25} />
      </button>
    </div>
  );
}
