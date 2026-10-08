"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="Catering event background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Planning something special?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Tell us what you're celebrating. We'll take care of the food.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--color-primary)] px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-[var(--color-primary-hover)] active:scale-95 shadow-lg shadow-[var(--color-primary)]/20"
            >
              Get a Catering Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center bg-white/10 backdrop-blur-md border-2 border-white/20 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-white/20 active:scale-95"
            >
              <Phone className="size-5" /> Call Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
