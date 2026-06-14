
/*

*  
* *  
* * *  
* * * *  
* * * * *  

*/
function star(n) {
    let stars = "\n";
    for (let i = 1; i <= n; i++) { // 1 se lekar 5 tk chalana h.
        for (let j = 1; j <= i; j++) { // 1 se lekar i tk chalna h aur i kaha tk ja rhi h 5 tk but ek ek krke.
            stars += "* ";
        }
        stars += "\n";
    }
    console.log(stars);
}
star(5);




