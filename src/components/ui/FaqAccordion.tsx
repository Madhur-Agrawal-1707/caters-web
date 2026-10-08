"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-[var(--color-line)] border-t border-b border-[var(--color-line)]">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium">{item.question}</span>
              <Plus
                className={cn(
                  "size-4 shrink-0 text-[var(--color-maroon)] transition-transform duration-300",
                  open && "rotate-45"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-[var(--color-ink)]/65">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
