// Interface properties can be optional using ?.

interface User {
  name: string;
  age: number;
  email?: string;
}

let user1: User = {
  name: "Foysal",
  age: 22,
};

let user2: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@example.com",
};

console.log(user1);
console.log(user2);

// email can be added later

user1.email = "foysal@example.com";

console.log(user1.email);