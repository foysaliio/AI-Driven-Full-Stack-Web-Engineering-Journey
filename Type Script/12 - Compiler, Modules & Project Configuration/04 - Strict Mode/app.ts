// strict enables stronger TypeScript type checking.
//
// {
//   "compilerOptions": {
//     "strict": true
//   }
// }

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Foysal"));

let username: string | null = "Foysal";

if (username !== null) {
  console.log(username.toUpperCase());
}

// With strict mode, unsafe code is caught earlier.

// This can produce a TypeScript error:
//
// function printValue(value) {
//   console.log(value);
// }
