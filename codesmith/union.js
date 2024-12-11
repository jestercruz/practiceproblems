function reduce(arr, func, acc) {
  // Iterate through the array and call the function on each element
  for (let i = 0; i < arr.length; i++) {
    // Call the passed function on each element and accumulator
    acc = func(acc, arr[i]);
  }
  // Return the accumulator
  return acc;
}

function union(arrays) {
  // Function to add elements to the accumulator while avoiding duplicates
  function addUniqueElements(acc, array) {
    // Loop through each element in the current array
    for (let i = 0; i < array.length; i++) {
      // Check if the element is already in the accumulator
      let isDuplicate = false;
      for (let j = 0; j < acc.length; j++) {
        if (acc[j] === array[i]) {
          isDuplicate = true;
          break; // Exit the inner loop once a duplicate is found
        }
      }
      // If the element is not a duplicate, add it to the accumulator
      if (!isDuplicate) {
        acc.push(array[i]);
      }
    }
    return acc;
  }

  // Use the custom reduce function to combine all arrays into a union
  return reduce(arrays, addUniqueElements, []);
}

// Test the union function
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 20, 88, 1, 7]
