import type { GalleryItem, GalleryCategoryMeta } from "@/types";

// Gallery images are populated from /public/images/gallery once client
// photography is supplied. Until then, each entry renders an elegant
// placeholder block (see GalleryGrid) rather than an unrelated stock photo.

export const galleryCategories: GalleryCategoryMeta[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "weddings", label: "Weddings" },
  { id: "events", label: "Events" },
  { id: "live-counters", label: "Live Counters" },
  { id: "desserts", label: "Desserts" },
  { id: "behind-the-scenes", label: "Behind the Scenes" },
  { id: "team", label: "Team" },
];

// REPLACE WITH REAL CLIENT PHOTOGRAPHY.
export const galleryItems: GalleryItem[] = [
  { id: "g-01", src: "", alt: "Food photography — to be supplied", category: "food", aspect: "landscape" },
  { id: "g-02", src: "", alt: "Wedding catering setup — to be supplied", category: "weddings", aspect: "portrait" },
  { id: "g-03", src: "", alt: "Live counter service — to be supplied", category: "live-counters", aspect: "square" },
  { id: "g-04", src: "", alt: "Dessert presentation — to be supplied", category: "desserts", aspect: "portrait" },
  { id: "g-05", src: "", alt: "Event setup — to be supplied", category: "events", aspect: "landscape" },
  { id: "g-06", src: "", alt: "Behind the scenes — to be supplied", category: "behind-the-scenes", aspect: "square" },
  { id: "g-07", src: "", alt: "Service team — to be supplied", category: "team", aspect: "portrait" },
  { id: "g-08", src: "", alt: "Food photography — to be supplied", category: "food", aspect: "square" },
  { id: "g-09", src: "", alt: "Wedding catering setup — to be supplied", category: "weddings", aspect: "landscape" },
  { id: "g-10", src: "", alt: "Live counter service — to be supplied", category: "live-counters", aspect: "portrait" },
];
