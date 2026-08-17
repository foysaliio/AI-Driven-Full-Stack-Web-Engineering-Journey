// A return type defines what type of value a function will return.

function addNumbers(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

let result = addNumbers(10, 20);

console.log(result);

// Another example

function getUsername(): string {
  return "Foysal";
}

let username = getUsername();

console.log(username);
