// JS Number and Maths

const score = 400
const balance = new Number(100)
console.log(balance); // [Number: 100]
console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // 23.9

const anotherNumber = 1123.8966
console.log(anotherNumber.toPrecision(3)); // 1.12e+3

const hundreds= 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 /* INR */

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // 0.016520203082274643
console.log(Math.random()*10); // 4.253109859289806