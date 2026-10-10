import type { MenuItem } from "@/types";

// Transcribed from the client's scanned menu PDF — "Menu De Function", pages 3-5.

export const functionMenuItems: MenuItem[] = [
  // PAGE 3 — BREAKFAST (per person)
  { id: "fm-b-01", name: "Idli Sambar Vada", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-02", name: "Idli Poha", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-03", name: "Sandwich", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-04", name: "Stuff Paratha", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-05", name: "Hari Chutney", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-06", name: "4 Types of Fruits", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-07", name: "4 Types of Pakoda", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-b-08", name: "Suji Halwa", category: "breakfast", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },

  // PAGE 3 — LUNCH (per person)
  { id: "fm-l-01", name: "Dal", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-02", name: "Chawal", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-03", name: "Kadhi", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-04", name: "Bara", sourceName: "Bara / Kachoriya", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true, needsClientConfirmation: true },
  { id: "fm-l-05", name: "Palak Paneer", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-06", name: "Dahi Ka Raita", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-07", name: "Aloo Gobhi", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-08", name: "Roti Tawa", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-09", name: "Salad Papad Achar", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-l-10", name: "Gulab Jamun", category: "lunch", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true, featured: true },

  // PAGE 3 — HIGH TEA (per person)
  { id: "fm-h-01", name: "Chai", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-h-02", name: "Coffee", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-h-03", name: "Biscuit", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-h-04", name: "Cookies", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-h-05", name: "Mini Samosa", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },
  { id: "fm-h-06", name: "Patties", category: "high-tea", subcategory: "Menu De Function", sourcePage: 3, vegetarian: true },

  // PAGE 4 — SWEETS
  { id: "fm-sw-01", name: "Gajar Halwa", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true, featured: true },
  { id: "fm-sw-02", name: "Badam Halwa", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-03", name: "Kesar Rasmalai Tikkiya", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-04", name: "Ghevar Malai", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-05", name: "Gulab Jamun Garam", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-06", name: "Dahi Jalebi", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-07", name: "Kaju Corn", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-08", name: "Kaju Gujiya", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-09", name: "Pista Kulfi", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-10", name: "Kesar Doodh", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },
  { id: "fm-sw-11", name: "Ice Cream", category: "sweets", subcategory: "Menu De Function", sourcePage: 4, vegetarian: true },

  // PAGE 5 — MAIN COURSE
  { id: "fm-mc-01", name: "Paneer Butter Masala", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-02", name: "Paneer Hyderabadi", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-03", name: "Matar Methi Malai", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-04", name: "Mix Veg", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-05", name: "Stuff Aloo", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-06", name: "Singapuri Kofta", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-07", name: "Dal Fry", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-08", name: "Fruit Raita", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-09", name: "Shahi Korma", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-10", name: "Jeera Rice", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-11", name: "Roti Naan", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-12", name: "Missi", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-13", name: "Tawa Roti", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-14", name: "Biscuiti", sourceName: "Biscuiti / Biskuti", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true, needsClientConfirmation: true },
  { id: "fm-mc-15", name: "Lachha Paratha", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-16", name: "Poodi Sada", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-17", name: "Palak Poodi", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-18", name: "Salad Decorate", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true, needsClientConfirmation: true },
  { id: "fm-mc-19", name: "Papad — 5 Types", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-20", name: "Achar — 5 Types", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
  { id: "fm-mc-21", name: "Moong Dal Bhajiya", category: "main-course", subcategory: "Menu De Function", sourcePage: 5, vegetarian: true },
];
