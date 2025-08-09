let btn = document.querySelector("button");

let h1 = document.querySelector("h1");

function changeText() {
    h1.textContent = "!!Hello Tarun!"
}
btn.addEventListener("click", changeText);
