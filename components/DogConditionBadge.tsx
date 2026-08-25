type Tone = "primary" | "accent" | "neutral";

export default function DogConditionBadge({
  label,
  tone = "primary",
}: {
  label: string;
  tone?: Tone;
}) {
  const toneClasses: Record<Tone, string> = {
    primary: "bg-primary-tint text-primary-dark border-primary/20",
    accent: "bg-accent-tint text-accent-dark border-accent/20",
    neutral: "bg-surface-raised text-ink-soft border-line",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}
