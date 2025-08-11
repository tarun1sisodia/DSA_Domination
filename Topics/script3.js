let body = document.querySelector("body");
let p = document.createElement("p");
// let window = document.querySelector("window");
body.prepend(p);

function toggle(dets) {
    p.style.display = "none";
    console.log(dets);

}
p.textContent = "Jaadu.."
p.style.display = "block";

// p.addEventListener("mouseover", toggle);
p.addEventListener("mouseover", toggle);


let inputs = document.querySelector("input");

inputs.addEventListener("change", (dets) => {
    console.log(dets.target.value);
    console.log(dets);
    alert(dets.target.value);

});
function back(dets) {
    console.log(dets);
    body.style.color = "white";
    body.style.backgroundColor = "black";
    alert("Backgroung Color Changed")
}

window.addEventListener("dblclick", back);
