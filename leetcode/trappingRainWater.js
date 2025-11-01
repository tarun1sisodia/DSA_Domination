function trap(arr) {
  let n = arr.length;
  let Left = [];
  let Right = [];
  let maxLeft = arr[0];
  let maxRight = arr[n - 1];
  for (let i = 1; i < n; i++) {
    if (maxLeft < arr[i]) {
      maxLeft = arr[i];
      Left.push(maxLeft);
    } else {
      Left.push(maxLeft);
    }
  }
  for (let i = n - 2; i > 0; i--) {
    if (maxRight < arr[i]) {
      maxRight = arr[i];
      Right.push(maxRight);
    } else {
      Right.push(maxRight);
    }
  }
  let water = 0;
  for (let i = 1; i < n - 1; i++) {
    water += Math.min(Left[i - 1], Right[i - 1]) - arr[i];
  }
  return water;
}
console.log(trap([4, 2, 0, 3, 2, 5]));

/* 
//Trapping Rain Water Leetcode Solution
var trap = function (height) {
  let n = height.length;
  let Left = [];
  let Right = [];
  let maxLeft = height[0];
  let maxRight = height[n - 1];
  for (let i = 1; i < n; i++) {
    if (maxLeft < height[i]) {
      maxLeft = height[i];
      Left.push(maxLeft);
    } else {
      Left.push(maxLeft);
    }
  }
  for (let i = n - 2; i > 0; i--) {
    if (maxRight < height[i]) {
      maxRight = height[i];
      Right.push(maxRight);
    } else {
      Right.push(maxRight);
    }
  }
  let water = 0;
  for (let i = 1; i < n - 1; i++) {
    water += Math.min(Left[i - 1], Right[i - 1]) - height[i];
  }
  return water;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
 */

//Write more optimal solution for trapping rain water
/**
 * Calculates the total amount of rainwater that can be trapped using an optimal two-pointer approach.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} height An array of non-negative integers representing an elevation map.
 * @returns {number} The total amount of trapped rainwater.
 */
const trap = function (height) {
    // Return 0 if the array is too small to trap water
    if (height === null || height.length < 3) {
      return 0;
    }
  
    let totalWater = 0;
    let left = 0;
    let right = height.length - 1;
  
    // maxLeft and maxRight track the tallest bar seen so far from each side
    let maxLeft = 0;
    let maxRight = 0;
  
    while (left < right) {
      // The amount of water that can be trapped is limited by the shorter of the two max walls.
      // We process the side with the shorter bar, as it's the bottleneck.
      if (height[left] < height[right]) {
        // Is the current bar taller than the max height we've seen on the left?
        if (height[left] >= maxLeft) {
          // If yes, it becomes the new wall. It can't trap water.
          maxLeft = height[left];
        } else {
          // If no, it's shorter than the left wall, so it traps water.
          // The amount is the difference between the wall height and the current bar's height.
          totalWater += maxLeft - height[left];
        }
        // Move to the next bar from the left.
        left++;
      } else {
        // Is the current bar taller than the max height we've seen on the right?
        if (height[right] >= maxRight) {
          // If yes, it's the new wall for the right side.
          maxRight = height[right];
        } else {
          // If no, it traps water relative to the right wall.
          totalWater += maxRight - height[right];
        }
        // Move to the next bar from the right.
        right--;
      }
    }
  
    return totalWater;
  };
  
  // Example Test Cases
  console.log(`Test with [4, 2, 0, 3, 2, 5]: Expected 9, Got: ${trap([4, 2, 0, 3, 2, 5])}`);
  console.log(`Test with [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]: Expected 6, Got: ${trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])}`);
  