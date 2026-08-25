import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { Category } from "@/lib/types";

export const metadata: Metadata = {
  title: "施設を探す",
  description: "エリア・カテゴリ・犬のサイズなどで、東京都内の犬同伴OKな施設を絞り込んで探せます。",
};

const VALID_CATEGORIES: Category[] = ["cafe", "restaurant", "dogrun", "pethotel", "petsalon"];

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = typeof searchParams.q === "string" ? searchParams.q : "";
  const categoryParam = typeof searchParams.category === "string" ? searchParams.category : undefined;
  const category = VALID_CATEGORIES.includes(categoryParam as Category)
    ? (categoryParam as Category)
    : undefined;
  const area = typeof searchParams.area === "string" ? searchParams.area : undefined;

  return (
    <SearchClient
      key={`${q}-${category ?? ""}-${area ?? ""}`}
      initialQuery={q}
      initialCategory={category}
      initialArea={area}
    />
  );
}
