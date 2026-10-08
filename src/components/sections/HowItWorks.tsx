"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const steps = [
  { num: "01", title: "Choose your menu", desc: "Explore our dishes and select what fits your event." },
  { num: "02", title: "Tell us about your event", desc: "Date, time, location, and guest count." },
  { num: "03", title: "We prepare everything", desc: "Our chefs craft your meal with care." },
  { num: "04", title: "Enjoy your celebration", desc: "We deliver and serve, you relax." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-txt">How It Works</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-border)] -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[var(--color-primary)] flex items-center justify-center font-display text-xl font-bold text-[var(--color-primary)] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-primary-txt mb-2">{step.title}</h3>
                <p className="text-secondary-txt text-sm max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
