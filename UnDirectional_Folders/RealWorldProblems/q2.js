

// function ticktick() {
//     console.log(clock);
//     let now = new Date();

//     let hours = now.getHours().toString().padStart(2, '0');
//     let minutes = now.getMinutes().toString().padStart(2, '0');
//     let seconds = now.getSeconds().toString().padStart(2, '0');

//     document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
// }

// setInterval(ticktick, 1000);
// ticktick();

let p11 = document.createElement("p");
let p22 = document.createElement("p");
let p33 = document.createElement("p");

p11.setAttribute("id", "p1");
p22.setAttribute("id", "p2");
p33.setAttribute("id", "p3");

let body = document.querySelector("body");

body.prepend(p33);
body.prepend(p22);
body.prepend(p11);

console.log(p33);
console.log(p22);
console.log(p11);



function newClock() {
    let now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("p1").textContent = `${hours}--`;
    document.getElementById("p2").textContent = `${minutes}--`;
    document.getElementById("p3").textContent = `${seconds}`;

    // console.log(p1);
    // console.log(p2);
    // console.log(p3);
}

setInterval(newClock, 1000);
newClock();