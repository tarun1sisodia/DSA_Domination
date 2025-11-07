// Cyclic Sort in JavaScript
// This algorithm assumes the array contains numbers from 1 to n with no duplicates.

// 448 Ques
function Sort(arr) {
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
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(Sort([4, 3, 2, 7, 8, 2, 3, 1]));
