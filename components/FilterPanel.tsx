"use client";

import { CATEGORY_LABELS, Category } from "@/lib/types";

export interface Filters {
  categories: Category[];
  areas: string[];
  small: boolean;
  medium: boolean;
  large: boolean;
  indoor: boolean;
  terrace: boolean;
  dogMenu: boolean;
  parking: boolean;
}

export const EMPTY_FILTERS: Filters = {
  categories: [],
  areas: [],
  small: false,
  medium: false,
  large: false,
  indoor: false,
  terrace: false,
  dogMenu: false,
  parking: false,
};

function CheckboxRow({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-line-strong text-primary focus:ring-primary"
      />
      {label}
    </label>
  );
}

export default function FilterPanel({
  filters,
  onChange,
  areas,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  areas: string[];
}) {
  function toggleCategory(category: Category) {
    const next = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onChange({ ...filters, categories: next });
  }

  function toggleArea(area: string) {
    const next = filters.areas.includes(area)
      ? filters.areas.filter((a) => a !== area)
      : [...filters.areas, area];
    onChange({ ...filters, areas: next });
  }

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">カテゴリ</h3>
        {(Object.keys(CATEGORY_LABELS) as Category[]).map((category) => (
          <CheckboxRow
            key={category}
            checked={filters.categories.includes(category)}
            onChange={() => toggleCategory(category)}
            label={CATEGORY_LABELS[category]}
          />
        ))}
      </section>

      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">エリア</h3>
        {areas.map((area) => (
          <CheckboxRow key={area} checked={filters.areas.includes(area)} onChange={() => toggleArea(area)} label={area} />
        ))}
      </section>

      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">犬のサイズ</h3>
        <CheckboxRow checked={filters.small} onChange={(v) => onChange({ ...filters, small: v })} label="小型犬OK" />
        <CheckboxRow checked={filters.medium} onChange={(v) => onChange({ ...filters, medium: v })} label="中型犬OK" />
        <CheckboxRow checked={filters.large} onChange={(v) => onChange({ ...filters, large: v })} label="大型犬OK" />
      </section>

      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">同伴エリア</h3>
        <CheckboxRow checked={filters.indoor} onChange={(v) => onChange({ ...filters, indoor: v })} label="店内OK" />
        <CheckboxRow checked={filters.terrace} onChange={(v) => onChange({ ...filters, terrace: v })} label="テラスOK" />
      </section>

      <section>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">その他</h3>
        <CheckboxRow checked={filters.dogMenu} onChange={(v) => onChange({ ...filters, dogMenu: v })} label="犬用メニューあり" />
        <CheckboxRow checked={filters.parking} onChange={(v) => onChange({ ...filters, parking: v })} label="駐車場あり" />
      </section>

      <button
        type="button"
        onClick={() => onChange(EMPTY_FILTERS)}
        className="self-start text-xs font-medium text-ink-faint underline decoration-line-strong underline-offset-2 hover:text-primary-dark"
      >
        絞り込みをリセット
      </button>
    </div>
  );
}
