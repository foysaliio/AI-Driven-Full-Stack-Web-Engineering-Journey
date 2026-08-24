// Interfaces can define reusable object structures.

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "Foysal",
  email: "foysal77@gmail.com",
  isActive: true,
};

const printUser = (user: User): void => {
  console.log(user.email);
  console.log(user.email);
};

printUser(user);
