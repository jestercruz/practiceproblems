function arrToObj(array, callback) {
  // Initialize an empty object
  const result = {};

  // Iterate over each element of the array
  array.forEach((element) => {
    // Apply the callback to the element
    const callbackResult = callback(element);
    // Set the element as the key and the callback result as the value
    result[element] = callbackResult;
  });
  return result;
}

// Uncomment these to check your work!
const arrOfStrings = ["beer", "glue"];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
