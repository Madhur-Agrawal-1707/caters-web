import { business } from "@/config/business";
import { siteConfig } from "@/config/site";

export default function StructuredData() {
  // Only factual, confirmed information is included. Address/city/geo are
  // intentionally omitted until the client confirms them — see business.ts.
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: business.name,
    founder: business.proprietor,
    url: siteConfig.seo.url,
    telephone: business.phone,
    servesCuisine: "Indian",
    priceRange: "$$",
    description: siteConfig.seo.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
