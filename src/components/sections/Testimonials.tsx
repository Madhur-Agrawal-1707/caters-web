"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote: "The food was absolutely incredible. Our wedding guests are still talking about the Dal Makhani and Biryani!",
    name: "Rahul & Sneha",
    event: "Wedding Catering",
  },
  {
    quote: "Professional, punctual, and delicious. They made our corporate event a huge success without any stress.",
    name: "Aditi Sharma",
    event: "Corporate Event",
  },
  {
    quote: "Highly recommend for any house party. The appetizers were a hit and the service was impeccable.",
    name: "Vikram Singh",
    event: "House Party",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-txt mb-4">Loved by our clients</h2>
          <p className="text-secondary-txt text-lg">Don't just take our word for it.</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.name}
              className="shrink-0 w-[300px] sm:w-auto bg-white p-8 rounded-3xl card-shadow flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-6 text-[var(--color-primary)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-5 fill-current" />
                ))}
              </div>
              <p className="text-primary-txt text-lg leading-relaxed mb-8 flex-1 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display font-bold text-primary-txt">{testimonial.name}</p>
                <p className="text-sm text-secondary-txt">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
