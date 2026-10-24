import Link from "next/link";
import { business } from "@/config/business";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none select-none hover:opacity-80 transition-opacity"
      aria-label={`${business.name} — home`}
    >
      <span className="font-display text-2xl font-bold tracking-tight text-primary-txt">
        RS
      </span>
      <span className="font-sans text-[0.65rem] tracking-[0.2em] font-bold text-[var(--color-primary)] uppercase mt-0.5">
        Caterers
      </span>
    </Link>
  );
}
