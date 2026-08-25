import { Facility } from "@/lib/types";
import FacilityCard from "./FacilityCard";

export default function FacilityGrid({ facilities }: { facilities: Facility[] }) {
  if (facilities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface-raised py-16 text-center">
        <p className="text-sm text-ink-soft">条件に合う施設が見つかりませんでした。</p>
        <p className="mt-1 text-xs text-ink-faint">絞り込み条件を変えてお試しください。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {facilities.map((facility) => (
        <FacilityCard key={facility.id} facility={facility} />
      ))}
    </div>
  );
}
