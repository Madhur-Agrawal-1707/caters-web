// Core structured types for PS Caterers

export type MenuCategory =
  | "breakfast"
  | "lunch"
  | "high-tea"
  | "dinner"
  | "main-course"
  | "sweets"
  | "chaat"
  | "snacks"
  | "specials"
  | "live-counters"
  | "punjabi-stall"
  | "chinese-stall"
  | "bakery-stall"
  | "fruit-chaat-stall"
  | "mocktail-stall"
  | "welcome-snacks";

export interface MenuCategoryMeta {
  id: MenuCategory;
  label: string;
  eyebrow?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  sourceName?: string;
  category: MenuCategory;
  subcategory?: string;
  description?: string;
  featured?: boolean;
  vegetarian?: boolean;
  image?: string;
  sourcePage?: number;
  needsClientConfirmation?: boolean;
  tags?: string[];
}

export interface GalleryCategoryMeta {
  id: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
  eventId?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  location?: string;
  year?: string;
  description?: string;
  story?: string;
  images: string[];
  isDemoData?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  eventType?: string;
  location?: string;
  quote: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface ServiceLocation {
  city: string;
  state?: string;
  confirmed?: boolean;
}

export interface CateringService {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Quote flow

export type EventType =
  | "Wedding"
  | "Engagement / Sagai"
  | "Family Function"
  | "Religious Function"
  | "Corporate Event"
  | "Birthday / Anniversary"
  | "Large Gathering"
  | "Other";

export interface QuoteContactDetails {
  name: string;
  phone: string;
  email?: string;
}

export interface QuoteEventDetails {
  eventType: EventType | "";
  eventDate: string;
  city: string;
  venue?: string;
  guests: string;
}

export interface QuoteRequirements {
  selectedMenuItemIds: string[];
  additionalRequirements?: string;
}

export interface QuoteInquiry {
  contact: QuoteContactDetails;
  event: QuoteEventDetails;
  requirements: QuoteRequirements;
}

export interface InquirySubmissionResult {
  success: boolean;
  message: string;
}
