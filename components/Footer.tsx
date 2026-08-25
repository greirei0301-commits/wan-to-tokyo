import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden border-t border-line bg-surface-raised md:block">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-faint">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-base font-semibold text-primary-dark">WAN TO TOKYO</p>
          <nav className="flex gap-5">
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
        <p className="mt-6">掲載情報は下書き段階のものを含みます。ご利用の際は最新情報を各施設にご確認ください。</p>
        <p className="mt-2">&copy; 2026 WAN TO TOKYO</p>
      </div>
    </footer>
  );
}
