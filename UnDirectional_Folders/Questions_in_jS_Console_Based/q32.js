//Check if the number is Prime or not.

/**
Bilkul Tarun bhai! Chalo ekdum **zero se** start karte hain — **Prime Number ka concept** pehle deeply samjho, fir hum coding pe aayenge step-by-step with logic.

---

## 🧠 Step 1: **Prime Number Kya Hota Hai?**

> **Prime number**: Aisa number jo **sirf 2 numbers se divide ho sakta hai**:
>
> 1. **1**
> 2. **Woh khud**

### ✅ Examples:

* `2 → divisible by 1 and 2 → Prime ✅`
* `3 → 1 and 3 → Prime ✅`
* `4 → 1, 2, 4 → 3 numbers → Not Prime ❌`
* `5 → 1 and 5 → Prime ✅`
* `9 → 1, 3, 9 → Not Prime ❌`

---

## 📌 Step 2: **Basic Soch / Logic**

> Tumhe check karna hai ki koi number `n` hai prime ya nahi.

### Logic:

* Tum 1 se `n` tak ke **har number se divide karwao**
* Aur dekho kitni baar `n % i === 0` hota hai
* Agar sirf **2 baar** divisible hota hai (i.e., `1` and `n`), to **Prime hai**

---

## ✅ Manual Example: Check if 7 is Prime

Loop: `i = 1 to 7`

```
7 % 1 == 0 ✅
7 % 2 == 1 ❌
7 % 3 == 1 ❌
7 % 4 == 3 ❌
7 % 5 == 2 ❌
7 % 6 == 1 ❌
7 % 7 == 0 ✅
```

👉 Total divisible = **2 times only** (1 and 7) → So **Prime** ✅

---

## 💻 Step 3: **Sabse Basic Code (Brute Force)**

```js
function isPrime(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++; // kitni baar divide ho raha hai
    }
  }

  if (count === 2) {
    console.log("Yes, Prime Number");
  } else {
    console.log("Not a Prime Number");
  }
}

isPrime(7);  // ✅ Prime
isPrime(9);  // ❌ Not Prime
```

---

## 🔁 Step 4: Practice Manual Logic Yourself:

Try khud sochna:

* `isPrime(2)`
* `isPrime(10)`
* `isPrime(13)`
* `isPrime(1)` → Special case (not prime)
 */


//Basic Code for prime Number Using Brute Force.
const basicPrime = (n) => {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(`Yes ,${n} is a Prime Number`);
    }
    else
        console.log(`No ,${n} is a Prime Number`);
}
// basicPrime(4);
// basicPrime(3);
const readline = require("readline");
const sc = readline.createInterface({
    input: process.stdin, output: process.stdout
});

sc.question('Enter The Number to Check prime number or not.', (val) => {
    const num = parseInt(val);
    basicPrime2(num);
    console.log(num);
    sc.close();
});

const basicPrime2 = (n) => {

    let count;

    if (n <= 1) console.log('Its Not Prime Number');

    if (n === 2) console.log('its a Prime Number');

    let newN = Math.floor(Math.sqrt(n));

    for (let i = 2; i < newN; i++) {
        if (n % i === 0) {
            console.log("Its not a prime number");
            count++;
        }

        else
            console.log(newN + "is a prime Number");
    }

    if (count === 2) console.log('Yeah its a Prime  Number.');

}


function primeNumber(n) {
    if (n <= 1) {
        console.log(n + " is not a prime number");
        return;
    }
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
            console.log(n + " is not a prime number");
            return;
        }
    }
    console.log(n + " is a prime number");
}
// primeNumber(12);

function primeNumberNew(n) {
    let count = 0;
    // for (let i = 1; i <= n; i++) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    count === 0 ? console.log("Prime") : console.log("Not Prime");
}
// primeNumberNew(13);



let n = 40;
function newLoop() {
    if (n <= 1) console.log("No Its Not Prime");
    if (n === 2) console.log("No Its 2");
    if (n % 2 === 0) console.log("Even h ye ");
    let isPrime = true;
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return isPrime = false; break;
    }
    if (isPrime === true) console.log("Prime");
    else console.log("Not Prime");
}