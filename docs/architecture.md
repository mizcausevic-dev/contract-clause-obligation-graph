# Architecture

## Overview

`contract-clause-obligation-graph` is a lightweight TypeScript + Express control surface for modeling the operating layer between contractual text and real obligation execution.

## Surfaces

- `overview`
  - agreement count
  - critical clause pressure
  - deadline exposure
  - blocked review posture
- `clause-lane`
  - clause-by-clause owner routing
  - excerpts
  - deadline and next action
- `obligation-graph`
  - dependency edges from clause language to execution work
  - readiness and blocker mapping
- `review-posture`
  - packet completeness
  - audience-specific blockers
  - renewal timing pressure
- `verification`
  - what the repo proves about legal operations systems

## Data Model

- `ClauseRecord`
  - agreement, clause, category, owner, deadline, risk, excerpt, next action
- `ObligationEdge`
  - source clause, target obligation, dependency type, owner, readiness, blocker
- `ReviewPacket`
  - audience, completeness score, renewal window, blocker, decision note

## Design Principle

Clause extraction should be inspectable by legal, compliance, procurement, and executive stakeholders. The system should explain:
- which clause matters right now
- what operational obligation it creates
- who owns the next move
- where review or renewal risk is building
