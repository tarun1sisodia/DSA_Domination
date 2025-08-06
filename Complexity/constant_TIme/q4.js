let a = Math.floor(Math.random() * 10 + 1);
let b = Math.floor(Math.random() * 10 + 1);
// IIFE (Immediately Invoked Function Expression) style:
((a, b) => { console.log(a + b); })(a, b);
