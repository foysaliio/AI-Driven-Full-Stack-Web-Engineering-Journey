// A default parameter provides a value when an argument is not provided.

const teaGenerator = (item: string, spoonCount: number = 2): void => {
  console.log(`I need a ${item} with ${spoonCount} spoon sugar`);
};

teaGenerator("tea");
teaGenerator("tea", 3);

// Another example

function greet(name: string, country: string = "Bangladesh"): void {
  console.log(`Hello, ${name} from ${country}`);
}

greet("Foysal");

greet("Foysal", "Canada");

// Another example

function calculatePrice(price: number, quantity: number = 1): number {
  return price * quantity;
}

console.log(calculatePrice(500));

console.log(calculatePrice(500, 3));
