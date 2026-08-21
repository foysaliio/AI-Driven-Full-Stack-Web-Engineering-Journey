// Generic constraints restrict what types can be used.

const getLength = <T extends { length: number }>(value: T): number => {
  return value.length;
};

console.log(getLength("Foysal"));

console.log(getLength([10, 20, 30]));

console.log(getLength(["HTML", "CSS"]));

// This will produce a TypeScript error:

// console.log(getLength(100));
