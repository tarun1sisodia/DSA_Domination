let fs = require('fs');
let input = fs.readFileSync(0,'utf-8').trim();
let w = +input;

if(w % 2 ===0 && w >2){
console.log("YES");
}
else{
console.log("NO");
}
