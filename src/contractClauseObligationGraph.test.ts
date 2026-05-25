import { describe, expect, test } from "vitest";

import {
  categoryCoverage,
  clauseLane,
  obligationGraph,
  payload,
  reviewPosture,
  summary,
  verification
} from "./services/contractClauseService";

describe("contract-clause-obligation-graph", () => {
  test("summary exposes clause pressure and review blockers", () => {
    const stats = summary();
    expect(stats.agreementCount).toBeGreaterThan(2);
    expect(stats.criticalClauses).toBeGreaterThan(0);
    expect(stats.blockedReviews).toBeGreaterThan(0);
  });

  test("obligation graph and category coverage stay legally and operationally legible", () => {
    expect(obligationGraph().length).toBe(4);
    expect(categoryCoverage().length).toBeGreaterThan(3);
    expect(reviewPosture().some((packet) => packet.completenessScore < 80)).toBe(true);
  });

  test("payload bundles the full legaltech operator surface", () => {
    expect(clauseLane().length).toBe(5);
    expect(verification().length).toBe(3);
    expect(payload()).toHaveProperty("clauses");
    expect(payload()).toHaveProperty("obligations");
    expect(payload()).toHaveProperty("reviews");
  });
});
