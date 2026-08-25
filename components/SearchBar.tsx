"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center gap-2 rounded-2xl border border-line bg-surface p-2 shadow-sm">
      <svg viewBox="0 0 24 24" className="ml-2 h-5 w-5 flex-none text-ink-faint" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="6.5" />
        <path strokeLinecap="round" d="m20 20-4.35-4.35" />
      </svg>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="エリアや施設名で探す（例：渋谷区、カフェ）"
        className="flex-1 bg-transparent py-2 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        検索
      </button>
    </form>
  );
}
