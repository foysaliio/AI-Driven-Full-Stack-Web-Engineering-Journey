// Parameters extracts function parameter types
// and returns them as a tuple.

const createUser = (name: string, age: number, active: boolean): void => {
  console.log(name, age, active);
};

type CreateUserParams = Parameters<typeof createUser>;

// Result:
// [string, number, boolean]

const userData: CreateUserParams = ["Foysal", 23, true];

createUser(...userData);

// Another example

const calculatePrice = (price: number, quantity: number): number => {
  return price * quantity;
};

type CalculatePriceParam = Parameters<typeof calculatePrice>;

const value1: CalculatePriceParam = [10, 30];
const value2: CalculatePriceParam = [18, 23];

console.log(calculatePrice(...value1));
console.log(calculatePrice(...value2));
