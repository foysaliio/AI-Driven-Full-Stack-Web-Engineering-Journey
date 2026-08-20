const getLastElement = <T>(values: T[]): T => {
  return values[values.length - 1];
};

console.log(getLastElement<number>([10, 20, 30]));
console.log(getLastElement<string>(["a", "b", "c"]));
