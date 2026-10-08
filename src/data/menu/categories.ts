import type { MenuCategoryMeta } from "@/types";

export const menuCategories: MenuCategoryMeta[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "high-tea", label: "High Tea" },
  { id: "dinner", label: "Dinner" },
  { id: "main-course", label: "Main Course" },
  { id: "sweets", label: "Sweets" },
  { id: "chaat", label: "Chaat" },
  { id: "snacks", label: "Snacks & Specials" },
  { id: "live-counters", label: "Live Counters" },
  { id: "punjabi-stall", label: "Punjabi Stall" },
  { id: "chinese-stall", label: "Chinese Stall" },
  { id: "bakery-stall", label: "Bakery Stall" },
  { id: "fruit-chaat-stall", label: "Fruit Chaat Stall" },
  { id: "mocktail-stall", label: "Mocktail Stall" },
  { id: "welcome-snacks", label: "Welcome Snacks" },
];

export function categoryLabel(id: string): string {
  return menuCategories.find((c) => c.id === id)?.label ?? id;
}
