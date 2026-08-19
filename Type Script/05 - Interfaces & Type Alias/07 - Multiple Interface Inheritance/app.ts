// An interface can extend multiple interfaces.

interface Person {
  name: string;
  age: number;
}

interface Contact {
  email: string;
  phone: string;
}

interface User extends Person, Contact {
  isActive: boolean;
}

let user: User = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
  phone: "01700000000",
  isActive: true,
};

console.log(user);
