// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string

function reverseWords(sentence) {
  senReverse = sentence.split(" ").reverse().join(" ");
  return senReverse;
}

console.log(reverseWords("hello world")); // Expected: "world hello"
