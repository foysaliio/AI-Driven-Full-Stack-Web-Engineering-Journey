// Function parameters and return values can be typed.

const add = (firstNumber: number, secondNumber: number): number => {
  return firstNumber + secondNumber;
}

// Optional parameter

const greet = (name: string, age?: number): string => {
  if (age !== undefined) {
    return `${name} is ${age} years old`;
  }

  return `Hello ${name}`;
}

// Default parameter

const calculatePrice = (price: number, quantity: number = 1): number => {
  return price * quantity;
}

// Function type

type ClickHandler = (id: number) => void;

const handleClick: ClickHandler = (id) => {
  console.log(`Clicked user: ${id}`);
};

// Callback

const runAction = (action: () => void): void => {
  action();
}

console.log(add(10, 20));

console.log(greet("Foysal", 22));

console.log(calculatePrice(500, 3));

handleClick(101);

runAction(() => {
  console.log("Action completed");
});
