// Input: a string
// Output: true or false
// Returns: a boolean

function isPalindrome(str) {
  // TODO: reverse the string and compare it to the original
  const reverseStr = str.split("").reverse().join("");
  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("level")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
