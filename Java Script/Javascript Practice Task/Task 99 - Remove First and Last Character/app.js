// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  const removeFirstAndLastChar = str.slice(1, str.length - 1);
  return removeFirstAndLastChar;
}

console.log(removeFirstAndLast("hello")); // Expected: "ell"
