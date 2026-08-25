import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-primary-dark">WAN TO TOKYO</span>
          <span className="hidden text-xs text-ink-faint sm:inline">愛犬と行ける東京のおでかけスポット</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
          <Link href="/" className="hover:text-primary-dark">
            トップ
          </Link>
          <Link href="/search" className="hover:text-primary-dark">
            探す
          </Link>
          <Link href="/favorites" className="hover:text-primary-dark">
            お気に入り
          </Link>
        </nav>
      </div>
    </header>
  );
}
