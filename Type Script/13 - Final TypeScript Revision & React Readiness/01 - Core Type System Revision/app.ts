// Type annotations explicitly define types.

let username: string = "Foysal";

let age: number = 22;

let isLearning: boolean = true;

// Type inference allows TypeScript
// to automatically determine a type.

let course = "TypeScript";

// Union types allow multiple possible types.

let userId: string | number = 101;

userId = "USER-101";

// Literal types restrict values.

type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";

// unknown is safer than any.

let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

console.log(username);
console.log(age);
console.log(isLearning);
console.log(course);
console.log(userId);
console.log(currentStatus);
