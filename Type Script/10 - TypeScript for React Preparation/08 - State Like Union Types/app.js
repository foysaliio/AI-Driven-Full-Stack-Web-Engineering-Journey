"use strict";
// Union and literal types are useful for representing states.
let status1 = "idle";
console.log(status1);
status1 = "loading";
console.log(status1);
status1 = "success";
console.log(status1);
// This will produce a TypeScript error:
// status1 = "completed";
