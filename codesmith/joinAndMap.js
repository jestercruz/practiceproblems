function joinAndMap(array1, array2, callback) {
  // Combine the two arrays into a new array using the spread operator
  const combinedArray = [...array1, ...array2];
  // Apply callback function to each element of the array using map
  const resultArray = combinedArray.map(callback);
  // Return the result array
  return resultArray;
}

// Uncomment these to check your work!
const arrRed = ["strawberry", "cherry", "wine"];
const arrBlue = ["blueberry", "sky", "ocean"];
const capitalize = (str) => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']
