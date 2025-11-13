// Issue: In the BinarySearch function, the direction of search is incorrect.
// When nums[mid] < target, we should search the right half (start = mid + 1),
// and when nums[mid] > target, we should search the left half (end = mid - 1).
// The original code has these directions reversed.
// Additionally, main() uses arr instead of nums when calling BinarySearch, which is incorrect.

function BinarySearch(nums, target, start, end, isStarting) {
  let ans = -1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      ans = mid;
      if (isStarting) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

function main(nums, target) {
  let arr = new Array(2);
  arr[0] = BinarySearch(nums, target, 0, nums.length - 1, true);
  arr[1] = BinarySearch(nums, target, 0, nums.length - 1, false);
  return arr;
}

console.log(main([5, 7, 7, 8, 8, 10], 8));
