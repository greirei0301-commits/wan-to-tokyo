"use client";

import { useEffect, useState } from "react";
import { facilities } from "@/lib/data";
import FacilityGrid from "@/components/FacilityGrid";

const STORAGE_KEY = "wantotokyo:favorites";

export default function FavoritesPage() {
  const [ids, setIds] = useState<string[] | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      setIds(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setIds([]);
    }
  }, []);

  const favoriteFacilities = facilities.filter((f) => ids?.includes(f.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="mb-1 font-display text-2xl font-bold text-ink">お気に入り</h1>
      <p className="mb-6 text-sm text-ink-soft">
        このブラウザに保存したお気に入り施設の一覧です（ログイン不要・端末ごとの保存です）。
      </p>
      {ids === null ? (
        <p className="text-sm text-ink-faint">読み込み中…</p>
      ) : (
        <FacilityGrid facilities={favoriteFacilities} />
      )}
    </div>
  );
}
