// Mapped types create a new type
// by transforming every property of an existing type.

type User = {
  name: string;
  age: number;
  email: string;
};

type OptionalUser = {
  [key in keyof User]?: User[key];
};

const user: OptionalUser = {
  name: "Foysal",
};

console.log(user);

// Another example

type BooleanUser = {
  [key in keyof User]: boolean;
};

const userFields: BooleanUser = {
  name: true,
  age: true,
  email: false,
};

console.log(userFields);
