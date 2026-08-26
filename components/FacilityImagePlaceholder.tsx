import { Category } from "@/lib/types";
import PawIcon from "./PawIcon";

const GRADIENTS: Record<Category, string> = {
  cafe: "linear-gradient(150deg,#9CCB8C,#DCEACD)",
  restaurant: "linear-gradient(150deg,#83B478,#C9E3BE)",
  dogrun: "linear-gradient(150deg,#B7D9A8,#F3EBD7)",
  pethotel: "linear-gradient(150deg,#A9CE9B,#EFE7D2)",
  petsalon: "linear-gradient(150deg,#8FBF83,#DCEACD)",
};

export default function FacilityImagePlaceholder({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: GRADIENTS[category] }}
    >
      <PawIcon className="h-1/3 w-1/3 text-white/60" />
    </div>
  );
}
