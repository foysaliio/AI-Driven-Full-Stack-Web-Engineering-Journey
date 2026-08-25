// Generics create reusable type-safe code.

const getFirstItem = <T>(items: T[]): T => {
  return items[0];
};

const firstName = getFirstItem(["Foysal", "Rahim"]);

const firstNumber = getFirstItem([10, 20]);

console.log(firstName);
console.log(firstNumber);

// Generic interface

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Foysal",
  },
};

// Utility types

type UserUpdate = Partial<User>;

type UserPreview = Pick<User, "id" | "name">;

type UserWithoutId = Omit<User, "id">;

type UserMap = Record<string, User>;

console.log(response);

const update: UserUpdate = {
  name: "Rahim",
};

const preview: UserPreview = {
  id: 1,
  name: "Foysal",
};

const newUser: UserWithoutId = {
  name: "Karim",
};

const users: UserMap = {
  first: {
    id: 1,
    name: "Foysal",
  },
};

console.log(update);
console.log(preview);
console.log(newUser);
console.log(users);
