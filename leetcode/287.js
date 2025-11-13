function call(nums) {
  let i = 0;
  const n = nums.length;
  while (i <= n) {
    const currentIndex = nums[i] - 1;
    if (nums[i] >= 0 && nums[i] <= n && nums[i] !== nums[currentIndex]) {
      [nums[i], nums[currentIndex]] = [nums[currentIndex], nums[i]];
    } else {
      i++;
    }
  }
  //   for (let i = 0; i < n; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       return nums[i+1];
  //     }
  //   }
  return i;
}
console.log(call([1, 3, 4, 2, 2]));
console.log(call([3, 1, 3, 4, 2]));