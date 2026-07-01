import { Severity } from "@/types/review";

interface SeverityChipProps {
  severity: Severity;
  count?: number;
}

const SEVERITY_CONFIG: Record<
  Severity,
  { color: string; label: string; icon: string }
> = {
  error: { color: "#E74C3C", label: "error", icon: "!" },
  warning: { color: "#F0B429", label: "warning", icon: "~" },
  tip: { color: "#4ECBA6", label: "tip", icon: "✓" },
};

export function SeverityChip({ severity, count = 1 }: SeverityChipProps) {
  const config = SEVERITY_CONFIG[severity];
  const label = count === 1 ? config.label : `${config.label}s`;

  return (
    <span
      className="rounded-full px-3 py-1 text-[11px] font-medium"
      style={{
        color: config.color,
        backgroundColor: `${config.color}1F`, // ~12% opacity
        border: `0.5px solid ${config.color}4D`, // ~30% opacity
      }}
    >
      {count} {label}
    </span>
  );
}

export function SeverityIcon({ severity }: { severity: Severity }) {
  const config = SEVERITY_CONFIG[severity];
  return (
    <div
      className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-md text-[10px] font-bold"
      style={{ color: config.color, backgroundColor: `${config.color}33` }}
    >
      {config.icon}
    </div>
  );
}

export { SEVERITY_CONFIG };
