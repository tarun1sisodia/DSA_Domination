let nums = [-1, 0, 3, 6, 9, 13, 17];

console.log(binarSearch(nums, 9));

function binarSearch(nums, target) {
    //starting index
    let start = 0;
    //end index
    let end = nums.length - 1;
    // mid index of the array.
    let mid = Math.floor(start + (end - start) / 2);
    // jb tk start index chota h end index se
    while (start <= end) {
        //array ka mid target ke barabar to return krdo index use array ka .
        if (nums[mid] === target)
            return mid;
        //target value badi h mid value to mtlb h ki right m hi hoga element kyunki array sorted h humari pehle hi.
        else if (target > nums[mid])
            start = mid + 1;

        //agr target choti h target se to mtlb h ki left m hi hogi kyunki array sorted h aur mid value beech m agr usse choti h to ovious h ki left m hi hogi..
        else
            end = mid - 1;
    }

    //agr element Target exist hi nhi krta h to ye return hoga.
    return -1;
}