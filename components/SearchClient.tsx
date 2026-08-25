"use client";

import { useMemo, useState } from "react";
import { AREAS, facilities } from "@/lib/data";
import { Category, Facility } from "@/lib/types";
import FacilityGrid from "./FacilityGrid";
import FilterPanel, { EMPTY_FILTERS, Filters } from "./FilterPanel";
import MapPlaceholder from "./MapPlaceholder";
import SearchBar from "./SearchBar";

function matches(facility: Facility, filters: Filters, query: string): boolean {
  if (query) {
    const q = query.toLowerCase();
    const haystack = `${facility.name} ${facility.area} ${facility.address}`.toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  if (filters.categories.length && !filters.categories.includes(facility.category)) return false;
  if (filters.areas.length && !filters.areas.includes(facility.area)) return false;
  if (filters.small && !facility.allowsSmallDog) return false;
  if (filters.medium && !facility.allowsMediumDog) return false;
  if (filters.large && !facility.allowsLargeDog) return false;
  if (filters.indoor && !facility.indoorAllowed) return false;
  if (filters.terrace && !facility.terraceAllowed) return false;
  if (filters.dogMenu && !facility.hasDogMenu) return false;
  if (filters.parking && !facility.hasParking) return false;
  return true;
}

export default function SearchClient({
  initialQuery,
  initialCategory,
  initialArea,
}: {
  initialQuery: string;
  initialCategory?: Category;
  initialArea?: string;
}) {
  const query = initialQuery;
  const [filters, setFilters] = useState<Filters>({
    ...EMPTY_FILTERS,
    categories: initialCategory ? [initialCategory] : [],
    areas: initialArea ? [initialArea] : [],
  });
  const [mobileView, setMobileView] = useState<"list" | "map">("list");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(
    () => facilities.filter((f) => matches(f, filters, query)),
    [filters, query]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="mb-5">
        <SearchBar initialQuery={query} />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink">{results.length}件</span> 見つかりました
        </p>
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-ink-soft lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          絞り込み
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr_320px]">
        <aside className="hidden lg:block">
          <div className="sticky top-20 rounded-2xl border border-line bg-surface p-4">
            <FilterPanel filters={filters} onChange={setFilters} areas={AREAS} />
          </div>
        </aside>

        <div>
          <div className="mb-4 flex gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileView("list")}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                mobileView === "list" ? "bg-primary text-white" : "bg-surface-raised text-ink-soft"
              }`}
            >
              リスト
            </button>
            <button
              type="button"
              onClick={() => setMobileView("map")}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                mobileView === "map" ? "bg-primary text-white" : "bg-surface-raised text-ink-soft"
              }`}
            >
              地図
            </button>
          </div>

          <div className={mobileView === "map" ? "hidden lg:block" : "block"}>
            <FacilityGrid facilities={results} />
          </div>
          <div className={mobileView === "map" ? "block lg:hidden" : "hidden"}>
            <MapPlaceholder label="検索結果の地図表示" />
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-20 h-[calc(100vh-6rem)]">
            <MapPlaceholder label="検索結果の地図表示" />
          </div>
        </aside>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-40 flex items-end bg-ink/40 lg:hidden" onClick={() => setFiltersOpen(false)}>
          <div
            className="max-h-[80vh] w-full overflow-y-auto rounded-t-2xl bg-surface p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-base font-semibold">絞り込み</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} className="text-sm text-ink-faint">
                閉じる
              </button>
            </div>
            <FilterPanel filters={filters} onChange={setFilters} areas={AREAS} />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-5 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white"
            >
              {results.length}件を表示する
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
