// keyof creates a union of an object's property names.

type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

// UserKeys becomes:
// "name" | "age" | "email"

let key1: UserKeys = "name";
let key2: UserKeys = "age";
let key3: UserKeys = "email";

console.log(key1);
console.log(key2);
console.log(key3);

// This will produce a TypeScript error:

// let key4: UserKeys = "address";
