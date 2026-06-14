function factor(n) {
    for (let i = 1; i < Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            if (i === n / i) console.log(i);
            else {
                console.log(i)
                console.log(n / i);
            }
        }
    }
    return false;
}
console.log(factor(30));
