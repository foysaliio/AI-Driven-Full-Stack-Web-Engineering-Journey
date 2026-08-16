const isNumNegOrPos = (num: number): string => {
  return num > 0 ? "Positive" : "Negetive";
};
console.log(isNumNegOrPos(7));
console.log(isNumNegOrPos(-2));
