import type { MenuItem } from "@/types";

// Transcribed from the client's scanned menu PDF — pages 8 & 9.

export const extraMenuItems: MenuItem[] = [
  // PAGE 8 — WELCOME SNACKS
  { id: "ex-ws-01", name: "Sweet Corn Soup", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-02", name: "Tomato Soup", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-03", name: "Hare Bhare Kabab", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-04", name: "Spring Roll", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-05", name: "Paneer Tikka Live Counter", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-06", name: "Paneer Tikka Achari / Lahsuni", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-07", name: "Chilli Potato", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-08", name: "Matar Potli", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-09", name: "Kaju Katli", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-10", name: "Pista Roll", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-11", name: "Mushroom Tikka", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-12", name: "Finger Chips", category: "welcome-snacks", sourcePage: 8, vegetarian: true },
  { id: "ex-ws-13", name: "Chilli Manchurian Fry", category: "welcome-snacks", sourcePage: 8, vegetarian: true },

  // PAGE 9 — ADDITIONAL BREAKFAST MENU
  { id: "ex-ab-01", name: "Bedai Aloo Ki Sabzi", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9, vegetarian: true },
  { id: "ex-ab-02", name: "Dahi Jalebi", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9, vegetarian: true },
  { id: "ex-ab-03", name: "Sandwich", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9, vegetarian: true },
  { id: "ex-ab-04", name: "Aloo Parathe Gobi", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9, vegetarian: true },
  { id: "ex-ab-05", name: "Mix Bhajiya", sourceName: "Mix Bhajiya / 4 Types Ke Pakode + Chutney", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9, vegetarian: true },
  { id: "ex-ab-06", name: "Chai", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9 },
  { id: "ex-ab-07", name: "Coffee", category: "breakfast", subcategory: "Additional Breakfast", sourcePage: 9 },
];
