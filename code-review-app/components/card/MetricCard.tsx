interface MetricCardProps {
  label: string;
  grade: "A" | "B" | "C" | "D" | "F";
}

const GRADE_COLORS: Record<MetricCardProps["grade"], string> = {
  A: "#4ECBA6",
  B: "#4ECBA6",
  C: "#F0B429",
  D: "#E74C3C",
  F: "#E74C3C",
};

export default function MetricCard({ label, grade }: MetricCardProps) {
  const color = GRADE_COLORS[grade];

  return (
    <div className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2.5">
      <div className="text-[22px] font-extrabold leading-none" style={{ color }}>
        {grade}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-wide text-white/30">
        {label}
      </div>
    </div>
  );
}
