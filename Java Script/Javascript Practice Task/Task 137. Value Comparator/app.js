const compareValues = (value1, value2) => {
  return {
    loose: value1 == value2,
    strict: value1 === value2,
  };
};

console.log(compareValues(5, "5"));
console.log(compareValues(0, false));
console.log(compareValues("5", 5));
console.log(compareValues(null, undefined));
console.log(compareValues(7, 7));
