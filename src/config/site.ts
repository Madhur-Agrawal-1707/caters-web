// Editable site copy, SEO defaults, and statistics.
// Statistics remain hidden until the client supplies verified figures —
// see the `statistics` array below.

export const siteConfig = {
  seo: {
    titleTemplate: "%s | RS Caterers",
    defaultTitle: "RS Caterers — Premium Catering for Weddings & Celebrations",
    description:
      "RS Caterers designs and executes menus for weddings, family functions, religious ceremonies, corporate events and large celebrations, led by proprietor Ram Sewak Krishna.",
    url: "https://www.pscaterers.example",
    ogImage: "/images/brand/og-image.jpg",
  },

  hero: {
    eyebrow: "RS Caterers",
    headline: ["Exceptional Catering.", "Crafted for Celebrations."],
    description:
      "Thoughtfully crafted catering for weddings, celebrations, corporate gatherings and memorable occasions.",
    primaryCta: { label: "Plan Your Event", href: "/contact" },
    secondaryCta: { label: "Explore Our Menu", href: "/menu" },
  },

  trust: {
    eyebrow: "About RS Caterers",
    heading: "A Name Trusted Around the Table",
    body: "Every event we cater is treated as a singular occasion — the menu, the presentation and the service are shaped around it. Our team brings the same attention to a family gathering as to a large wedding, because hospitality shows in the details rather than the headline.",
  },

  // Statistics are placeholders. A stat only renders on the page once its
  // `value` is filled in — see StatBlock component. Do not invent numbers.
  statistics: [
    { id: "years", value: "", label: "Years of Experience" },
    { id: "events", value: "", label: "Events Catered" },
    { id: "guests", value: "", label: "Guests Served" },
    { id: "coverage", value: "", label: "Service Coverage" },
  ],

  finalCta: {
    heading: "Let's Plan Something Extraordinary.",
    body: "Tell us about your celebration and let our team help shape the menu around your event.",
  },

  footerCta: {
    heading: "Your celebration deserves exceptional food.",
    cta: { label: "Start Planning", href: "/contact" },
  },

  locations: {
    heading: "Serving Celebrations Across India",
    // Only used if the client confirms willingness to travel beyond their
    // home city. Until then this stays intentionally conditional.
    body: "Available for events across India, subject to event requirements, travel logistics and availability. Get in touch with your city and date so our team can confirm coverage.",
  },
} as const;
