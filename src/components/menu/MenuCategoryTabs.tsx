"use client";

import { cn } from "@/lib/utils";
import type { MenuCategoryMeta } from "@/types";
import { motion } from "framer-motion";

export default function MenuCategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: MenuCategoryMeta[];
  active: string;
  onChange: (id: string) => void;
}) {
  const tabs = [{ id: "all", label: "All" }, ...categories];

  return (
    <div className="sticky top-[72px] lg:top-20 z-30 -mx-4 px-4 sm:mx-0 sm:px-0 py-4 bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={cn(
                "relative shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors outline-none",
                isActive
                  ? "text-white"
                  : "bg-white border border-[var(--color-border)] text-primary-txt shadow-sm hover:border-[var(--color-primary)]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full -z-10 shadow-md shadow-[var(--color-primary)]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
