function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2); //ye kr rha h half input ka

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

let nums = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(`Found at index: ${binarySearch(nums, 10)}`); // O(log n)
