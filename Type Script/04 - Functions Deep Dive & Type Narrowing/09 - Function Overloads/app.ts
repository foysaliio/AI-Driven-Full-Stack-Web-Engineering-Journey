// Function overloads allow a function to have multiple valid call signatures.

function formatValue(value: string): string;

function formatValue(value: number): number;

function formatValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value * 2;
}

console.log(formatValue("foysal"));

console.log(formatValue(10));

// Another example

function combine(value1: string, value2: string): string;

function combine(value1: number, value2: number): number;

function combine(
  value1: string | number,
  value2: string | number,
): string | number {
  if (typeof value1 === "string" && typeof value2 === "string") {
    return value1 + value2;
  }

  if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2;
  }

  throw new Error("Both values must have the same type");
}

console.log(combine("Hello ", "Foysal"));

console.log(combine(10, 20));
