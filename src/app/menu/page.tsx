import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import MenuExplorer from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full PS Caterers menu — breakfast, lunch, dinner, sweets, chaat, live counters and stalls — and build a menu to request a quote for your event.",
};

export default function MenuPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="bg-[var(--color-background)] py-14 sm:py-20 text-center">
        <Container>
          <p className="mb-4 text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase">
            Our Menu
          </p>
          <h1 className="font-display max-w-3xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1]">
            Explore the Menu
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-secondary-txt">
            Search or filter by category, then add dishes to build your own
            event menu. This helps us craft the perfect quote for your celebration.
          </p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <Suspense fallback={null}>
          <MenuExplorer />
        </Suspense>
      </Container>
    </div>
  );
}
