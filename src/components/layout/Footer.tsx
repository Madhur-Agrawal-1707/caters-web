import Link from "next/link";
import { Instagram, Facebook, Youtube, MessageCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { business, isSocialConfigured, formatPhoneForTel } from "@/config/business";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-text)] text-white/80 pt-20 pb-10 mt-auto">
      <Container>
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-2 space-y-6">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="max-w-sm text-white/60 leading-relaxed font-sans">
              Premium catering for weddings, family functions, and celebrations. We bring people together with food that feels like home, elevated for your special moments.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {isSocialConfigured.instagram && (
                <a href={business.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors text-white">
                  <Instagram className="size-5" />
                </a>
              )}
              {isSocialConfigured.facebook && (
                <a href={business.facebook} aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors text-white">
                  <Facebook className="size-5" />
                </a>
              )}
              {isSocialConfigured.youtube && (
                <a href={business.youtube} aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors text-white">
                  <Youtube className="size-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/catering" className="hover:text-white transition-colors">Catering</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Occasions</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li>
                <a href={`tel:${formatPhoneForTel(business.phone)}`} className="hover:text-white transition-colors flex items-center gap-2">
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl(defaultWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="size-4" /> Message on WhatsApp
                </a>
              </li>
              {business.email !== "REPLACE_WITH_EMAIL" && (
                <li>
                  <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                    {business.email}
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-hover)] transition-colors">
                Get a Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-white/40">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Available for events across India, subject to confirmation.</p>
        </div>
      </Container>
    </footer>
  );
}
