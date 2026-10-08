import Hero from "@/components/hero/Hero";
import CategoryScroller from "@/components/sections/CategoryScroller";
import FeaturedFood from "@/components/sections/FeaturedFood";
import OccasionsSection from "@/components/sections/OccasionsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryScroller />
      <FeaturedFood />
      <OccasionsSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
