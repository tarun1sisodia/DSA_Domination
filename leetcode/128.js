function longestConsecutive(arr) {
  let map = new Map();
  arr.forEach((n) => map.set(n, true));
  let longest = 0;

  for (let i of map.keys()) {
    if (!map.has(i - 1)) {
      let count = 1;
      let next = i + 1;
      while (map.has(next)) {
        count++;
        next++;
      }
      longest = Math.max(longest, count);
    }
  }

  return longest;
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

function longestConsecutiveBrute(arr) {
  let map = new Map();
  // set the whole map for all elements to true by default..
  arr.forEach((n) => map.set(n, true));

  console.log(arr);
  console.log(map);
  // set all values which are already exists in map false;
  for (let i of arr) {
    if (map.has(i - 1)) {
      map.set(i, false);
    }
  }
  console.log(map);
  let longest = 0;
  let count = 1;
  for (let i of arr) {
    if (map.has(i)) {
      count = 1;
      while (map.has(arr[i] + count)) {
        count++;
      }
    }
    longest = Math.max(longest, count);
  }
  return longest;
}
// console.log(longestConsecutiveBrute([100, 4, 200, 1, 3, 2])); // 4
//Optimal Code

function optimize(arr) {
  const set = new Set(arr);
  let longest = 0;
  for (let i of set) {
    if (!set.has(i - 1)) {
      let current = i;
      let count = 1;
      while (set.has(current + 1)) {
        count++;
        current++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
}
console.log(optimize([100, 4, 200, 1, 3, 2])); // 4
