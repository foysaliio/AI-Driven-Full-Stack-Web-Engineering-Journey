// Default parameters provide a fallback value.

const greet = (name: string, country: string = "Bangladesh"): string => {
  return `${name} is from ${country}`;
}

console.log(greet("Foysal"));

console.log(greet("John", "USA"));

// Another example

const calculatePrice = (price: number, quantity: number = 1): number => {
  return price * quantity;
}

console.log(calculatePrice(500));

console.log(calculatePrice(500, 3));
