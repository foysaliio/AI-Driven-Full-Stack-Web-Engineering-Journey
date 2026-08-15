// A literal type allows a variable to have a specific value.

// String literal example:

let goal: "success" | "error" | "loading" = "success";

goal = "loading";

// This will produce a TypeScript error:
// goal = "completed";

console.log(goal);

let firstName: "Foysal" = "Foysal";
console.log(firstName);

// let lastName: "Hossien" = 'Hasan' !Error/ Name must be 'Hossien'
