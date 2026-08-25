import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import FacilityGrid from "@/components/FacilityGrid";
import { AREAS, facilities } from "@/lib/data";

export default function HomePage() {
  const recommended = facilities.slice(0, 6);

  return (
    <div>
      <section className="border-b border-line bg-gradient-to-b from-primary-tint/60 to-bg px-4 py-14 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1 text-xs font-medium text-primary-dark">
            東京都内 犬同伴おでかけスポット検索
          </span>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            愛犬と行ける東京の
            <br className="sm:hidden" />
            おでかけスポットを探そう
          </h1>
          <p className="max-w-md text-sm text-ink-soft">
            「店内OKか」「テラスのみか」「犬のサイズ制限」まで、犬連れで実際に知りたい条件で比較・検索できます。
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">カテゴリから探す</h2>
        <CategoryNav />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">人気のエリア</h2>
        <div className="flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <Link
              key={area}
              href={`/search?area=${encodeURIComponent(area)}`}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ink-soft hover:border-primary hover:text-primary-dark"
            >
              {area}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">おすすめの施設</h2>
          <Link href="/search" className="text-sm font-medium text-primary-dark hover:underline">
            すべて見る
          </Link>
        </div>
        <FacilityGrid facilities={recommended} />
      </section>
    </div>
  );
}
