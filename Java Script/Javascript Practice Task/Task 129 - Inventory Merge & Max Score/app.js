const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const mergeArr = [...arr1, ...arr2];

  return mergeArr;
};

console.log(mergeInventory([1, 2], [3, 4]));
console.log(mergeInventory([1, 2], "3"));

const highestScore = (scores) => {
  if (!Array.isArray(scores)) {
    return "Invalid";
  }
  const maxNum = Math.max(...scores);
  return maxNum;
};

console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore("3,7,2"));
