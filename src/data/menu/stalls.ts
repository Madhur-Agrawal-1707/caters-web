import type { MenuItem } from "@/types";

// Transcribed from the client's scanned menu PDF — Live Counter / Stall pages 6-7.

export const stallMenuItems: MenuItem[] = [
  // PAGE 6 — PUNJABI STALL / DHABA
  { id: "st-pj-01", name: "Sarson Ka Saag", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-02", name: "Makka Ki Roti", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-03", name: "Gud Makhan", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-04", name: "Dal Makhani", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-05", name: "Punjabi Chhole", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-06", name: "Punjabi Kadhi", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-07", name: "Baingan Bharta", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-08", name: "Step Paratha — 3 Types", category: "punjabi-stall", sourcePage: 6, vegetarian: true },
  { id: "st-pj-09", name: "Amritsari Kulche", category: "punjabi-stall", sourcePage: 6, vegetarian: true, featured: true },

  // PAGE 6 — CHINESE STALL
  { id: "st-ch-01", name: "Fried Rice", category: "chinese-stall", sourcePage: 6, vegetarian: true },
  { id: "st-ch-02", name: "Veg Manchurian", category: "chinese-stall", sourcePage: 6, vegetarian: true },
  { id: "st-ch-03", name: "Chilli Paneer", category: "chinese-stall", sourcePage: 6, vegetarian: true },
  { id: "st-ch-04", name: "Pasta — Red / White", category: "chinese-stall", sourcePage: 6, vegetarian: true },

  // PAGE 7 — CHAAT
  { id: "st-cht-01", name: "Aloo Tikkiya", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-02", name: "Dahi Bhalla", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-03", name: "Pani Batasha — 2 Types", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true, featured: true },
  { id: "st-cht-04", name: "Dahi Papdi", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-05", name: "Paneer Angda", sourceName: "Paneer Angda", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true, needsClientConfirmation: true },
  { id: "st-cht-06", name: "Munglet", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-07", name: "Paneer Dal Cheela", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-08", name: "Vatter Dosa", sourceName: "Vatter Dosa", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true, needsClientConfirmation: true },
  { id: "st-cht-09", name: "Pav Bhaji", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true, featured: true },
  { id: "st-cht-10", name: "Chowmein", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },
  { id: "st-cht-11", name: "Muradabadi Dal", category: "chaat", subcategory: "Live Counter", sourcePage: 7, vegetarian: true },

  // PAGE 7 — BAKERY STALL
  { id: "st-bk-01", name: "Pizza — Thin Crust", category: "bakery-stall", sourcePage: 7, vegetarian: true, featured: true },
  { id: "st-bk-02", name: "Garlic Bread or Cheese Bread", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-03", name: "Mini Burger", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-04", name: "Mini Pastry", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-05", name: "Cake Variety", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-06", name: "Pudding Cup", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-07", name: "Short Tikala", sourceName: "Short Tikala", category: "bakery-stall", sourcePage: 7, vegetarian: true, needsClientConfirmation: true },
  { id: "st-bk-08", name: "Hot Chocolate Pastry", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-09", name: "Cookies", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-10", name: "Paneer Puff", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-11", name: "Walnut Pudding", category: "bakery-stall", sourcePage: 7, vegetarian: true },
  { id: "st-bk-12", name: "Hot Nutty Chocolate", category: "bakery-stall", sourcePage: 7, vegetarian: true },

  // PAGE 7 — FRUIT CHAAT STALL
  { id: "st-fr-01", name: "Watermelon", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-02", name: "Sarda", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-03", name: "Pineapple", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-04", name: "Guava", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-05", name: "Pomegranates", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-06", name: "Apple — Imported Quality", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-07", name: "Dragon Fruits", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-08", name: "Grapes", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-09", name: "Kiwi", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },
  { id: "st-fr-10", name: "Logan Litchi", category: "fruit-chaat-stall", sourcePage: 7, vegetarian: true },

  // PAGE 7 — MOCKTAIL STALL
  { id: "st-mk-01", name: "Chocolate Shake", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-02", name: "Vanilla Shake", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-03", name: "Strawberry Shake", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-04", name: "Mint Mojito", category: "mocktail-stall", sourcePage: 7, vegetarian: true, featured: true },
  { id: "st-mk-05", name: "Virgin Mary", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-06", name: "Lemonado", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-07", name: "Rose Mary Mojito", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-08", name: "Cold Drinks — Different Flavours", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-09", name: "Soda Shikanji", category: "mocktail-stall", sourcePage: 7, vegetarian: true },
  { id: "st-mk-10", name: "Real Juice", category: "mocktail-stall", sourcePage: 7, vegetarian: true },

  // PAGE 7 — OTHER STALLS / SERVICES
  { id: "st-ot-01", name: "Chai Coffee Stall — Full Time", category: "live-counters", sourcePage: 7, vegetarian: true },
  { id: "st-ot-02", name: "American Sweet Corn Stall", category: "live-counters", sourcePage: 7, vegetarian: true, featured: true },
  // Source wording for staffing was "Delhi Hotel Management Boys / Girls — Waiter Service".
  // Presented here with professional terminology; original wording retained for client review.
  { id: "st-ot-03", name: "Trained Hospitality & Service Staff", sourceName: "Delhi Hotel Management Boys/Girls — Waiter Service", category: "live-counters", sourcePage: 7, needsClientConfirmation: true },
];
