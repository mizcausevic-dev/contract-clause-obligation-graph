import { payload, summary } from "../src/services/contractClauseService";

console.log("contract-clause-obligation-graph demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().obligations, null, 2));
