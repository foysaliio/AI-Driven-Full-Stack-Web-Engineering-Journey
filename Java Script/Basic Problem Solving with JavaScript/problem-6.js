// Problem 6: Count Vowels in a String

function countVowels(word) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let phVowelCount = countVowels("Programming Hero");
console.log(phVowelCount);

let bdVowelCount = countVowels("Bangladesh");
console.log(bdVowelCount);
