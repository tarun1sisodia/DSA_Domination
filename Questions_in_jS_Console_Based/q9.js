//Accept the three sides of triangle and calculate the area using Heron's formula

let a = parseFloat(prompt('Enter the Length (a):', 0));
let b = parseFloat(prompt('Enter the Breadth (b):', 0));
let c = parseFloat(prompt('Enter the Height (c):', 0));

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));


alert(`Area of Triangle using Heron's Formula: ${area.toFixed(2)}`);
