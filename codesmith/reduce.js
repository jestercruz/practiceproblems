function reduce(arr, func, acc) {
  // iterate through the array and call the function on each element
  for (let i = 0; i < arr.length; i++) {
    // call the passed function on each element and accumulator
    acc = func(acc, arr[i]);
  }
  // return the accumulator
  return acc;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8
