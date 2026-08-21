// Required makes all optional properties required.

interface User {
  name: string;
  age: number;
  email?: string;
}

const user: Required<User> = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
};

console.log(user);

// This will produce a TypeScript error
// because email is required:

// const anotherUser: Required<User> = {
//   name: "Rahim",
//   age: 25,
// };
