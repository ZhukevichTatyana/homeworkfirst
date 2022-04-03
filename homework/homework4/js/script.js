
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
