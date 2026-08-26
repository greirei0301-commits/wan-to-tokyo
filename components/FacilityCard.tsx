import Link from "next/link";
import { CATEGORY_ICONS, CATEGORY_LABELS, DOG_POLICY_LABELS, Facility } from "@/lib/types";
import DogConditionBadge from "./DogConditionBadge";
import FavoriteButton from "./FavoriteButton";
import FacilityImagePlaceholder from "./FacilityImagePlaceholder";

export default function FacilityCard({ facility }: { facility: Facility }) {
  const sizeLabel = [
    facility.allowsSmallDog && "小型犬",
    facility.allowsMediumDog && "中型犬",
    facility.allowsLargeDog && "大型犬",
  ]
    .filter(Boolean)
    .join("・");

  return (
    <Link
      href={`/facilities/${facility.slug}`}
      className="group flex flex-col overflow-hidden rounded-[28px] bg-surface shadow-sm shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10"
    >
      <div className="relative m-2.5 overflow-hidden rounded-[20px]">
        <FacilityImagePlaceholder
          category={facility.category}
          className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2">
          <FavoriteButton facilityId={facility.id} size="sm" />
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-bold text-ink backdrop-blur">
          {CATEGORY_ICONS[facility.category]} {CATEGORY_LABELS[facility.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-1">
        <h3 className="font-display text-base font-bold text-ink">{facility.name}</h3>
        <p className="text-xs text-ink-faint">{facility.area}</p>
        <div className="flex flex-wrap gap-1.5">
          <DogConditionBadge label={DOG_POLICY_LABELS[facility.dogPolicy]} tone="primary" />
          {sizeLabel && <DogConditionBadge label={`${sizeLabel}まで`} tone="accent" />}
        </div>
        <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-sand px-4 py-2 text-xs font-bold text-sand-ink">
          詳しく見る →
        </span>
      </div>
    </Link>
  );
}
