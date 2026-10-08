"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import DownloadMenuButton from "@/components/ui/DownloadMenuButton";

const cateringPackages = [
  {
    name: "Royal Wedding Feast",
    description: "A luxurious spread of premium delicacies perfect for grand celebrations.",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    highlights: ["Welcome Drinks", "Live Chaat Counters", "Premium Main Course", "Dessert Bar"],
  },
  {
    name: "Corporate Buffet",
    description: "Elegant and professional catering for seminars, meetings, and office parties.",
    tag: "Corporate",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    highlights: ["Appetizers", "Balanced Mains", "Assorted Breads", "Refreshments"],
  },
  {
    name: "Festive Gatherings",
    description: "Authentic traditional feasts crafted to make your family festivals memorable.",
    tag: "Festive",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    highlights: ["Traditional Starters", "Rich Curries", "Flavored Rice", "Indian Sweets"],
  },
  {
    name: "High Tea & Snacks",
    description: "An elegant assortment of finger foods, chaats, and premium beverages.",
    tag: "Evening Events",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    highlights: ["Assorted Sandwiches", "Live Chaat", "Hot Savories", "Premium Tea/Coffee"],
  },
];

export default function FeaturedFood() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-txt mb-4">
              Curated Catering Packages
            </h2>
            <p className="text-secondary-txt text-lg">
              From intimate gatherings to grand celebrations, we offer tailored culinary experiences designed to delight your guests.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            <DownloadMenuButton className="w-full sm:w-auto" />
            <Link href="/services" className="hidden lg:inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-hover)] transition-colors">
              View all packages <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {cateringPackages.map((pkg, index) => (
            <motion.div 
              key={pkg.name}
              className="group bg-white rounded-[2rem] overflow-hidden card-shadow flex flex-col relative border border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary-txt shadow-sm">
                  {pkg.tag}
                </div>

              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-primary-txt mb-2">{pkg.name}</h3>
                <p className="text-sm text-secondary-txt mb-6 line-clamp-2">{pkg.description}</p>
                
                <div className="space-y-2 mb-8">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-secondary-txt">
                      <CheckCircle2 className="size-4 text-[var(--color-primary)] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
                  <Link href="/contact" className="w-full flex items-center justify-center px-5 py-3 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] font-semibold text-sm hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center lg:hidden">
          <Link href="/services" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-[var(--color-border)] text-primary-txt font-semibold shadow-sm active:scale-95 transition-transform">
            View All Packages
          </Link>
        </div>
      </Container>
    </section>
  );
}
