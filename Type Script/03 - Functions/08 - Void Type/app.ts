// void is commonly used when a function does not return a value.

function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello Foysal");

// Another example

const printUser = (name: string, age: number): void => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
};

printUser("Foysal", 22);
