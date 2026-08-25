import Link from "next/link";
import { CATEGORY_ICONS, CATEGORY_LABELS, Category } from "@/lib/types";

const categories = Object.keys(CATEGORY_LABELS) as Category[];

export default function CategoryNav() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/search?category=${category}`}
          className="flex flex-none flex-col items-center gap-1.5 rounded-2xl border border-line bg-surface px-4 py-3 text-center transition-colors hover:border-primary hover:bg-primary-tint"
        >
          <span className="text-xl">{CATEGORY_ICONS[category]}</span>
          <span className="whitespace-nowrap text-xs font-medium text-ink-soft">
            {CATEGORY_LABELS[category]}
          </span>
        </Link>
      ))}
    </div>
  );
}
