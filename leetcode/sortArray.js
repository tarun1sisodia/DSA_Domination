// Issue Analysis:
// The function `oldSort` intends to move all zeros to the front of the array (or count them).
// However, it only sets `arr[j] = arr[i]` for zeros, but does not alter other elements.
// Additionally, the function only loops to `arr.length - 1`, missing the last element.
// The code does not actually sort or move the 1s after the zeros, and does not produce a sorted output.
// The original array is not properly transformed into a sorted binary array (all 0s, then all 1s).

function checkSortIssue(arr) {
  console.log(`Starting the Sorting`);
  let temp = [];
  // Should go through the whole array (including last element)
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      // This only sets arr[j] to 0s, but does not move 1s
      temp.push(arr[j]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // This only sets arr[j] to 0s, but does not move 1s
      temp.push(arr[i]);
    }
  }

  //   arr = [...temp];
  // After the loop, only the first `j` indices are set to zero.
  // The rest of the array remains unchanged, which is wrong.
  // The function should fill the rest with 1s, but it doesn't.
  console.log("Real Array after code execution:", arr);
  console.log("Array after code execution:", temp);
  return "Issue: Only zeros are moved to the front, 1s are not handled. Also, loop misses the last element.";
}

console.log(checkSortIssue([0, 1, 0, 1, 1, 1, 0, 1, 0, 0]));
// Issue Analysis:
// The function `oldSort` intends to move all zeros to the front of the array (or count them).
// However, it only sets `arr[j] = arr[i]` for zeros, but does not alter other elements.
// Additionally, the function only loops to `arr.length - 1`, missing the last element.
// The code does not actually sort or move the 1s after the zeros, and does not produce a sorted output.
// The original array is not properly transformed into a sorted binary array (all 0s, then all 1s).

function checkSor(arr) {
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array");

  let i = 0,
    j = 0,
    k = arr.length - 1;
  while (i < k) {
    for (i; i < arr.length; i++) {
      if (arr[i] === 1) continue;
      if (arr[i] === 0) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
      }
      if (arr[i] === 2) {
        const temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
        k--;
        i--;
      }
    }
  }
  // After the loop, only the first `j` indices are set to zero.
  // The rest of the array remains unchanged, which is wrong.
  // The function should fill the rest with 1s, but it doesn't.
  console.log("Real Array after code execution:", arr);
  return "Issue: Only zeros are moved to the front, 1s are not handled. Also, loop misses the last element.";
}

console.log(checkSor([0, 1, 0, 1, 1, 1, 2, 2, 0, 1, 0, 0]));
