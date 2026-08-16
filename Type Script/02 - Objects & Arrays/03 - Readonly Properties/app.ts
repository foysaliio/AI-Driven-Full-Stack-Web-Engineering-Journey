// readonly prevents a property from being changed after initialization.

const userData: {
  readonly id: number;
  fullName: string;
  age: number;
} = {
  id: 101,
  fullName: "Foysal Hossien",
  age: 23,
};

console.log(userData);

console.log(userData.id);

userData.fullName = "Foysal Hasan";
console.log(userData.fullName);

// userData.id = 102; This will produce a TypeScript error: Because id is readonly.
// console.log(userData.id);
