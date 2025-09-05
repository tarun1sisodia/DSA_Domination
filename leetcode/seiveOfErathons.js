let n = 25;
let soe = new Array(n + 1).fill(true);

soe[0] = false;
soe[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (soe[i]) {
        for (let j = i * i; j <= n; j += i) {
            soe[j] = false;  // mark multiples of i
        }
    }
}

console.log("Prime numbers up to", n, ":");
let count = 0;
for (let i = 2; i <= n; i++) {
    if (soe[i]) count++;
}
console.log(count);
