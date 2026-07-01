"use client";
import CodeEditor from "@/components/review/CodeEditor";
import ReviewPanel from "@/components/review/ReviewPanel";
import { Issue, ReviewResult } from "@/type/review";
import { useState } from "react";

const page = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [review, setReview] = useState<ReviewResult | null>(null);
  const [code, setCode] = useState("");

  function handleApplyFix(issue: Issue) {
    const lines = code.split("\n");
    lines[issue.line - 1] = issue.fix;
    setCode(lines.join("\n"));

    if (review) {
      setReview({
        ...review,
        issues: review.issues.map((i) =>
          i.id === issue.id ? { ...i, fixApplied: true } : i,
        ),
      });
    }
  }
  return (
    <div className="flex w-full">
      <div className="h-[95vh] w-[45%]">
        {/* Need to pass code*/}
        <CodeEditor />
      </div>
      <div className="flex-1">
        <ReviewPanel
          review={review}
          isLoading={isAnalyzing}
          onApplyFix={handleApplyFix}
        />
      </div>
    </div>
  );
};

export default page;
