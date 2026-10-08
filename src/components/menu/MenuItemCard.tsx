"use client";

import { Plus, Check } from "lucide-react";
import type { MenuItem } from "@/types";
import { useMenuSelection } from "./MenuSelectionContext";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const { isSelected, toggle } = useMenuSelection();
  const selected = isSelected(item.id);

  return (
    <div className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden card-shadow relative transition-transform duration-300 sm:hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <ImagePlaceholder
          src={item.image}
          alt={item.name}
          label={item.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-md shadow-sm z-10">
          <div className={cn(
            "w-3 h-3 rounded-full border-2 flex items-center justify-center",
            item.vegetarian ? "border-green-600" : "border-red-600"
          )}>
            <div className={cn(
              "w-1.5 h-1.5 rounded-full",
              item.vegetarian ? "bg-green-600" : "bg-red-600"
            )} />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1 min-h-0">
          <h3 className="font-display text-lg font-bold text-primary-txt mb-1 line-clamp-1">{item.name}</h3>
          {item.description && (
            <p className="text-sm text-secondary-txt line-clamp-2 mt-2">
              {item.description}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(item.id)}
          aria-pressed={selected}
          className={cn(
            "mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all active:scale-95 border-2",
            selected
              ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
              : "bg-transparent border-[var(--color-border)] text-primary-txt hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          )}
        >
          {selected ? (
            <>
              <Check className="size-4.5" /> Added
            </>
          ) : (
            <>
              <Plus className="size-4.5" /> Add to Menu
            </>
          )}
        </button>
      </div>
    </div>
  );
}
