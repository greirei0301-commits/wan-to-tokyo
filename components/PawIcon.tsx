export default function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <circle cx="14" cy="20" r="7" />
      <circle cx="27" cy="9" r="7" />
      <circle cx="41" cy="9" r="7" />
      <circle cx="54" cy="20" r="7" />
    </svg>
  );
}
