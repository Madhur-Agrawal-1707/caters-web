import type { MenuItem } from "@/types";

// Transcribed from the client's scanned menu PDF — "General Menu", pages 1-2.
// Source wording is preserved. Do not silently rename or merge items.

export const generalMenuItems: MenuItem[] = [
  // PAGE 1 — BREAKFAST
  { id: "gm-b-01", name: "Chai", category: "breakfast", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-b-02", name: "Coffee", category: "breakfast", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-b-03", name: "Biscuit", category: "breakfast", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-b-04", name: "Cookies", category: "breakfast", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-b-05", name: "Upma", category: "breakfast", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-b-06", name: "Bread Makhan Jam", category: "breakfast", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-b-07", name: "Dhokla", category: "breakfast", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-b-08", name: "Sandwich", category: "breakfast", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-b-09", name: "Dahi Jalebi", category: "breakfast", subcategory: "General Menu", sourcePage: 1, vegetarian: true },

  // PAGE 1 — LUNCH
  { id: "gm-l-01", name: "Dal Bati", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true, featured: true },
  { id: "gm-l-02", name: "Tikkad", sourceName: "Tikkad / Tikad", category: "lunch", subcategory: "General Menu", sourcePage: 1, needsClientConfirmation: true },
  { id: "gm-l-03", name: "Churma", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-04", name: "Aloo Matar", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-05", name: "Gatte Ki Sabzi", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-06", name: "Bathua Ka Raita", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-07", name: "Kheer", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-08", name: "Pulav", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-09", name: "Baingan Ka Bharta", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-10", name: "Salad, Papad, Achar", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-l-11", name: "Chapati", category: "lunch", subcategory: "General Menu", sourcePage: 1, vegetarian: true },

  // PAGE 1 — HIGH TEA
  { id: "gm-h-01", name: "Chai", category: "high-tea", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-h-02", name: "Coffee", category: "high-tea", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-h-03", name: "Biscuit", category: "high-tea", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-h-04", name: "Cookies", category: "high-tea", subcategory: "General Menu", sourcePage: 1 },
  { id: "gm-h-05", name: "Aloo Bada + Chutney", category: "high-tea", subcategory: "General Menu", sourcePage: 1, vegetarian: true },
  { id: "gm-h-06", name: "Paneer Pakoda and Veg Pakoda", category: "high-tea", subcategory: "General Menu", sourcePage: 1, vegetarian: true },

  // PAGE 2 — DINNER / SWEETS
  { id: "gm-sw-01", name: "Shilamil Rasmalai", sourceName: "Shilamil Rasmalai", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true, needsClientConfirmation: true },
  { id: "gm-sw-02", name: "Moong Dal Halwa", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sw-03", name: "Kaju Gujiya", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sw-04", name: "Kesar Bati", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true, needsClientConfirmation: true },
  { id: "gm-sw-05", name: "Imarti Rabdi", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sw-06", name: "Rajbhog", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sw-07", name: "Kulfi", category: "sweets", subcategory: "Dinner", sourcePage: 2, vegetarian: true },

  // PAGE 2 — DINNER / CHAAT
  { id: "gm-ch-01", name: "Aloo Tikkiya", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-02", name: "Pani Ki Tikkiya", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-03", name: "Dahi Malla", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-04", name: "Matar Patila", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-05", name: "Paneer Masala Dosa", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-06", name: "Special Pav Bhaji", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true, featured: true },
  { id: "gm-ch-07", name: "Paneer Dal Cheela", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-ch-08", name: "Chowmein", category: "chaat", subcategory: "Dinner", sourcePage: 2, vegetarian: true },

  // PAGE 2 — DINNER / MAIN COURSE
  { id: "gm-mc-01", name: "Paneer Butter Masala", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true, featured: true },
  { id: "gm-mc-02", name: "Matar Mushroom", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-03", name: "Dal Makhani", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true, featured: true },
  { id: "gm-mc-04", name: "Aloo Gobhi", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-05", name: "Palak Malai Kofta", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-06", name: "Vegetarian Raita", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-07", name: "Veg Pulav", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-08", name: "Roti / Naan / Missi", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-09", name: "Tawa Roti", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-10", name: "Missi Roti", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-11", name: "Poodi Sada Palak", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-12", name: "Salad", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-13", name: "Papad", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-mc-14", name: "Achar", category: "main-course", subcategory: "Dinner", sourcePage: 2, vegetarian: true },

  // PAGE 2 — DINNER / SNACKS & SPECIALS
  { id: "gm-sn-01", name: "Tomato Soup", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-02", name: "Hot & Sour Soup", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-03", name: "Cheese Balls", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-04", name: "Matar Potli", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-05", name: "Paneer Tikka Live", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true, featured: true },
  { id: "gm-sn-06", name: "Paneer Badami Tikka", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-07", name: "Mushroom Tikka", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-08", name: "Soyabean Chaap Tikka", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-09", name: "Finger Chips", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
  { id: "gm-sn-10", name: "Hare Bhare Kabab", category: "snacks", subcategory: "Dinner", sourcePage: 2, vegetarian: true },
];
