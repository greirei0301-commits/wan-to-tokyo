import Link from "next/link";
import { CATEGORY_ICONS, CATEGORY_LABELS, Category } from "@/lib/types";

const categories = Object.keys(CATEGORY_LABELS) as Category[];

export default function CategoryNav() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/search?category=${category}`}
          className="flex w-[104px] flex-none flex-col items-center gap-2 rounded-[24px] bg-surface px-3 py-4 text-center shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-ink/10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-tint text-xl">
            {CATEGORY_ICONS[category]}
          </span>
          <span className="text-xs font-bold text-ink">{CATEGORY_LABELS[category]}</span>
        </Link>
      ))}
    </div>
  );
}
