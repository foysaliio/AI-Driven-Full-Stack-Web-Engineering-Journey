// Exclude removes selected types from a union.

type Status = "idle" | "loading" | "success" | "error";

type FinishedStatus = Exclude<Status, "idle" | "loading">;

const finished: FinishedStatus = "success";

console.log(finished);

// Extract keeps only matching types.

type ActiveStatus = Extract<Status, "loading" | "success">;

const active: ActiveStatus = "loading";

console.log(active);

// Another example

type Mixed = string | number | boolean;

type OnlyString = Extract<Mixed, string>;

type WithoutBoolean = Exclude<Mixed, boolean>;

const firstName: OnlyString = "Foysal";

const value: WithoutBoolean = 100;

console.log(firstName);
console.log(value);

// Exclude → Remove
// Extract → Keep
