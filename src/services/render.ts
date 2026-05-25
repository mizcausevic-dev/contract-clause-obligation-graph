import {
  categoryCoverage,
  clauseLane,
  obligationGraph,
  reviewPosture,
  summary,
  verification
} from "./contractClauseService";

function layout(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    :root {
      --bg: #f4f0e7;
      --paper: #fbf9f3;
      --ink: #1d2026;
      --muted: #5f6470;
      --border: #d8d2c7;
      --accent: #0f766e;
      --accent-2: #1d4ed8;
      --yellow: #a16207;
      --red: #b91c1c;
      --green: #166534;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: linear-gradient(180deg, #ece6dc 0%, #f7f4ee 100%);
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
    }
    .shell {
      max-width: 1380px;
      margin: 0 auto;
      padding: 28px;
    }
    .topbar, .card, .table-wrap {
      background: rgba(251, 249, 243, 0.94);
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: 0 16px 40px rgba(36, 32, 27, 0.08);
    }
    .topbar {
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .brand {
      display: flex;
      gap: 14px;
      align-items: center;
    }
    .badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font: 700 16px/1 Arial, sans-serif;
    }
    .eyebrow {
      font: 600 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 4px;
    }
    .brand h1 {
      margin: 0;
      font: 700 28px/1.1 Arial, sans-serif;
    }
    .brand p {
      margin: 3px 0 0;
      color: var(--muted);
      font: 14px/1.5 Arial, sans-serif;
    }
    nav a {
      text-decoration: none;
      color: var(--muted);
      font: 600 13px/1 Arial, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-left: 16px;
    }
    nav a.active, nav a:hover { color: var(--ink); }
    .hero {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 22px;
      margin-bottom: 22px;
    }
    .card { padding: 24px; }
    .hero h2 {
      margin: 8px 0 10px;
      font: 700 54px/0.98 Georgia, serif;
      letter-spacing: -0.03em;
    }
    .hero p,
    .section p {
      color: var(--muted);
      font: 18px/1.6 Arial, sans-serif;
      margin: 0 0 18px;
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .stat {
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      background: rgba(255,255,255,0.56);
    }
    .stat label {
      display: block;
      color: var(--muted);
      font: 700 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .stat strong {
      display: block;
      font: 700 40px/1 Arial, sans-serif;
      margin-bottom: 8px;
    }
    .stat span {
      display: block;
      color: var(--muted);
      font: 13px/1.5 Arial, sans-serif;
    }
    .section-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 22px;
      margin-bottom: 22px;
    }
    .right-panel h3, .section h3 {
      margin: 0 0 12px;
      font: 700 20px/1.2 Arial, sans-serif;
    }
    .list {
      display: grid;
      gap: 12px;
    }
    .item {
      border-top: 1px solid var(--border);
      padding-top: 12px;
    }
    .item:first-child {
      border-top: 0;
      padding-top: 0;
    }
    .item strong {
      display: block;
      font: 700 15px/1.4 Arial, sans-serif;
      margin-bottom: 4px;
    }
    .item p, .item span {
      color: var(--muted);
      font: 13px/1.6 Arial, sans-serif;
      margin: 0;
    }
    .table-wrap {
      padding: 14px 18px 18px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font: 14px/1.5 Arial, sans-serif;
    }
    th, td {
      text-align: left;
      padding: 14px 10px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
    }
    th {
      color: var(--muted);
      font: 700 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .tag {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 999px;
      font: 700 11px/1 Arial, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: #e5f3f1;
      color: var(--accent);
    }
    .tag.watch, .tag.yellow { background: #fdf1db; color: var(--yellow); }
    .tag.critical, .tag.red { background: #fee5e5; color: var(--red); }
    .tag.green { background: #e7f7ec; color: var(--green); }
    .footer-note {
      margin-top: 12px;
      color: var(--muted);
      font: 13px/1.6 Arial, sans-serif;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    @media (max-width: 980px) {
      .hero, .section-grid, .card-grid { grid-template-columns: 1fr; }
      .stat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      nav { display: none; }
    }
  </style>
</head>
<body>
  <div class="shell">
    ${body}
  </div>
</body>
</html>`;
}

function topbar(active: string) {
  const links = [
    { href: "/", label: "Overview" },
    { href: "/clause-lane", label: "Clause Lane" },
    { href: "/obligation-graph", label: "Obligation Graph" },
    { href: "/review-posture", label: "Review Posture" },
    { href: "/verification", label: "Verification" },
    { href: "/docs", label: "Docs" }
  ];

  return `<div class="topbar">
    <div class="brand">
      <div class="badge">CG</div>
      <div>
        <div class="eyebrow">Contract Clause Obligation Graph</div>
        <h1>Clause-level legal operations control plane</h1>
        <p>Clause extraction, obligation graphing, review blockers, and renewal-safe execution in one operator surface.</p>
      </div>
    </div>
    <nav>${links
      .map((link) => `<a class="${active === link.href ? "active" : ""}" href="${link.href}">${link.label}</a>`)
      .join("")}</nav>
  </div>`;
}

function riskClass(value: string) {
  return value.toLowerCase();
}

function readinessClass(value: string) {
  if (value === "green") return "green";
  if (value === "yellow") return "yellow";
  return "red";
}

export function renderOverview() {
  const stats = summary();
  const clauses = clauseLane();
  const categories = categoryCoverage();
  const edges = obligationGraph();

  return layout(
    "Contract Clause Obligation Graph",
    `${topbar("/")}
    <div class="hero">
      <div class="card">
        <div class="eyebrow">LegalTech</div>
        <h2>Contract clauses only matter when someone can execute the obligation behind them.</h2>
        <p>This control plane makes clause pressure, ownership, deadline exposure, and review blockers visible before a legal commitment turns into an operational miss or a renewal problem.</p>
        <div class="stat-grid">
          <div class="stat"><label>Agreements</label><strong>${stats.agreementCount}</strong><span>Active agreements modeled through clause and obligation pressure.</span></div>
          <div class="stat"><label>Critical Clauses</label><strong>${stats.criticalClauses}</strong><span>Clauses with immediate legal or operational risk.</span></div>
          <div class="stat"><label>Due &lt; 30 Days</label><strong>${stats.dueWithin30Days}</strong><span>Owner lanes under near-term execution pressure.</span></div>
          <div class="stat"><label>Blocked Reviews</label><strong>${stats.blockedReviews}</strong><span>Review packets that still have substantive blockers.</span></div>
        </div>
      </div>
      <div class="card right-panel">
        <div class="eyebrow">Operating Recommendation</div>
        <h3>${stats.recommendation}</h3>
        <div class="list">
          ${clauses
            .slice(0, 3)
            .map(
              (item) => `<div class="item"><strong>${item.counterparty} · ${item.agreementId}</strong><p>${item.clauseTitle}</p><span>${item.deadlineDays} days left · ${item.nextAction}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="section-grid">
      <div class="table-wrap section">
        <div class="eyebrow">Clause Queue</div>
        <h3>Which obligations are likely to slip first.</h3>
        <table>
          <thead><tr><th>Agreement</th><th>Category</th><th>Owner</th><th>Days Left</th><th>Risk</th></tr></thead>
          <tbody>
            ${clauses
              .map(
                (item) => `<tr><td><strong>${item.counterparty}</strong><br />${item.agreementId}<br />${item.clauseTitle}</td><td>${item.clauseCategory}</td><td>${item.owner}</td><td>${item.deadlineDays}</td><td><span class="tag ${riskClass(item.risk)}">${item.risk}</span></td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="card section">
        <div class="eyebrow">Category Coverage</div>
        <h3>Where clause pressure is concentrated.</h3>
        <div class="list">
          ${categories
            .map(
              (item) => `<div class="item"><strong>${item.category}</strong><span>${item.clauseCount} modeled clause${item.clauseCount === 1 ? "" : "s"} in this category.</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="card section">
      <div class="eyebrow">Obligation Graph</div>
      <h3>Clause understanding is not enough if the graph to execution is missing.</h3>
      <div class="card-grid">
        ${edges
          .map(
            (item) => `<div class="stat"><label>${item.dependencyType}</label><strong style="font-size: 24px;">${item.impactArea}</strong><span>${item.sourceClause} → ${item.targetObligation}</span><div class="footer-note"><span class="tag ${readinessClass(item.readiness)}">${item.readiness}</span> · ${item.owner} · ${item.blocker}</div></div>`
          )
          .join("")}
      </div>
      <div class="footer-note">The buyer value is not clause novelty. It is seeing which obligations are executable, which are blocked, and which put the renewal or dispute posture at risk.</div>
    </div>`
  );
}

export function renderClauseLane() {
  return layout(
    "Contract Clause Obligation Graph — Clause Lane",
    `${topbar("/clause-lane")}
    <div class="card section">
      <div class="eyebrow">Clause Lane</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">A clause queue should show ownership and risk, not just text fragments.</h2>
      <p>Each row ties clause language to an owner, a timing window, and the next action needed to keep the agreement executable.</p>
    </div>
    <div class="table-wrap section" style="margin-top: 22px;">
      <table>
        <thead><tr><th>Agreement</th><th>Excerpt</th><th>Owner</th><th>Next Action</th><th>Risk</th></tr></thead>
        <tbody>
          ${clauseLane()
            .map(
              (item) => `<tr><td><strong>${item.counterparty}</strong><br />${item.agreementId}<br />${item.clauseTitle}</td><td>${item.excerpt}</td><td>${item.owner}</td><td>${item.nextAction}</td><td><span class="tag ${riskClass(item.risk)}">${item.risk}</span></td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`
  );
}

export function renderObligationGraph() {
  return layout(
    "Contract Clause Obligation Graph — Obligation Graph",
    `${topbar("/obligation-graph")}
    <div class="card section">
      <div class="eyebrow">Obligation Graph</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">The graph is where clause language becomes actual delivery work.</h2>
      <p>This lane maps source clauses to obligations, dependency types, owner lanes, and blockers that still prevent safe execution.</p>
    </div>
    <div class="section-grid" style="margin-top: 22px;">
      <div class="table-wrap section">
        <table>
          <thead><tr><th>Clause</th><th>Target Obligation</th><th>Owner</th><th>Readiness</th></tr></thead>
          <tbody>
            ${obligationGraph()
              .map(
                (item) => `<tr><td><strong>${item.sourceClause}</strong><br />${item.impactArea}</td><td>${item.targetObligation}</td><td>${item.owner}</td><td><span class="tag ${readinessClass(item.readiness)}">${item.readiness}</span></td></tr>`
              )
              .join("")}
        </tbody>
      </table>
      </div>
      <div class="card section">
        <div class="eyebrow">Dependency Blockers</div>
        <h3>Where legal review is likely to slow down.</h3>
        <div class="list">
          ${obligationGraph()
            .map(
              (item) => `<div class="item"><strong>${item.edgeId} · ${item.owner}</strong><p>${item.blocker}</p><span>${item.dependencyType} · ${item.impactArea}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>`
  );
}

export function renderReviewPosture() {
  return layout(
    "Contract Clause Obligation Graph — Review Posture",
    `${topbar("/review-posture")}
    <div class="card section">
      <div class="eyebrow">Review Posture</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">Commercial and legal risk show up when review packets are incomplete, not when the contract is already signed.</h2>
      <p>This lane surfaces which packets are ready, which still have blockers, and whether the issue is evidence, review ownership, or renewal timing.</p>
    </div>
    <div class="card-grid" style="margin-top: 22px;">
      ${reviewPosture()
        .map(
          (packet) => `<div class="card section"><div class="eyebrow">${packet.packetId}</div><h3>${packet.agreement}</h3><div class="stat-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 0;"><div class="stat"><label>Completeness</label><strong style="font-size: 30px;">${packet.completenessScore}%</strong><span>${packet.audience}</span></div><div class="stat"><label>Status</label><strong style="font-size: 30px;"><span class="tag ${readinessClass(packet.status)}">${packet.status}</span></strong><span>${packet.blocker}</span></div></div><div class="footer-note">${packet.renewalWindowDays} days to renewal window · ${packet.decisionNote}</div></div>`
        )
        .join("")}
    </div>`
  );
}

export function renderVerification() {
  return layout(
    "Contract Clause Obligation Graph — Verification",
    `${topbar("/verification")}
    <div class="card section">
      <div class="eyebrow">Verification</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">What this repo proves about legal operations and obligation systems.</h2>
      <div class="list">
        ${verification().map((item) => `<div class="item"><strong>${item}</strong></div>`).join("")}
      </div>
    </div>`
  );
}

export function renderDocs() {
  return layout(
    "Contract Clause Obligation Graph — Docs",
    `${topbar("/docs")}
    <div class="card section">
      <div class="eyebrow">Docs</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">A control plane for clause extraction, obligation graphs, and review-safe execution.</h2>
      <p>This repo models the operating layer between contractual text and real execution: clause visibility, owner routing, obligation dependency mapping, review blockers, and renewal-safe handoffs.</p>
      <div class="footer-note">Routes: <code>/</code> · <code>/clause-lane</code> · <code>/obligation-graph</code> · <code>/review-posture</code> · <code>/verification</code> · <code>/docs</code></div>
    </div>`
  );
}
