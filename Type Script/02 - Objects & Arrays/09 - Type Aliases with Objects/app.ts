// A type alias allows us to create a reusable custom type.

type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

let user1: User = {
  name: "Foysal Hossien",
  age: 23,
  email: "foysalhossien77@gmail.com",
  isActive: true,
};

let user2: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@example.com",
  isActive: false,
};

let user3: User = {
  name: "Karim",
  age: 28,
  email: "karim@example.com",
  isActive: true,
};

console.log(user1);
console.log(user2);
console.log(user3);
