"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const categories = [
  { name: "Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=300&auto=format&fit=crop", href: "/catering#weddings" },
  { name: "Birthday", image: "/images/events/birthday.jpg", href: "/events#birthday" },
  { name: "Corporate", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=300&auto=format&fit=crop", href: "/catering#corporate" },
  { name: "House Party", image: "/images/events/house-party.jpg", href: "/events#house-party" },
  { name: "Engagement", image: "/images/events/engagement.jpg", href: "/events#engagement" },
  { name: "Festivals", image: "/images/events/festival.jpg", href: "/events#festivals" },
];

export default function CategoryScroller() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-primary-txt">What are you planning?</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href} className="group shrink-0 w-[100px] sm:w-[120px] flex flex-col items-center gap-3">
              <motion.div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors shadow-sm group-hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </motion.div>
              <span className="text-sm font-semibold text-primary-txt text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
