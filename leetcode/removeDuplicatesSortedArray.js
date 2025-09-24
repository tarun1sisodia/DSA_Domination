function run() {
    let nums = [0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5];
    let j = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[j] = nums[i + 1];
            j++;
        }
    }
    return j;
}

console.log(run());
