function shortestPath(path) {
    let n = path.length;
    path = path.toUpperCase();
    let x = 0, y = 0;
    for (let i = 0; i < n; i++) {
        let dir = path.charAt(i);
        if (dir === 'N') {
            y++;
        }
        else if (dir === 'S') {
            y--;
        }
        else if (dir === 'E') {
            x++;
        }
        else {
            x--;
        }
    }
    let x2 = x * x;
    let y2 = y * y;
    return Math.floor(Math.sqrt(x2 + y2));
}
let paths = "WEEENESENNN";
console.log(shortestPath(paths));
