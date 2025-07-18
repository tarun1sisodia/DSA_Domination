//Find Cirumference area of sphere

let r = parseFloat(prompt('Enter the Radius:', 0));

// const cirumference = Math.round(4 * Math.PI * r * r);
const cirumference = Math.round(4 * Math.PI * Math.pow(r, 2));

const area = Math.round(2 * Math.PI * r);

alert(cirumference);
alert(area);