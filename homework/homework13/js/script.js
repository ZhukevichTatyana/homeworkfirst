"use strict"
function Calculator(base){
    this.base = base;
    this.sum = function(a) {return base += a;};
    this.mult = function(a) {return base *= a;};
    this.sub = function(a) {return base -= a;};
    this.div = function(a) {return base /= a;};
    this.set = function(a) {return base = a;};
}
const calc = new Calculator(10);
 console.log(calc.sum(5));  // 15
 console.log(calc.mult(10)); // 150
 console.log(calc.sub(40)); // 110
 console.log(calc.div(10)); // 11
 console.log(calc.set(100)); // 100
 console.log(calc.sum(5))
 console.log(calc.mult(10)); 
 console.log(calc.sub(40)); 
 console.log(calc.div(10));