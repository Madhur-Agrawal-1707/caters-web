"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import DownloadMenuButton from "@/components/ui/DownloadMenuButton";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90svh] w-full bg-[var(--color-background)] pt-32 pb-16 overflow-hidden flex items-center">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-hover)] text-sm font-bold tracking-wide mb-6">
                <Star className="size-4 fill-current" />
                MADE FOR MOMENTS
              </p>
            </motion.div>

            <motion.h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary-txt leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Food that makes <br/>
              <span className="text-[var(--color-primary)]">people gather.</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-secondary-txt leading-relaxed mb-10 max-w-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Delicious catering for weddings, celebrations, corporate events and everything in between.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/menu"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/30 active:scale-95"
              >
                Explore Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border-2 border-[var(--color-border)] px-8 py-4 rounded-full text-primary-txt font-semibold text-lg transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-95"
              >
                Get a Quote
              </Link>
              <DownloadMenuButton className="px-8 py-4 text-lg" />
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-8 lg:mt-0">
            <motion.div
              className="absolute inset-0 z-0 bg-[var(--color-primary-light)] rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2 }}
            />
            
            <motion.div 
              className="relative z-10 w-[90%] max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden card-shadow bg-gray-100"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={mounted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                alt="Delicious catering food"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              className="absolute bottom-10 -left-4 sm:-left-12 z-20 bg-white p-4 rounded-2xl card-shadow flex items-center gap-4"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -20, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Biryani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-2">
                <p className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider mb-0.5">Chef's Pick</p>
                <p className="font-display font-semibold text-primary-txt text-sm">Dum Biryani</p>
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="absolute top-20 -right-4 sm:-right-8 z-20 bg-white px-5 py-3 rounded-full card-shadow flex items-center gap-2"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={mounted ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 20, y: -20 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
            >
              <span className="text-xl">✨</span>
              <span className="font-semibold text-sm text-primary-txt">Premium Quality</span>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
