"use strict";
// strict enables stronger TypeScript type checking.
//
// {
//   "compilerOptions": {
//     "strict": true
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Foysal"));
let username = "Foysal";
if (username !== null) {
    console.log(username.toUpperCase());
}
// With strict mode, unsafe code is caught earlier.
// This can produce a TypeScript error:
//
// function printValue(value) {
//   console.log(value);
// }
//# sourceMappingURL=app.js.map