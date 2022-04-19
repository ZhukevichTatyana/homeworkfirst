
const firstNumber = document.getElementById("operand_one");
const secondNumber = document.getElementById("operand_two");
const operat = document.getElementById("select");
const result = document.querySelector(".result");
const error = document.querySelector(".error");
const buttonEl = document.querySelector(".btn");
buttonEl.addEventListener("click", getInput);
function getInput () { 
    let x = +firstNumber.value;
    let y = +secondNumber.value;   
    action = operat.value;
    console.log(x,y);
    
    if (! isOperandInvalid(x) && ! isOperandInvalid(y)) {
    let res = calculate (x, y, action);
    result.textContent = `${res}`;
    // error.classList.remove("active");
    }else {error.classList.add("active");
    result.textContent = "";
    }
}
function calculate (x, y, action) {
    switch (action) {
            case "+": return x + y;
            case "-": return x - y;
            case "/": return x / y;
            case "*": return x * y;
    } 
}
 function isOperandInvalid(value) {
    return ( value =="" || value == null || isNaN(value) );
 }
 