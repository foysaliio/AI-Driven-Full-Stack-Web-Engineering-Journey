// Interfaces are useful for object structures.

interface User {
  id: number;
  name: string;
  email: string;
}

// Interfaces can be extended.

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Foysal",
  email: "foysal@example.com",
  permissions: ["read", "write"],
};

// Type aliases can represent objects,
// unions, tuples, primitives, and functions.

type Status = "loading" | "success" | "error";

type Coordinates = [number, number];

type Formatter = (value: string) => string;

const statusSuccess: Status = "success";

const locationBD: Coordinates = [23.81, 90.41];

const formatName: Formatter = (value) => {
  return value.toUpperCase();
};

console.log(admin);
console.log(statusSuccess);
console.log(locationBD);
console.log(formatName("Foysal"));
