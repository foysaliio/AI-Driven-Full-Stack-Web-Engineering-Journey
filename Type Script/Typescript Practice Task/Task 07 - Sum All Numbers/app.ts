const sumAll = (...num: number[]): number => {
  return num.reduce((accum, item) => {
    return accum + item;
  }, 0);
};

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(23, 83, 55, 98));

//Rest (...) → Collects multiple values/arguments/elements into an Array.
// Spread (...) → Spreads the values of an iterable (such as an Array) into individual values.
