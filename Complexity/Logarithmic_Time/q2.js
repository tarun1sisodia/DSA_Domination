/*
🔢 Real-life Analogy
Jaise tum kisi ko kehte ho:

"Maine 1 se 100 ke beech ek number socha hai, guess karo."

Agar wo banda har baar beech wala number guess kare, aur tum bologe:

"Zyada hai" → wo left half hata dega

"Kam hai" → wo right half hata dega
*/

let low = +prompt("Enter Low:");
let high = +prompt("Enter High:");

function findNumber() {
    if (low > high) {
        console.log(`Something is wrong — range khatam ho gayi.`);
        return;
    }

    let guess = Math.floor((low + high) / 2); // pehle guess banao
    let input = prompt(`Mera Guess: ${guess}\nKam (l), Zyada (h), ya Sahi (c)?`);

    if (input === "c") {
        alert(`🎉 Sahi h! Tumhara number hai: ${guess}`);
        return;
    } else if (input === "h") {
        high = guess - 1;
    } else if (input === "l") {
        low = guess + 1;
    } else {
        alert("Sirf 'l', 'h', ya 'c' likho!");
    }

    findNumber(); // recursive call
}

findNumber();
