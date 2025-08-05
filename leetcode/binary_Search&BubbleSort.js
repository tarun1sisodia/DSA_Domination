let nums = [-1, 0, 3, 6, 9, 13, 17];

console.log(binarSearch(nums, 9));

function binarSearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
        if (nums[mid] === target)
            return mid;
        else if (target > nums[mid])
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
}