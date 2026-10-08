import type {
  Testimonial,
  ServiceLocation,
  CateringService,
  FaqItem,
} from "@/types";

// REPLACE WITH VERIFIED CLIENT TESTIMONIALS. No real customer names or
// quotes have been invented — these are structural placeholders only.
export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    name: "[Client name to be confirmed]",
    eventType: "Wedding",
    location: "[City]",
    quote: "[REPLACE WITH VERIFIED CLIENT TESTIMONIAL]",
    isPlaceholder: true,
  },
  {
    id: "t-02",
    name: "[Client name to be confirmed]",
    eventType: "Corporate Event",
    location: "[City]",
    quote: "[REPLACE WITH VERIFIED CLIENT TESTIMONIAL]",
    isPlaceholder: true,
  },
  {
    id: "t-03",
    name: "[Client name to be confirmed]",
    eventType: "Family Function",
    location: "[City]",
    quote: "[REPLACE WITH VERIFIED CLIENT TESTIMONIAL]",
    isPlaceholder: true,
  },
];

// No confirmed service locations yet. Populate once the client verifies
// coverage. Leave empty (not fabricated) until then.
export const serviceLocations: ServiceLocation[] = [
  // Replace with confirmed service locations, e.g.:
  // { city: "Kanpur", state: "Uttar Pradesh", confirmed: true },
];

export const cateringServices: CateringService[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Multi-day wedding functions built around your rituals, guest count and venue — from welcome snacks to the final sweet course.",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Professional service for conferences, offsites and company celebrations, with menus suited to formal and informal settings alike.",
  },
  {
    id: "private-celebrations",
    title: "Private Celebrations",
    description:
      "Birthdays, anniversaries and intimate gatherings, catered with the same care as our largest events.",
  },
  {
    id: "religious-traditional",
    title: "Religious & Traditional Functions",
    description:
      "Menus shaped around ceremony and tradition, prepared with attention to ritual requirements and family preferences.",
  },
  {
    id: "large-scale",
    title: "Large-Scale Events",
    description:
      "Experienced coordination for gatherings with large guest counts, multiple stations and extended service hours.",
  },
  {
    id: "custom",
    title: "Custom Events",
    description:
      "Have something specific in mind? Our team works with you to build a menu and service plan around your occasion.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-01",
    question: "How far in advance should I enquire?",
    answer:
      "We recommend reaching out as early as possible, especially for wedding season dates, so we can confirm availability and begin planning your menu together.",
  },
  {
    id: "faq-02",
    question: "Do you create custom menus?",
    answer:
      "Yes. Menus are shaped around your event, guest preferences and any dietary or ritual requirements — share your requirements and our team will put together options.",
  },
  {
    id: "faq-03",
    question: "Do you provide live food counters?",
    answer:
      "Yes, live counters are part of our service offering, including Punjabi, Chinese, bakery, fruit chaat and mocktail stations. Browse the menu to see the full range.",
  },
  {
    id: "faq-04",
    question: "Can catering be arranged for large events?",
    answer:
      "Yes, our team is experienced in coordinating large-scale gatherings. Share your expected guest count and venue details so we can plan accordingly.",
  },
  {
    id: "faq-05",
    question: "Do you cater outside your home city?",
    answer:
      "We're open to events across India, subject to event requirements, travel logistics and availability. Get in touch with your city and date and we'll confirm coverage.",
  },
];
