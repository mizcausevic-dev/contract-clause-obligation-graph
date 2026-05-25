import { describe, expect, test } from "vitest";

import {
  renderClauseLane,
  renderDocs,
  renderObligationGraph,
  renderOverview,
  renderReviewPosture,
  renderVerification
} from "./render";
import {
  clauseRecords,
  obligationEdges,
  reviewPackets
} from "../data/sampleClauses";

const renderers = [
  ["overview", renderOverview],
  ["clause-lane", renderClauseLane],
  ["obligation-graph", renderObligationGraph],
  ["review-posture", renderReviewPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Contract Clause Obligation Graph");
    expect(html).toContain('href="/clause-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("overview surfaces clause data and risk tags", () => {
    const html = renderOverview();
    expect(html).toContain(clauseRecords[0].agreementId);
    expect(html).toContain(clauseRecords[0].counterparty);
    expect(html).toContain('class="tag critical"');
    expect(html).toContain('class="tag healthy"');
  });

  test("clause lane lists every agreement with owner and next action", () => {
    const html = renderClauseLane();
    for (const clause of clauseRecords) {
      expect(html).toContain(clause.agreementId);
      expect(html).toContain(clause.owner);
    }
  });

  test("obligation graph shows edges, owners, and all readiness tag classes", () => {
    const html = renderObligationGraph();
    for (const edge of obligationEdges) {
      expect(html).toContain(edge.edgeId);
      expect(html).toContain(edge.owner);
    }
    expect(html).toContain('class="tag red"');
    expect(html).toContain('class="tag green"');
    expect(html).toContain('class="tag yellow"');
  });

  test("review posture shows packets, completeness scores, and audiences", () => {
    const html = renderReviewPosture();
    for (const packet of reviewPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
      expect(html).toContain(packet.audience);
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
    expect(html).toContain("obligation");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/obligation-graph");
    expect(html).toContain("/review-posture");
  });
});
