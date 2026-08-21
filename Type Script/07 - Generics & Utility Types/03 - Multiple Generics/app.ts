// A function can use more than one generic type.

const pair = <T, T2>(value1: T, value2: T2): [T, T2] => {
  return [value1, value2];
};

const userData = pair("Foysal", 22);

console.log(userData);

const productData = pair("Laptop", 75000);

console.log(productData);

const mixedData = pair(true, "Active");

console.log(mixedData);

// Another example

const merge = <T, T2>(firstValue: T, secondValue: T2): T & T2 => {
  return {
    ...firstValue,
    ...secondValue,
  };
};

const user = merge(
  {
    name: "Foysal",
  },
  {
    age: 23,
  },
);

console.log(user);
