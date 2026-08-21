// Readonly makes all properties readonly.

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "Foysal",
  age: 22,
};

console.log(user);

// These will produce TypeScript errors:

// user.name = "Rahim";

// user.age = 25;
