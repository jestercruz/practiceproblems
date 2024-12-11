/* 

Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

You may assume that the number of times will always be an integer between 0 and 9.

*/

const uncompress = (word) => {
  // 1. Create a string variable
  // 2. Take the first two characters of the word
  // a. The first character of the two will be repeated
  //    by the number of the second character
  // b. Add to a string variable
  // 3. Repeat through the word
  // 4. Return the string variable

  let uncompressedWord = "";

  for (let i = 0; i < word.length; i += 2) {
    let current = word[i];
    let repeat = Number(word[i + 1]);

    for (let times = 0; times < repeat; times++) {
      uncompressedWord += current;
    }
  }
  return uncompressedWord;
};

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
