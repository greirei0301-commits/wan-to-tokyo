"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/",
    label: "トップ",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10" />
      </svg>
    ),
  },
  {
    href: "/search",
    label: "探す",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.6}>
        <circle cx="11" cy="11" r="6.5" />
        <path strokeLinecap="round" d="m20 20-4.35-4.35" />
      </svg>
    ),
  },
  {
    href: "/favorites",
    label: "お気に入り",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.727c-.4 0-.79-.15-1.09-.42C7.14 16.99 3.75 13.63 3.75 9.94 3.75 7.2 5.94 5 8.68 5c1.53 0 2.99.72 3.92 1.87A5.06 5.06 0 0 1 16.52 5c2.74 0 4.93 2.2 4.93 4.94 0 3.69-3.39 7.05-7.16 10.37-.3.27-.69.42-1.09.42Z"
        />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-surface/95 backdrop-blur md:hidden">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] ${
              active ? "text-primary-dark" : "text-ink-faint"
            }`}
          >
            {item.icon(active)}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
