const classifyDataType = (value) => {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "undefined" ||
    typeof value === "symbol" ||
    typeof value === "bigint" ||
    value === null
  ) {
    return "Primitive";
  }

  if (
    typeof value === "function" ||
    Array.isArray(value) ||
    (typeof value === "object" && !Array.isArray(value) && value !== null)
  ) {
    return "Non-Primitive";
  }
};

console.log(classifyDataType(25));
// Primitive

console.log(classifyDataType("hi"));
// Primitive

console.log(classifyDataType([1, 2, 3]));
// Non-Primitive

console.log(classifyDataType({ a: 1 }));
// Non-Primitive

console.log(classifyDataType(null));
// Primitive
