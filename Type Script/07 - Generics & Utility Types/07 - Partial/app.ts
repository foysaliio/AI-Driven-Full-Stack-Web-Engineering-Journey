// Partial makes all properties of a type optional.

interface User {
  name: string;
  age: number;
  email: string;
}

const userUpdate: Partial<User> = {
  name: "Foysal",
};

console.log(userUpdate);

// We can provide any combination of properties.

const anotherUpdate: Partial<User> = {
  age: 23,
  email: "new@example.com",
};

console.log(anotherUpdate);
