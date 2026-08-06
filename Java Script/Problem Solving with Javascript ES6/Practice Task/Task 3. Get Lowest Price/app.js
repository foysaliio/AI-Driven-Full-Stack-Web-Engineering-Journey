const getLowestPrice = (prices) => {
  const minPrice = Math.min(...prices);
  return minPrice;
};

console.log(getLowestPrice([340, 120, 560, 90]));
