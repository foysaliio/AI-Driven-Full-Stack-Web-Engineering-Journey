// Type narrowing means reducing a broad type
// into a more specific type.

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("Foysal");

printValue(95.567);

// Another example

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toString();
}

console.log(formatValue("typescript"));

console.log(formatValue(100));
