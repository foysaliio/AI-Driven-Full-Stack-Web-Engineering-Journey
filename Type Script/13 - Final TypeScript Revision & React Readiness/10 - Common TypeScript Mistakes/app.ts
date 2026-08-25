// Avoid using any when the type is uncertain.

let unsafeValue: any = "Foysal";

// any disables useful type checking.

console.log(unsafeValue.toUpperCase());

// Prefer unknown when validation is required.

let safeValue: unknown = "TypeScript";

if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}

// Avoid unnecessary assertions.

interface User {
  name: string;
}

const user: User | null = {
  name: "Foysal",
};

// Better: narrow the value.

if (user) {
  console.log(user.name);
}

// Avoid unnecessarily repeating inferred types.

const username = "Foysal";

const age = 22;

// Explicit types are useful when they add meaning.

type Status = "loading" | "success" | "error";

const statusSuccess: Status = "success";

console.log(username);
console.log(age);
console.log(statusSuccess);
