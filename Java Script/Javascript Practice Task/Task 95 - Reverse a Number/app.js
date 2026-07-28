// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
  const str = num.toString();
  const strArr = str.split("");
  const strArrReverse = strArr.reverse();
  const strReverse = Number(strArrReverse.join(""));
  return strReverse;
}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7)); // Expected: 7
