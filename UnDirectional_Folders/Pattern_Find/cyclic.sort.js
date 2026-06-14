// Cyclic Sort in JavaScript
// This algorithm assumes the array contains numbers from 1 to n with no duplicates.

function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const correctIdx = arr[i] - 1;
    if (arr[i] !== arr[correctIdx]) {
      // Swap arr[i] and arr[correctIdx]
      [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}

console.log(cyclicSort([9, 1, 3, 2, 6, 7, 4, 5, 8]));



