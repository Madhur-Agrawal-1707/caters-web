import type { EventItem } from "@/types";

// REPLACE WITH REAL CLIENT EVENT DATA.
// The entries below are clearly-marked sample/demo data used only to
// illustrate the layout and structure of the Events section. No real event
// names, dates or locations have been invented as fact — treat every entry
// as a placeholder until the client supplies verified event history.

export const events: EventItem[] = [
  {
    id: "demo-wedding-01",
    slug: "sample-wedding-reception",
    title: "[Sample] Wedding Reception",
    type: "Weddings",
    location: "[City to be confirmed]",
    year: "[Year]",
    description: "Placeholder entry illustrating a full wedding catering engagement — replace with a real event once photography and details are supplied.",
    story: "[CLIENT TO PROVIDE] — a short account of the event, the menu shaped for it, and how service was executed on the day.",
    images: [],
    isDemoData: true,
  },
  {
    id: "demo-corporate-01",
    slug: "sample-corporate-gathering",
    title: "[Sample] Corporate Gathering",
    type: "Corporate",
    location: "[City to be confirmed]",
    year: "[Year]",
    description: "Placeholder entry for a corporate event — replace with verified client work.",
    story: "[CLIENT TO PROVIDE]",
    images: [],
    isDemoData: true,
  },
  {
    id: "demo-family-01",
    slug: "sample-family-celebration",
    title: "[Sample] Family Celebration",
    type: "Family Celebrations",
    location: "[City to be confirmed]",
    year: "[Year]",
    description: "Placeholder entry for a family function — replace with verified client work.",
    story: "[CLIENT TO PROVIDE]",
    images: [],
    isDemoData: true,
  },
  {
    id: "demo-traditional-01",
    slug: "sample-traditional-function",
    title: "[Sample] Traditional Function",
    type: "Traditional Functions",
    location: "[City to be confirmed]",
    year: "[Year]",
    description: "Placeholder entry for a religious or traditional function — replace with verified client work.",
    story: "[CLIENT TO PROVIDE]",
    images: [],
    isDemoData: true,
  },
  {
    id: "demo-large-01",
    slug: "sample-large-gathering",
    title: "[Sample] Large Gathering",
    type: "Large Gatherings",
    location: "[City to be confirmed]",
    year: "[Year]",
    description: "Placeholder entry for a large-scale event — replace with verified client work.",
    story: "[CLIENT TO PROVIDE]",
    images: [],
    isDemoData: true,
  },
];

export const eventTypes = [
  "All",
  "Weddings",
  "Corporate",
  "Family Celebrations",
  "Traditional Functions",
  "Large Gatherings",
] as const;

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}
