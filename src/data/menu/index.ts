import type { MenuItem, MenuCategory } from "@/types";
import { generalMenuItems } from "./general";
import { functionMenuItems } from "./function-menu";
import { stallMenuItems } from "./stalls";
import { extraMenuItems } from "./extras";

export { menuCategories, categoryLabel } from "./categories";

// Full transcribed menu, combined from the client's 9-page source document.
export const allMenuItems: MenuItem[] = [
  ...generalMenuItems,
  ...functionMenuItems,
  ...stallMenuItems,
  ...extraMenuItems,
];

export function getMenuByCategory(category: MenuCategory | "all"): MenuItem[] {
  if (category === "all") return allMenuItems;
  return allMenuItems.filter((item) => item.category === category);
}

export function getFeaturedMenuItems(limit = 12): MenuItem[] {
  return allMenuItems.filter((item) => item.featured).slice(0, limit);
}

export function searchMenu(query: string): MenuItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return allMenuItems;
  return allMenuItems.filter((item) => {
    const haystack = [item.name, item.sourceName, item.subcategory, item.category]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

// Items requiring client confirmation on spelling/wording, surfaced for
// internal review — see README "Menu Verification Notes".
export const itemsNeedingConfirmation: MenuItem[] = allMenuItems.filter(
  (item) => item.needsClientConfirmation
);
