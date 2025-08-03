
const naturalSum = function (n) {
    let sum = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        console.log(sum);
    }
}
// naturalSum(3);


const naturalSum2 = function (r, n) {
    let sum = 0;
    if (n > 0 && r > 0) {
        for (let i = r; i <= n; i++) {
            sum += i;
        }
        console.log(sum);
    }
}

naturalSum2(1, 3);

