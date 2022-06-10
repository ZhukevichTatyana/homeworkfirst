global.res = 1;
const calculator = require("./calculator"); 

 console.log(calculator.set(10));
console.log( calculator.sum(5)); // 15
console.log( calculator.mult(10)); // 150
console.log( calculator.sub(40)); // 110
console.log( calculator.div(10)); // 11

console.log( calculator.set(100)); // 100
console.log( calculator.sum(5)); // 105
console.log( calculator.mult(10)); // 1050
console.log( calculator.sub(40)); // 1010
console.log( calculator.div(10)); //101
