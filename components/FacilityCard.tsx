import Link from "next/link";
import { CATEGORY_ICONS, CATEGORY_LABELS, DOG_POLICY_LABELS, Facility } from "@/lib/types";
import DogConditionBadge from "./DogConditionBadge";
import FavoriteButton from "./FavoriteButton";

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
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-tint">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={facility.images[0]}
          alt={facility.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2">
          <FavoriteButton facilityId={facility.id} size="sm" />
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-medium text-ink-soft backdrop-blur">
          {CATEGORY_ICONS[facility.category]} {CATEGORY_LABELS[facility.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-ink">{facility.name}</h3>
        </div>
        <p className="text-xs text-ink-faint">{facility.area}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          <DogConditionBadge label={DOG_POLICY_LABELS[facility.dogPolicy]} tone="primary" />
          {sizeLabel && <DogConditionBadge label={`${sizeLabel}まで`} tone="accent" />}
        </div>
      </div>
    </Link>
  );
}
