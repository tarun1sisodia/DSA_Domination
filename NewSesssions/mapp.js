function mappp() {
    let map = new Map();
    let arr = [2, 1, 3, 4, 1, 2, 3, 3, 3];
    for (let i of map) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else
            map.set(arr[i], 1);
    }
    return map;
}

console.log(mappp);
