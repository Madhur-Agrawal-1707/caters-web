"use client";

import { createContext, useContext, useMemo, useState, useCallback, useEffect, useRef } from "react";

interface MenuSelectionContextValue {
  selectedIds: string[];
  isSelected: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
  count: number;
}

const MenuSelectionContext = createContext<MenuSelectionContextValue | null>(null);

const STORAGE_KEY = "ps-caterers:selected-menu";

function readStoredSelection(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}

export function MenuSelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const hydrated = useRef(false);

  // Hydrate from localStorage after mount so selections persist as a
  // visitor moves between the menu and the quote flow, without affecting
  // server-rendered markup (avoids a hydration mismatch). This effect
  // synchronizes React state with an external system (localStorage) and
  // only ever runs once, on mount.
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    setSelectedIds(readStoredSelection());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
    } catch {
      // Ignore storage failures (e.g. private browsing quota).
    }
  }, [selectedIds]);

  const toggle = useCallback((id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const clear = useCallback(() => setSelectedIds([]), []);

  const value = useMemo<MenuSelectionContextValue>(
    () => ({
      selectedIds,
      isSelected: (id: string) => selectedIds.includes(id),
      toggle,
      clear,
      count: selectedIds.length,
    }),
    [selectedIds, toggle, clear]
  );

  return (
    <MenuSelectionContext.Provider value={value}>
      {children}
    </MenuSelectionContext.Provider>
  );
}

export function useMenuSelection() {
  const ctx = useContext(MenuSelectionContext);
  if (!ctx) {
    throw new Error("useMenuSelection must be used within a MenuSelectionProvider");
  }
  return ctx;
}
