const mergeInventory = (arr1, arr2) => {
  const mergeArr = [...arr1, ...arr2];

  return mergeArr;
};

console.log(mergeInventory([1, 2], [3, 4]));
