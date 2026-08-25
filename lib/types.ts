export type Category = "cafe" | "restaurant" | "dogrun" | "pethotel" | "petsalon";

export type DogPolicy = "indoor" | "terrace_only" | "conditional";

export type ReservationRequired = "not_required" | "recommended" | "required";

export interface Facility {
  id: string;
  slug: string;
  name: string;
  category: Category;
  area: string;
  address: string;
  description: string;
  dogPolicy: DogPolicy;
  indoorAllowed: boolean;
  terraceAllowed: boolean;
  allowsSmallDog: boolean;
  allowsMediumDog: boolean;
  allowsLargeDog: boolean;
  hasDogMenu: boolean;
  hasParking: boolean;
  reservationRequired: ReservationRequired;
  businessHours: string;
  phone?: string;
  websiteUrl?: string;
  images: string[];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  cafe: "カフェ",
  restaurant: "レストラン・居酒屋",
  dogrun: "ドッグラン",
  pethotel: "ペットホテル",
  petsalon: "ペットサロン",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  cafe: "☕",
  restaurant: "🍽️",
  dogrun: "🐕",
  pethotel: "🏨",
  petsalon: "✂️",
};

export const DOG_POLICY_LABELS: Record<DogPolicy, string> = {
  indoor: "店内OK",
  terrace_only: "テラスのみ",
  conditional: "条件付きOK",
};

export const RESERVATION_LABELS: Record<ReservationRequired, string> = {
  not_required: "予約不要",
  recommended: "予約推奨",
  required: "要予約",
};
