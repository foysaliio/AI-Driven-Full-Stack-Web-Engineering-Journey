// Optional parameters are defined using ?.

const greetUser = (name: string, age?: number): string => {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }

  return `Hello ${name}`;
};

console.log(greetUser("Foysal"));

console.log(greetUser("Foysal", 23));

// Another example

function createUser(name: string, email?: string): void {
  console.log(name);
  console.log(email);
}

createUser("Foysal");

createUser("Foysal", "foysal@example.com");
