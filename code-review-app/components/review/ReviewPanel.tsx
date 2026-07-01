import { Issue, ReviewResult } from "@/type/review";
import { SeverityChip } from "../shared/SeverityChip";
import ScoreCircle from "../shared/ScoreCircle";
import IssueCard from "../card/IssueCard";
import MetricCard from "../card/MetricCard";

function EmptyReviewState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
        <span className="text-2xl">✦</span>
      </div>
      <p className="text-[14px] font-medium text-white/60">No review yet</p>
      <p className="mt-1 text-[12px] text-white/30">
        Analyze your code to see results here
      </p>
    </div>
  );
}

function LoadingReviewState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#7B61FF]/20 border-t-[#7B61FF]" />
      <p className="text-[13px] text-white/30">Analyzing your code…</p>
    </div>
  );
}

interface ReviewPanelProps {
  review: ReviewResult | null;
  isLoading?: boolean;
  onApplyFix?: (issue: Issue) => void;
}

const ReviewPanel = ({
  review,
  isLoading = false,
  onApplyFix,
}: ReviewPanelProps) => {
  return (
    <div className="flex h-full flex-1 flex-col bg-[#0F1117]">
      {/* Header */}
      <div className="flex h-11 flex-shrink-0 items-center justify-between border-b border-white/10 bg-[#111318] px-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30">
          AI Review
        </span>
        {review && (
          <span className="text-[11px] text-white/30">
            {(review.analysisDurationMs / 1000).toFixed(1)}s · claude-sonnet
          </span>
        )}
      </div>

      {isLoading ? (
        <LoadingReviewState />
      ) : !review ? (
        <EmptyReviewState />
      ) : (
        <>
          {/* Score section */}
          <div className="flex-shrink-0 border-b border-white/10 bg-[#111318] px-5 py-4">
            <div className="flex items-center gap-4">
              <ScoreCircle score={review.score} />
              <div>
                <p className="mb-1.5 text-[15px] font-semibold text-white">
                  {review.scoreLabel}
                </p>
                <div className="flex gap-1.5">
                  {review.summary.totalErrors > 0 && (
                    <SeverityChip
                      severity="error"
                      count={review.summary.totalErrors}
                    />
                  )}
                  {review.summary.totalWarnings > 0 && (
                    <SeverityChip
                      severity="warning"
                      count={review.summary.totalWarnings}
                    />
                  )}
                  {review.summary.totalTips > 0 && (
                    <SeverityChip
                      severity="tip"
                      count={review.summary.totalTips}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Issues list */}
          <div className="flex-1 overflow-y-auto">
            {review.issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} onApplyFix={onApplyFix} />
            ))}
          </div>

          {/* Metrics bar */}
          <div className="flex flex-shrink-0 gap-2.5 border-t border-white/10 bg-[#111318] px-5 py-3.5">
            <MetricCard label="Readability" grade={review.grades.readability} />
            <MetricCard label="Reliability" grade={review.grades.reliability} />
            <MetricCard
              label="Best practices"
              grade={review.grades.bestPractices}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewPanel;
