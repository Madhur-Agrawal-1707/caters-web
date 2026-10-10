"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const occasions = [
  { name: "Wedding", description: "Grand feasts for your special day.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop", href: "/events#weddings", colSpan: 2 },
  { name: "Corporate", description: "Professional catering for business events.", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop", href: "/events#corporate", colSpan: 1 },
  { name: "House Party", description: "Intimate gatherings with great food.", image: "/images/events/house-party.jpg", href: "/events#house-party", colSpan: 1 },
  { name: "Birthday", description: "Joyful menus for all ages.", image: "/images/events/birthday.jpg", href: "/events#birthday", colSpan: 2 },
];

export default function OccasionsSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-txt mb-4">Catering for every occasion</h2>
          <p className="text-secondary-txt text-lg">Whatever you're celebrating, we'll make sure the food is unforgettable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {occasions.map((occ) => (
            <Link 
              key={occ.name} 
              href={occ.href}
              className={`group relative overflow-hidden rounded-[2rem] card-shadow bg-gray-100 aspect-square md:aspect-auto md:h-[400px] ${occ.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <Image
                src={occ.image}
                alt={occ.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">{occ.name}</h3>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-white/80 text-sm sm:text-base line-clamp-1 pr-4">{occ.description}</p>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <ArrowRight className="size-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
