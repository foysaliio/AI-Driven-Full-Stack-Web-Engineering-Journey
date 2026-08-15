// unknown is used when the type of a value is not known yet.
// It is safer than any because the value must be checked
// before performing type-specific operations.

let value: unknown = "Hello";

// TypeScript does not allow string-specific operations
// until the type is checked.

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

let age: unknown = 'Sadik';

if (typeof age === "number") {
  if (age > 20) {
    age = 30;
    console.log(age);
    
  }
}
