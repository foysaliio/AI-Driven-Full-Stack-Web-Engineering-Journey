const evenNumbersChecker = (numbers: number[]): number[] => {
  return numbers.filter((item) => {
    if (item % 2 === 0) {
      return item;
    }
  });
};

console.log(evenNumbersChecker([10, 15, 20, 25, 30, 35, 40]));
console.log(evenNumbersChecker([11, 15, 23, 25, 30, 35, 40]));
