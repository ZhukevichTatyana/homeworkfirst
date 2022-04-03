
const operator = getOperator();
const str = getStr ();
const result = calculate (str, operator);
showResult (result);

function getStr () {
  let strf;
  do {
    strf = prompt ("Введите числа через запятую");
  } while (strf === "" || strf === null)
return strf;
  }

function getOperator() {
   let op = prompt("Выберите действие: +, -, /, *", '');

  while(isOperatorInvalid(op)){
    op = prompt('Оператор не соотвецтвует +,-,/,*');
 }
  return op;
}
function isOperatorInvalid(value) {
  return value !== "+" && value !== "-"&& value !== "*"&& value !== "/";
}

function calculate (strf, operatorf) {
let operands = [];
operands = strf.split(",");
let value = +operands[0];
let strResult = operands[0];
for ( let i = 1; i < operands.length; i++){
  let iter = +operands[i]
  switch (operatorf) {
    case "+" : value += iter; break;
    case "-" : value -= iter; break;
    case "/" : value /= iter; break;
    case "*" : value *= iter; break;
} 
strResult += operatorf + iter;
console.log(strResult);
}
return strResult + "=" + value;
}

function showResult(resultf){
  alert (`Ваше значение ${resultf}`);
}

// function isOperatorInvalid(value) {
//   return value !== "+" && value !== "-"&& value !== "*"&& value !== "/";
// }                   
// function getOperand(message) {
//   let number = prompt(message);
//   console.log(number)
//   let arrayNumber = number.split(",")
        // let operand;
        // do {
        //   operand = prompt (message);
        //   console.log(operand)
        // } while(isOperandInvalid(operand));
        // return Number(operand);
// } 


//        function isOperandInvalid(value) {
//          return isNaN(value) || value === "" || value === null;
// }


// function calculate (x, y, action) {
//                      switch (action) {
//                            case "+": return x + y;
//                            case "-": return x - y;
//                            case "/": return x / y;
//                            case "*": return x * y;
//                        } 
//                    }
// function showResult (x, y, action, result) {         
//  alert ( `${x} ${action} ${y} = ${result}`);
//   }






  // let number = "2,2,2,fgd,2,3,";
  // let arrayNumber = number.split(",")
  // let validate = arrayNumber.map(function(num){if(isNaN(num) || num === "")
  // return Number(num);
  // }
  // )
  // console.log(validate)
/*   console.log(arrayNumber); */
  // let sum = 0
  //  for (let i = 0; i<arrayNumber.length; i++)
  //  {
  //  let iter = +arrayNumber[i];
  //  sum = sum+iter;
   /* console.log(iter); */
  //  }
  /*  console.log(sum); */


// const arr= [];
// let sum = 0;
// for (let i=0; i< arr.length; i++) {
//   sum = sum + Number(arr[i]);
//   alert(sum);
// }

