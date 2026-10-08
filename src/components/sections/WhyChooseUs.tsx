"use client";

import { HeartHandshake, Utensils, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const benefits = [
  { icon: Utensils, title: "Fresh Ingredients", desc: "Sourced locally for the best flavor." },
  { icon: HeartHandshake, title: "Professional Service", desc: "Experienced staff to handle everything." },
  { icon: Sparkles, title: "Custom Menus", desc: "Tailored to your specific event." },
  { icon: Clock, title: "On-time Delivery", desc: "We respect your schedule." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-txt leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              More than catering. <br/>
              <span className="text-[var(--color-primary)]">We take care of the experience.</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-secondary-txt mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We believe great food is the heart of any memorable event. Our team ensures every detail is perfect, from preparation to presentation.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit.title}
                className="bg-white p-6 rounded-3xl card-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-4 text-[var(--color-primary)]">
                  <benefit.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-txt mb-2">{benefit.title}</h3>
                <p className="text-secondary-txt text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
