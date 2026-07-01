interface ScoreCircleProps {
  score: number;
  size?: number;
}

function getScoreColor(score: number): string {
  if (score >= 80) return "#4ECBA6"; // teal
  if (score >= 60) return "#F0B429"; // amber
  return "#E74C3C"; // red
}

export default function ScoreCircle({ score, size = 60 }: ScoreCircleProps) {
  const color = getScoreColor(score);

  return (
    <div
      className="flex flex-shrink-0 flex-col items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: `2.5px solid ${color}`,
      }}
    >
      <span className="text-[20px] font-extrabold leading-none" style={{ color }}>
        {score}
      </span>
    </div>
  );
}
