"use client";

import { Search } from "lucide-react";

export default function MenuSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-[var(--color-ink)]/40" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes — paneer, halwa, tikka, mocktail…"
        aria-label="Search the menu"
        className="w-full border border-[var(--color-line)] bg-[var(--color-ivory)] py-3 pr-4 pl-10 text-sm placeholder:text-[var(--color-ink)]/40 focus:border-[var(--color-ink)]/50 focus:outline-none"
      />
    </div>
  );
}
