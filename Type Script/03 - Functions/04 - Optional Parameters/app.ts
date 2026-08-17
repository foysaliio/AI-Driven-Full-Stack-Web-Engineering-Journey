// The ? symbol makes a function parameter optional.

const greet = (name: string, age?: number): void => {
  console.log(`Hello, ${name}`);

  if (age !== undefined) {
    console.log(`Age: ${age}`);
  }
};
greet("Foysal");
greet("Foysal", 23);

// This is also valid

greet("Rahim", 25);
