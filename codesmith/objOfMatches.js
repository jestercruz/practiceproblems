function objOfMatches(arr1, arr2, callback) {
  const result = {};

  // Use forEach to iterate through both arrays
  arr1.forEach((element, index) => {
    // Apply the callback to the element in the first array
    const transformedElement = callback(element);

    // Check if the transformed element matches the corresponding element in the second array
    if (transformedElement === arr2[index]) {
      // Add the element from the first array as the key and the corresponding element from the second array as the value
      result[element] = arr2[index];
    }
  });

  return result;
}

// Uncomment these to check your work!
const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
