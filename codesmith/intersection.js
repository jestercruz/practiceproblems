// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

function reduce(arr, func, acc) {
  // Iterate through the array and call the function on each element
  for (let i = 0; i < arr.length; i++) {
    // Call the passed function on each element and accumulator
    acc = func(acc, arr[i]);
  }
  // Return the accumulator
  return acc;
}

function intersection(arrays) {
  // Function to find intersection between two arrays
  function intersectTwoArrays(acc, array) {
    const result = [];
    // Loop through each element in the accumulator
    for (let i = 0; i < acc.length; i++) {
      // Check if the element is in the current array
      for (let j = 0; j < array.length; j++) {
        if (acc[i] === array[j]) {
          result.push(acc[i]);
          break; // Exit the inner loop once a match is found
        }
      }
    }
    return result;
  }

  // Use the custom reduce function to find the intersection of all arrays
  return reduce(arrays, intersectTwoArrays, arrays[0]);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
