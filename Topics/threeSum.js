/* function threeSum(nums) {
  const n = nums.length;
  if (n > 3) {
    nums = nums.sort((a, b) => a - b);
    console.debug(nums);
    let ans = [];
    let count = 0;
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < n - 1; j++) {
        if (nums[j] === nums[j + 1]) continue;
        for (let k = j + 1; k < n; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            ans.push([nums[i], nums[j], nums[k]]);
            count++;
          }
        }
      }
    }
  }
  return { ans, count };
}

let nums = [-1, -1, 0, 1, 2, -4];
console.log(threeSum(nums));
 */

function threeSumBrute(nums) {
  const n = nums.length;
  const seenTriplets = new Set(); // to store unique value triplets
  let count = 0;

  // Triple nested loop — pure brute force
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        // Handle floating point precision (optional but good)
        if (Math.abs(sum) > 1e-9) continue;

        // Create triplet and sort it to normalize
        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        const key = triplet.toString(); // e.g., "-1,0,1"

        // If not seen, add it
        if (!seenTriplets.has(key)) {
          seenTriplets.add(key);
        }

        count++; // Count every valid index combo
      }
    }
  }

  // Convert Set back to array of number arrays
  const ans = Array.from(seenTriplets).map((str) => str.split(",").map(Number));

  return { ans, count };
}

let nums = [-1, 0, 2, 1, -4];
console.log(threeSumBrute(nums));
