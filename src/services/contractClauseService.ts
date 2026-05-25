import { clauseRecords, obligationEdges, reviewPackets } from "../data/sampleClauses";

export function summary() {
  return {
    agreementCount: new Set(clauseRecords.map((item) => item.agreementId)).size,
    criticalClauses: clauseRecords.filter((item) => item.risk === "critical").length,
    dueWithin30Days: clauseRecords.filter((item) => item.deadlineDays <= 30).length,
    blockedReviews: reviewPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Resolve audit-log and notice-sequencing blockers first so clause understanding turns into executable protection."
  };
}

export function clauseLane() {
  return clauseRecords;
}

export function obligationGraph() {
  return obligationEdges;
}

export function reviewPosture() {
  return reviewPackets;
}

export function categoryCoverage() {
  const counts = new Map<string, number>();
  for (const clause of clauseRecords) {
    counts.set(clause.clauseCategory, (counts.get(clause.clauseCategory) ?? 0) + 1);
  }

  return Array.from(counts.entries()).map(([category, clauseCount]) => ({
    category,
    clauseCount
  }));
}

export function verification() {
  return [
    "The surface shows that clause extraction is only useful when ownership, deadlines, and execution blockers are mapped with it.",
    "Obligation edges connect legal language to operational proof paths instead of treating review as a document-only exercise.",
    "Review posture makes commercial and renewal risk legible before a missed obligation becomes a contract failure."
  ];
}

export function payload() {
  return {
    dashboard: summary(),
    clauses: clauseLane(),
    obligations: obligationGraph(),
    reviews: reviewPosture(),
    categories: categoryCoverage(),
    verification: verification()
  };
}
