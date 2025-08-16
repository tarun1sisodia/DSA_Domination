

function ticktick() {
    console.log(clock);
    let now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(ticktick, 1000);
ticktick();