let p = document.createElement("p");
let btn = document.createElement("button");
let body = document.querySelector("body");

body.style.backgroundColor = "black";
body.style.color = "white";

p.textContent = "Change the Color On Tap.";
p.style.color = "green";
p.style.fontSize = "30px";

btn.textContent = "Green";
btn.style.color = "green";
btn.style.fontSize = "25px";

body.appendChild(p);
body.appendChild(btn);

function colorChange() {
    p.style.color = "Red";
    p.textContent = "Color Changed";
    btn.textContent = "Red";
    btn.style.color = "red";
}

btn.addEventListener("click", colorChange);


