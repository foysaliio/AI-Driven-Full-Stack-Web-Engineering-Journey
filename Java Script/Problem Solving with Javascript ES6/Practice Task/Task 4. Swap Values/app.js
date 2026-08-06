const swapValues = (a, b) => {
  [a, b] = [b, a];
  return [a, b];
};

console.log(swapValues(5, 10));
