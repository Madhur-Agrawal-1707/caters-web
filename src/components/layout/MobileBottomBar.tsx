import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[var(--color-border)] bg-white/95 backdrop-blur-md pb-safe md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <a
        href={buildWhatsAppUrl(defaultWhatsAppMessage())}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-4 text-[0.95rem] font-semibold text-primary-txt active:bg-black/5 transition-colors"
      >
        <MessageCircle className="size-5 text-[var(--color-secondary)]" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-[var(--color-primary)] py-4 text-[0.95rem] font-semibold text-white shadow-[0_-4px_20px_rgba(252,128,25,0.2)] active:bg-[var(--color-primary-hover)] transition-colors"
      >
        Get a Quote
      </Link>
    </div>
  );
}
