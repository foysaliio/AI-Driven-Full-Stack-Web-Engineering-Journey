// keyof can be combined with generics
// to safely access object properties.

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user = {
  name: "Foysal",
  age: 22,
  email: "foysal@example.com",
};

const username = getProperty(user, "name");

const age = getProperty(user, "age");

const email = getProperty(user, "email");

console.log(username);
console.log(age);
console.log(email);

// This will produce a TypeScript error:

// const address = getProperty(user, "address");
