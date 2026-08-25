export default function MapPlaceholder({ label = "地図" }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong bg-primary-tint/40 p-6 text-center">
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75 3.75 9v11.25L9 18m0-11.25 6 2.25m-6-2.25v11.25M15 8.25l5.25-2.25V17.25L15 19.5m0-11.25v11.25m0-11.25L9 6m6 13.5L9 18"
        />
      </svg>
      <p className="text-sm font-medium text-primary-dark">{label}（準備中）</p>
      <p className="max-w-[24ch] text-xs text-ink-faint">
        Google Mapsとの連携は今後のフェーズで追加予定です。
      </p>
    </div>
  );
}
