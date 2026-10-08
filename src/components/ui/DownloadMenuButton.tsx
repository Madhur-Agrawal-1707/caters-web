"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadMenuButtonProps {
  className?: string;
}

export default function DownloadMenuButton({ className }: DownloadMenuButtonProps) {
  return (
    <motion.a
      href="/PS-Caterers-Menu.pdf"
      download="PS-Caterers-Menu.pdf"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold tracking-wide transition-all duration-300 rounded-full bg-[var(--color-primary)] text-white px-8 py-4 shadow-[0_8px_20px_rgba(252,128,25,0.4)] hover:shadow-[0_12px_25px_rgba(252,128,25,0.6)] shrink-0 border border-transparent",
        className
      )}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      <Download
        className="size-5 relative z-10 group-hover:-translate-y-1 transition-transform duration-300"
        strokeWidth={2.5}
      />
      <span className="relative z-10">Download Full Menu</span>
    </motion.a>
  );
}
