// Problem 5: Reverse a String

function reverseWord(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}

console.log(reverseWord("Programming"));
console.log(reverseWord("Bangladesh"));
console.log(reverseWord("Foysal Hossien"));
