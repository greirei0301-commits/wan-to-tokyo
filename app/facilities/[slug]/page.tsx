import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { facilities, getFacilityBySlug } from "@/lib/data";
import {
  CATEGORY_LABELS,
  DOG_POLICY_LABELS,
  RESERVATION_LABELS,
} from "@/lib/types";
import DogConditionBadge from "@/components/DogConditionBadge";
import FavoriteButton from "@/components/FavoriteButton";
import MapPlaceholder from "@/components/MapPlaceholder";
import FacilityImagePlaceholder from "@/components/FacilityImagePlaceholder";

export function generateStaticParams() {
  return facilities.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) return {};
  return {
    title: facility.name,
    description: facility.description,
  };
}

export default function FacilityDetailPage({ params }: { params: { slug: string } }) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) notFound();

  const sizeLabel = [
    facility.allowsSmallDog && "小型犬",
    facility.allowsMediumDog && "中型犬",
    facility.allowsLargeDog && "大型犬",
  ]
    .filter(Boolean)
    .join("・");

  const infoRows: [string, string][] = [
    ["住所", facility.address],
    ["エリア", facility.area],
    ["営業時間", facility.businessHours],
    ["電話番号", facility.phone ?? "情報準備中"],
    ["駐車場", facility.hasParking ? "あり" : "なし・情報準備中"],
    ["予約", RESERVATION_LABELS[facility.reservationRequired]],
    ["犬用メニュー", facility.hasDogMenu ? "あり" : "なし"],
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link href="/search" className="mb-4 inline-flex items-center gap-1 text-sm text-ink-faint hover:text-primary-dark">
        ← 検索結果に戻る
      </Link>

      <div className="relative mb-5 overflow-hidden rounded-[28px] border-[6px] border-surface shadow-md shadow-ink/10">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-bold text-ink">
          🐾 サンプル画像
        </span>
        <FacilityImagePlaceholder category={facility.category} className="h-64 w-full sm:h-80" />
      </div>

      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-primary-dark">{CATEGORY_LABELS[facility.category]}</p>
          <h1 className="font-display text-2xl font-black text-ink">{facility.name}</h1>
        </div>
        <FavoriteButton facilityId={facility.id} />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <DogConditionBadge label={DOG_POLICY_LABELS[facility.dogPolicy]} tone="primary" />
        {sizeLabel && <DogConditionBadge label={`${sizeLabel}まで`} tone="accent" />}
        {facility.hasDogMenu && <DogConditionBadge label="犬用メニューあり" tone="neutral" />}
        {facility.hasParking && <DogConditionBadge label="駐車場あり" tone="neutral" />}
      </div>

      <p className="mb-8 text-sm leading-7 text-ink-soft">{facility.description}</p>

      <div className="mb-8 overflow-hidden rounded-[24px] border border-line">
        <table className="w-full text-sm">
          <tbody>
            {infoRows.map(([label, value]) => (
              <tr key={label} className="border-b border-line last:border-0">
                <th className="w-28 bg-surface-raised px-4 py-3 text-left font-bold text-ink-faint">{label}</th>
                <td className="px-4 py-3 text-ink">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {facility.websiteUrl && (
        <a
          href={facility.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-sand px-5 py-2.5 text-sm font-bold text-sand-ink hover:bg-primary hover:text-white"
        >
          公式サイトを見る ↗
        </a>
      )}

      <MapPlaceholder label={facility.name} />
    </div>
  );
}
