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

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
