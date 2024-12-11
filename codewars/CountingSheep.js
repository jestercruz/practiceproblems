// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

/* 
  Solution: use the reduce array method which uses an accumulator that could count (sheepCount) of how many instances of true in the array.
  I had to use a ternary condition in order to keep undefined as false, which would otherwise becomes NaN when currentValue is evaluated.
*/

function countSheeps(arrayOfSheep) {
  return (sheepTotal = arrayOfSheep.reduce(
    (sheepCount, currentValue) => sheepCount + (currentValue ? 1 : 0),
    0
  ));
}
