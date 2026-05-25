export type RiskLevel = "healthy" | "watch" | "critical";
export type ReadinessLevel = "green" | "yellow" | "red";

export interface ClauseRecord {
  agreementId: string;
  counterparty: string;
  clauseTitle: string;
  clauseCategory: string;
  owner: string;
  deadlineDays: number;
  risk: RiskLevel;
  excerpt: string;
  nextAction: string;
}

export interface ObligationEdge {
  edgeId: string;
  sourceClause: string;
  targetObligation: string;
  dependencyType: string;
  owner: string;
  readiness: ReadinessLevel;
  impactArea: string;
  blocker: string;
}

export interface ReviewPacket {
  packetId: string;
  agreement: string;
  audience: string;
  completenessScore: number;
  renewalWindowDays: number;
  status: ReadinessLevel;
  blocker: string;
  decisionNote: string;
}

export const clauseRecords: ClauseRecord[] = [
  {
    agreementId: "AGR-2411",
    counterparty: "Northbridge Health Exchange",
    clauseTitle: "Data retention and deletion attestations",
    clauseCategory: "Privacy / Security",
    owner: "Privacy Counsel",
    deadlineDays: 11,
    risk: "critical",
    excerpt: "Vendor must certify deletion of PHI-derived analytics extracts within 14 days of tenant termination.",
    nextAction: "Tie deletion workflow screenshots and retention-policy exports to the redline response packet."
  },
  {
    agreementId: "AGR-2388",
    counterparty: "Summit Freight Systems",
    clauseTitle: "SLA service-credit notification window",
    clauseCategory: "Commercial / Ops",
    owner: "Commercial Ops",
    deadlineDays: 19,
    risk: "watch",
    excerpt: "Service credits are forfeited if notification does not occur within five business days of the incident report.",
    nextAction: "Map incident timeline source-of-truth and confirm who owns notice generation."
  },
  {
    agreementId: "AGR-2362",
    counterparty: "Union Grid Services",
    clauseTitle: "Audit log export and evidence retention",
    clauseCategory: "Compliance",
    owner: "Platform Engineering",
    deadlineDays: 8,
    risk: "critical",
    excerpt: "Customer may request a complete append-only activity ledger for disputes, safety events, and approval actions.",
    nextAction: "Attach audit-stream sample and identify any missing immutable event coverage."
  },
  {
    agreementId: "AGR-2334",
    counterparty: "LexPoint Advisory",
    clauseTitle: "Subprocessor disclosure refresh cadence",
    clauseCategory: "Vendor Governance",
    owner: "Procurement PM",
    deadlineDays: 24,
    risk: "healthy",
    excerpt: "Provider must disclose material subprocessor changes within the customer review cadence.",
    nextAction: "Confirm current registry output and include disclosure cadence in the obligation packet."
  },
  {
    agreementId: "AGR-2297",
    counterparty: "Vertex Care Network",
    clauseTitle: "Renewal opt-out and notice sequencing",
    clauseCategory: "Renewal / Notice",
    owner: "Legal Ops",
    deadlineDays: 6,
    risk: "critical",
    excerpt: "Automatic renewal converts unless notice is delivered 30 days before the term boundary with named signatory evidence.",
    nextAction: "Lock signatory path and delivery proof before the renewal window closes."
  }
];

export const obligationEdges: ObligationEdge[] = [
  {
    edgeId: "EDGE-11",
    sourceClause: "Data retention and deletion attestations",
    targetObligation: "Provide deletion evidence pack with system export references",
    dependencyType: "evidence",
    owner: "Privacy Program",
    readiness: "yellow",
    impactArea: "Tenant offboarding",
    blocker: "Deletion evidence exists, but screenshots and audit excerpts are not bundled yet."
  },
  {
    edgeId: "EDGE-18",
    sourceClause: "Audit log export and evidence retention",
    targetObligation: "Show immutable export pathway for disputes and review actions",
    dependencyType: "technical",
    owner: "Reliability Engineering",
    readiness: "red",
    impactArea: "Auditability",
    blocker: "One approval event type still routes to a mutable operational store."
  },
  {
    edgeId: "EDGE-22",
    sourceClause: "Renewal opt-out and notice sequencing",
    targetObligation: "Bind notice delivery to signatory proof and outbound evidence",
    dependencyType: "workflow",
    owner: "Legal Ops",
    readiness: "yellow",
    impactArea: "Renewal protection",
    blocker: "Outbound notice path is defined, but signatory backup coverage is incomplete."
  },
  {
    edgeId: "EDGE-27",
    sourceClause: "SLA service-credit notification window",
    targetObligation: "Connect incident timeline to credit-notice trigger path",
    dependencyType: "operations",
    owner: "RevOps Strategy",
    readiness: "green",
    impactArea: "Commercial recovery",
    blocker: "No blocker; only final packaging remains."
  }
];

export const reviewPackets: ReviewPacket[] = [
  {
    packetId: "PKT-401",
    agreement: "Northbridge Health Exchange",
    audience: "Legal + privacy sign-off",
    completenessScore: 81,
    renewalWindowDays: 42,
    status: "yellow",
    blocker: "Deletion evidence bundle needs final legal language alignment.",
    decisionNote: "The obligation graph is strong; the remaining risk is proof packaging, not clause interpretation."
  },
  {
    packetId: "PKT-389",
    agreement: "Union Grid Services",
    audience: "Security governance review",
    completenessScore: 73,
    renewalWindowDays: 27,
    status: "red",
    blocker: "Immutable audit coverage is incomplete for one approval event family.",
    decisionNote: "This is a technical-control blocker with contractual consequences, not a documentation miss."
  },
  {
    packetId: "PKT-376",
    agreement: "Vertex Care Network",
    audience: "Executive renewal decision",
    completenessScore: 94,
    renewalWindowDays: 12,
    status: "green",
    blocker: "None.",
    decisionNote: "Ready for leadership review once notice timing is confirmed."
  }
];
