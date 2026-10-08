"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import DownloadMenuButton from "@/components/ui/DownloadMenuButton";
import { allMenuItems, menuCategories, categoryLabel } from "@/data/menu";
import MenuCategoryTabs from "./MenuCategoryTabs";
import MenuSearch from "./MenuSearch";
import MenuItemCard from "./MenuItemCard";
import { MenuSelectionProvider } from "./MenuSelectionContext";
import MenuDrawer from "./MenuDrawer";

export default function MenuExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const qs = params.toString();
    router.replace(qs ? `/menu?${qs}` : "/menu", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    let items = category === "all" ? allMenuItems : allMenuItems.filter((i) => i.category === category);
    const q = query.trim().toLowerCase();
    if (q) {
      items = items.filter((item) => {
        const haystack = [item.name, item.sourceName, item.subcategory, item.category]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    return items;
  }, [category, query]);

  const grouped = useMemo(() => {
    if (category !== "all" || query.trim()) return null;
    return menuCategories.map((cat) => ({
      ...cat,
      items: allMenuItems.filter((i) => i.category === cat.id),
    }));
  }, [category, query]);

  return (
    <MenuSelectionProvider>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex-1 w-full max-w-xl">
            <MenuSearch value={query} onChange={setQuery} />
          </div>
          <DownloadMenuButton className="w-full sm:w-auto" />
        </div>

        <MenuCategoryTabs
          categories={menuCategories}
          active={category}
          onChange={setCategory}
        />

        <div className="mt-10">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center"
              >
                <p className="text-lg text-secondary-txt font-medium">No dishes found matching your search.</p>
              </motion.div>
            ) : grouped ? (
              <div className="space-y-16">
                {grouped
                  .filter((g) => g.items.length > 0)
                  .map((group) => (
                    <motion.div 
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <h2 className="font-display text-3xl font-bold text-primary-txt mb-8">
                        {group.label}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {group.items.map((item) => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            ) : (
              <motion.div
                key="filtered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-6">
                  <p className="text-sm font-semibold text-secondary-txt uppercase tracking-wider">
                    Showing {filtered.length} dish{filtered.length !== 1 ? "es" : ""}
                    {category !== "all" ? ` for ${categoryLabel(category)}` : ""}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MenuDrawer />
    </MenuSelectionProvider>
  );
}
