// Intersection types combine multiple types into one type.

type Person = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type User = Person & Contact;

let user: User = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
  phone: "01700000000",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.phone);
