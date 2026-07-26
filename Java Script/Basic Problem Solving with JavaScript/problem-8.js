// Problem 8: Count Words in a Sentence

function wordCount(sentence) {
  let sentenceSplitArr = sentence.split(" ");
  return sentenceSplitArr.length;
}

console.log(wordCount("Hello Bangladesh"));
console.log(wordCount("I love Bangladesh"));
console.log(wordCount('My name is Foysal Hossien'));
