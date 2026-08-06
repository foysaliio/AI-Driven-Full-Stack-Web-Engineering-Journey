const splitFirstRest = (arr) => {
  const [first, ...rest] = arr;
  return { first, rest };
};

console.log(splitFirstRest([10, 20, 30, 40]));
console.log(splitFirstRest([8, 30, 23, 18, 3, 5, 99, 293]));
