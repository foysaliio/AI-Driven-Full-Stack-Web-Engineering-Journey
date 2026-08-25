// Object types define the structure of objects.

type User = {
  readonly id: number;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Foysal",
};

// Arrays can contain a specific type.

const skills: string[] = ["JavaScript", "TypeScript", "React"];

// Arrays of objects are common in applications.

const users: User[] = [
  {
    id: 1,
    name: "Foysal",
  },
  {
    id: 2,
    name: "Rahim",
    email: "rahim@example.com",
  },
];

// Tuples define fixed positions and types.

type UserInfo = [string, number, boolean];

const userInfo: UserInfo = ["Foysal", 22, true];

console.log(user);
console.log(skills);
console.log(users);
console.log(userInfo);
