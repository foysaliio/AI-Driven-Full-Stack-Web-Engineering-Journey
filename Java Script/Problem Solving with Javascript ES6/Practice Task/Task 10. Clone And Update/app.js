const cloneAndUpdate = (arr, index, newValue) => {
  const newArr = [...arr];
  newArr[index] = newValue;
  return newArr;
};

const numbers = [5, 10, 15];

console.log(cloneAndUpdate(numbers, 1, 99));

console.log(numbers);
