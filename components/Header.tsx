import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-lg text-white">
            🐾
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-black text-ink">WAN TO TOKYO</span>
            <span className="hidden text-[11px] font-medium text-ink-faint sm:inline">
              愛犬と行ける東京のおでかけスポット
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-bold text-ink-soft md:flex">
          <Link href="/" className="rounded-full px-4 py-2 transition-colors hover:bg-primary-tint hover:text-primary-dark">
            トップ
          </Link>
          <Link href="/search" className="rounded-full px-4 py-2 transition-colors hover:bg-primary-tint hover:text-primary-dark">
            探す
          </Link>
          <Link href="/favorites" className="rounded-full px-4 py-2 transition-colors hover:bg-primary-tint hover:text-primary-dark">
            お気に入り
          </Link>
        </nav>
      </div>
    </header>
  );
}
