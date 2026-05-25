import express from "express";

import {
  clauseLane,
  obligationGraph,
  payload,
  reviewPosture,
  summary,
  verification
} from "./services/contractClauseService";
import {
  renderClauseLane,
  renderDocs,
  renderObligationGraph,
  renderOverview,
  renderReviewPosture,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5426);

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/clause-lane", (_req, res) => res.type("html").send(renderClauseLane()));
app.get("/obligation-graph", (_req, res) => res.type("html").send(renderObligationGraph()));
app.get("/review-posture", (_req, res) => res.type("html").send(renderReviewPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/clause-lane", (_req, res) => res.json(clauseLane()));
app.get("/api/obligation-graph", (_req, res) => res.json(obligationGraph()));
app.get("/api/review-posture", (_req, res) => res.json(reviewPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, "127.0.0.1", () => {
    console.log(`Contract Clause Obligation Graph listening on http://127.0.0.1:${port}`);
  });
}

export default app;
