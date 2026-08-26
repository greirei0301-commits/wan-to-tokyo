import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import FacilityGrid from "@/components/FacilityGrid";
import PawIcon from "@/components/PawIcon";
import { AREAS, facilities } from "@/lib/data";

export default function HomePage() {
  const recommended = facilities.slice(0, 6);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-primary-tint/50 to-bg px-4 py-14 sm:px-6">
        <PawIcon className="pointer-events-none absolute left-[4%] top-8 h-7 w-7 -rotate-12 text-sand" />
        <PawIcon className="pointer-events-none absolute right-[6%] top-24 h-5 w-5 rotate-12 text-sand" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1.5 text-xs font-bold text-ink">
              🐾 東京都内 犬同伴おでかけスポット検索
            </span>
            <h1 className="font-display text-3xl font-black leading-snug text-ink sm:text-4xl">
              愛犬と行ける東京の
              <br />
              おでかけスポットを
              <span className="text-primary-dark">とびきりやさしく</span>。
            </h1>
            <p className="max-w-md text-sm leading-7 text-ink-soft">
              「店内OKか」「テラスのみか」「犬のサイズ制限」まで、犬連れで実際に知りたい条件で比較・検索できます。
            </p>
            <SearchBar />
            <div className="flex gap-8 pt-2">
              <div className="text-center lg:text-left">
                <p className="font-display text-xl font-black text-ink">{facilities.length}件</p>
                <p className="text-xs text-ink-faint">掲載中の施設</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-xl font-black text-ink">{AREAS.length}</p>
                <p className="text-xs text-ink-faint">対応区市町村</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-xl font-black text-ink">5種</p>
                <p className="text-xs text-ink-faint">カテゴリ</p>
              </div>
            </div>
          </div>
          <div className="relative flex h-64 w-full flex-1 items-center justify-center rounded-[32px] border-[6px] border-surface bg-gradient-to-br from-primary/70 to-primary-tint shadow-lg shadow-ink/10 sm:h-80">
            <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-bold text-ink">
              🐾 サンプル画像
            </span>
            <PawIcon className="h-24 w-24 text-white/60" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-5 text-center font-display text-lg font-black text-ink">カテゴリから探す</h2>
        <CategoryNav />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="mb-4 text-center font-display text-lg font-black text-ink">人気のエリア</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {AREAS.map((area) => (
            <Link
              key={area}
              href={`/search?area=${encodeURIComponent(area)}`}
              className="rounded-full bg-sand px-4 py-1.5 text-sm font-bold text-sand-ink transition-colors hover:bg-primary hover:text-white"
            >
              {area}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-lg font-black text-ink">おすすめの施設</h2>
          <Link href="/search" className="text-sm font-bold text-primary-dark hover:underline">
            すべて見る
          </Link>
        </div>
        <FacilityGrid facilities={recommended} />
      </section>
    </div>
  );
}
