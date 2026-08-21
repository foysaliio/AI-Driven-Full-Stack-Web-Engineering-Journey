// Pick creates a new type using selected properties.

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = {
  name: "Foysal",
  email: "foysal@example.com",
};

console.log(preview);

// Omit creates a new type
// by removing selected properties.

type SafeUser = Omit<User, "password">;

const safeUser: SafeUser = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
};

console.log(safeUser);
