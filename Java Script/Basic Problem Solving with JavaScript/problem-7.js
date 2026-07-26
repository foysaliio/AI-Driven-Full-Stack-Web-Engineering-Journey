// Problem 7: Check if a String is a Palindrome

function isPalindrome(word) {
  let reverseStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    reverseStr += char;
  }
  if (word === reverseStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("deed"));
console.log(isPalindrome("right"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("Foysal"));
console.log(isPalindrome("civic"));
