// Union and literal types are useful for representing states.

type Status = "idle" | "loading" | "success" | "error";

let status1: Status = "idle";

console.log(status1);

status1 = "loading";

console.log(status1);

status1 = "success";

console.log(status1);

// This will produce a TypeScript error:

// status1 = "completed";
