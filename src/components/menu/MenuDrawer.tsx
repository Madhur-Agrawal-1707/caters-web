"use client";

import { useState } from "react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import { useMenuSelection } from "./MenuSelectionContext";
import { allMenuItems } from "@/data/menu";
import { cn } from "@/lib/utils";

export default function MenuDrawer() {
  const { selectedIds, count, toggle, clear } = useMenuSelection();
  const [open, setOpen] = useState(false);

  const selectedItems = allMenuItems.filter((item) => selectedIds.includes(item.id));

  if (count === 0 && !open) return null;

  return (
    <>
      {count > 0 && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-4 z-40 flex items-center gap-2 bg-[var(--color-maroon)] px-5 py-3 text-sm font-medium text-[var(--color-ivory)] shadow-lg transition-transform duration-300 hover:scale-[1.03] md:bottom-8 md:right-8"
        >
          <ShoppingBag className="size-4" />
          My Menu · {count} item{count !== 1 ? "s" : ""}
        </button>
      )}

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[var(--color-ink)]/50"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="My event menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[var(--color-ivory)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-5">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] text-[var(--color-maroon)] uppercase">
                My Event Menu
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink)]/60">
                {count} dish{count !== 1 ? "es" : ""} selected
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-1 text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            {selectedItems.length === 0 ? (
              <p className="text-sm text-[var(--color-ink)]/55">
                No dishes selected yet. Browse the menu and tap &ldquo;Add&rdquo; on
                anything you&apos;d like included.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-line)]">
                {selectedItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-3">
                    <span className="text-sm">{item.name}</span>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="p-1 text-[var(--color-ink)]/40 hover:text-[var(--color-maroon)]"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-[var(--color-line)] px-6 py-5">
            {selectedItems.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="mb-3 text-xs text-[var(--color-ink)]/50 underline underline-offset-4 hover:text-[var(--color-ink)]"
              >
                Clear selection
              </button>
            )}
            <Link
              href="/contact?fromMenu=1"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center bg-[var(--color-ink)] py-3.5 text-sm font-medium text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-maroon-deep)]"
            >
              Request a Quote for This Menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
