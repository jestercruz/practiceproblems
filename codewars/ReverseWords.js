/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained. */

/* Given a string, reverse the characters of each word while keeping the words where they are.
/* String was split into an array of words (separated by space)
/* Array is mapped where each element (word) is split by character, reversed, then rejoined
/* Array is then rejoined as a string separated by space.
*/
function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

// Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      reverseWords("The quick brown fox jumps over the lazy dog."),
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
    assert.strictEqual(reverseWords("apple"), "elppa");
    assert.strictEqual(reverseWords("a b c d"), "a b c d");
    assert.strictEqual(
      reverseWords("double  spaced  words"),
      "elbuod  decaps  sdrow"
    );
  });
});
