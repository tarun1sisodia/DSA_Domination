let body = document.querySelector("body");
let incrementBtn = document.createElement("btn");
let decrementBtn = document.createElement("btn");

body.style.backgroundColor = "black";
body.style.color = "white";
// incrementBtn.style.color = "Yellow";
incrementBtn.style.justifyContent = "center";
incrementBtn.style.alignContent = "center";
incrementBtn.style.display = "flex";
incrementBtn.style.fontSize = "20px";
incrementBtn.style.alignItems = "center";
decrementBtn.style.justifyContent = "center";
decrementBtn.style.alignContent = "center";
// decrementBtn.style.display = "flex";
// decrementBtn.style.color = "Yellow";
// decrementBtn.style.alignItems = "center";
decrementBtn.style.fontSize = "20px";

incrementBtn.textContent = "Increase";
decrementBtn.textContent = "Decrease";
let div = document.querySelector("div");

let h1 = document.querySelector("h1");
let counter = 0;

function increase() {
    h1.textContent = `Counter: ${counter}`;
    counter++;
}
function decrease() {
    h1.textContent = `Counter: ${counter}`;
    if (counter > 0) {
        counter--;
    }
}

incrementBtn.addEventListener("click", increase);
decrementBtn.addEventListener("click", decrease);

div.prepend(incrementBtn);
div.prepend(decrementBtn);