// An interface defines the structure of an object.

interface User {
  name: string;
  age: number;
  isStudent: boolean;
}

let user: User = {
  name: "Foysal",
  age: 22,
  isStudent: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isStudent);

// Another user using the same interface

let anotherUser: User = {
  name: "Rahim",
  age: 25,
  isStudent: false,
};

console.log(anotherUser);
