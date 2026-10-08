import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of food, live counters, weddings and events catered by PS Caterers.",
};

export default function GalleryPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            Gallery
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            Photography from Our Events
          </h1>
        </Container>
      </div>

      <Container className="py-14 sm:py-20">
        <GalleryGrid />
      </Container>
    </div>
  );
}
