// Write a function abbreviate(word) that takes in a string arg.
// The function should return a new string where all of its vowels are removed.

const abbreviate = (word) => {
  let vowels = "aeiou";
  let abbr = "";

  for (let char of word) {
    // if statement is true if vowels includes the str
    // character
    if (!vowels.includes(char.toLowerCase())) {
      abbr += char;
    }
  }
  return abbr;
};

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
