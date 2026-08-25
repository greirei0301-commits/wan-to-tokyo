"use client";

import { useEffect, useState, type MouseEvent } from "react";

const STORAGE_KEY = "wantotokyo:favorites";

function readFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeFavorites(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // localStorageが使えない環境では何もしない
  }
}

export default function FavoriteButton({
  facilityId,
  size = "md",
}: {
  facilityId: string;
  size?: "sm" | "md";
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(readFavorites().includes(facilityId));
  }, [facilityId]);

  function toggle(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const current = readFavorites();
    const next = current.includes(facilityId)
      ? current.filter((id) => id !== facilityId)
      : [...current, facilityId];
    writeFavorites(next);
    setIsFavorite(next.includes(facilityId));
  }

  const dims = size === "sm" ? "h-8 w-8" : "h-11 w-11";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "お気に入りから外す" : "お気に入りに追加"}
      className={`${dims} inline-flex items-center justify-center rounded-full border transition-colors ${
        isFavorite
          ? "border-accent bg-accent text-white"
          : "border-line bg-surface text-ink-soft hover:border-accent hover:text-accent"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.727c-.4 0-.79-.15-1.09-.42C7.14 16.99 3.75 13.63 3.75 9.94 3.75 7.2 5.94 5 8.68 5c1.53 0 2.99.72 3.92 1.87A5.06 5.06 0 0 1 16.52 5c2.74 0 4.93 2.2 4.93 4.94 0 3.69-3.39 7.05-7.16 10.37-.3.27-.69.42-1.09.42Z"
        />
      </svg>
    </button>
  );
}
