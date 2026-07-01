export type Severity = "error" | "warning" | "tip";

export interface Issue {
  id: string;
  severity: Severity;
  line: number;
  title: string;
  description: string;
  fix: string;
  fixApplied: boolean;
}

export interface Grades {
  readability: "A" | "B" | "C" | "D" | "F";
  reliability: "A" | "B" | "C" | "D" | "F";
  bestPractices: "A" | "B" | "C" | "D" | "F";
}

export interface ReviewResult {
  reviewId: string;
  fileName: string;
  language: string;
  score: number;
  scoreLabel: string;
  grades: Grades;
  summary: {
    totalErrors: number;
    totalWarnings: number;
    totalTips: number;
  };
  issues: Issue[];
  analysisDurationMs: number;
}

export interface HistoryItem {
  id: string;
  fileName: string;
  language: string;
  score: number;
  timeAgo: string;
}

export type EditorTab = "review" | "history" | "docs";
export type InputMode = "upload" | "github";
