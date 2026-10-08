"use client";

import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Lightbox from "./Lightbox";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const aspectClass: Record<string, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors duration-200",
              active === cat.id
                ? "bg-[var(--color-ink)] text-[var(--color-ivory)]"
                : "border border-[var(--color-line)] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)]"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="block w-full break-inside-avoid text-left"
          >
            <ImagePlaceholder
              src={item.src}
              alt={item.alt}
              label={item.title ?? "Gallery Photograph"}
              className={cn("w-full", aspectClass[item.aspect ?? "square"])}
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
