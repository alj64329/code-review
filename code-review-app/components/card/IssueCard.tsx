"use client";

import { Issue } from "@/type/review";
import { SeverityIcon } from "../shared/SeverityChip";

interface IssueCardProps {
  issue: Issue;
  onApplyFix?: (issue: Issue) => void;
}

export default function IssueCard({ issue, onApplyFix }: IssueCardProps) {
  return (
    <div className="border-b border-white/10 px-5 py-3.5 last:border-b-0">
      <div className="mb-1.5 flex items-start gap-2.5">
        <SeverityIcon severity={issue.severity} />
        <span className="flex-1 text-[13px] font-semibold text-white">
          {issue.title}
        </span>
        <span className="text-[11px] text-white/30">L{issue.line}</span>
      </div>

      <p className="ml-[30px] text-[12px] leading-relaxed text-white/30">
        {issue.description}
      </p>

      {issue.severity !== "tip" && (
        <button
          onClick={() => onApplyFix?.(issue)}
          disabled={issue.fixApplied}
          className={[
            "ml-[30px] mt-2 rounded-md border border-[#7B61FF]/25 bg-[#7B61FF]/10 px-3 py-1.5 text-[11px] font-medium text-[#A78FFF] transition-opacity",
            issue.fixApplied
              ? "cursor-default opacity-40"
              : "hover:bg-[#7B61FF]/20",
          ].join(" ")}
        >
          {issue.fixApplied ? "✓ Fix applied" : "✦ Apply fix"}
        </button>
      )}
    </div>
  );
}
