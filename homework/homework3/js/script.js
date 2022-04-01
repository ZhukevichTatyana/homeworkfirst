
let operator = getOperator();

while(checkOperator(operator)==false||operator == ""){
  alert('Оператор не соотвецтвует +,-,/,*')
  operator=getOperator();
}

let a = getOperand ("Введите число");
while (wrongNumber(a)==true|| a=="")
{
 alert('Вы ввели не число');
 a = getOperand ("Введите число");
}



let b = getOperand ("Введите второе число");
while (wrongNumber(b)==true|| b=="")
{
 alert('Вы ввели не число');
 b = getOperand ("Выберите действие: +, -, /, *");
}

let result = calculate(a, b, operator);

  
showResult(a, b, operator, result);


function getOperator() {

          return prompt ("Выберите действие: +, -, /, *");
              
          
   } 
function getOperand(message) {
       
          return +prompt(message);

       } 
function calculate (a, b, operator) {
                     switch (operator) {
                           case "+": return a + b;
                           case "-": return a - b;
                           case "/": return a / b;
                           case "*": return a * b;
                       } 
                   }
function showResult (a, b, operator, result) {
                     

                         alert ( `${a} ${operator} ${b} = ${result}`);
                         
                         
                   }
function wrongNumber(value1) {
                     if (isNaN(value1))
                     {
                       return true;
                     }
                     else
                     {
                       return false;
                     }

                   }
function checkOperator(Symbol1)
{
 switch (Symbol1) {
   case "+": return true;
   case "-": return true;
   case "/": return true;
   case "*": return true;

 } 
 return false;
}





