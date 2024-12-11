// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // 1. Define a vowels variable
  // 2. Determine if the first letter is a vowel
  // a. if it is a vowel, return word + "yay"
  // 3. Iterate until a vowel is found
  // a. take all consonants before current letter (which is a vowel)
  // b. append that consonant clump to the end of the word
  // c. add "ay" and then return the word
  let vowels = "aeiou";
  if (vowels.includes(word[0])) {
    return word + "yay";
  }

  for (let index = 0; index < word.length; index++) {
    let letter = word[index];

    if (vowels.includes(letter)) {
      let firstPart = word.slice(index);
      let secondPart = word.slice(0, index);
      return firstPart + secondPart + "ay";
    }
  }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
