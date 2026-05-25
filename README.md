# Contract Clause Obligation Graph

TypeScript control plane for clause extraction posture, obligation graphs, review blockers, and renewal-safe execution across enterprise agreements.

## Why this exists

- Contract work often breaks after the text is understood because ownership, notice windows, and evidence duties are still fragmented.
- Legal and non-legal teams need a clause view that leads to action, not just a summary of redlines.
- Renewal and dispute risk build when obligations are visible in the document but invisible in the workflow.
- Enterprise buyers care less about “AI for contracts” in the abstract and more about whether obligations can be executed safely.

## Why this matters (KG Embedded tie-back)

This repo demonstrates the obligation graph primitive for LegalTech buyers: clause-level extraction tied to owner lanes, review blockers, auditability, and renewal pressure. A B2B SaaS buyer would care because legal commitments often need to surface inside customer-facing dashboards and internal operating tools without exposing unsafe write paths or uncontrolled BI sprawl. Kinetic Gain Embedded extends this into security-first in-product analytics for clause- and obligation-aware reporting across customer accounts, see [kineticgain.com/embedded](https://kineticgain.com/embedded).

## Routes

- `/`
- `/clause-lane`
- `/obligation-graph`
- `/review-posture`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/clause-lane`
- `/api/obligation-graph`
- `/api/review-posture`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Detail view 1](./screenshots/02-clause-lane-proof.png)
![Detail view 2](./screenshots/03-obligation-graph-proof.png)
![Detail view 3](./screenshots/04-review-posture-proof.png)

## Local Development

```powershell
cd contract-clause-obligation-graph
npm install
npm run dev
```

Open:
- [http://127.0.0.1:5426/](http://127.0.0.1:5426/)
- [http://127.0.0.1:5426/clause-lane](http://127.0.0.1:5426/clause-lane)
- [http://127.0.0.1:5426/obligation-graph](http://127.0.0.1:5426/obligation-graph)
- [http://127.0.0.1:5426/review-posture](http://127.0.0.1:5426/review-posture)
- [http://127.0.0.1:5426/verification](http://127.0.0.1:5426/verification)

## Validation

- `npm run build`
- `npm run test`
- `npm run demo`
- `npm run smoke`
- `npm run render:assets`

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)
