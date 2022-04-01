//homework1
// let userName= prompt ("What is Your name?");
// alert ("Hello, "+ userName +"! How are you?");

//homework2
//first variant

// const n = prompt ('Выберете действие +, -, / , *');
// const a = +prompt ('Напишите число');
// const b = +prompt ('Напишите второе число');
// if (n === "+" ) {
//     alert (`${a} + ${b} = ${a+b}`);
// } else if (n === "-") {
//     alert (`${a} - ${b} = ${a-b}`);
// }else if (n === "*") {
//     alert(`${a} * ${b} = ${a*b}`);
// }else {(n === "/") 
//     alert(`${a} / ${b} = ${a/b}`);
// }


// second variant

// const n = prompt ('Выберете действие +, -, / , *');
// const a = +prompt ('Напишите число');
// const b = +prompt ('Напишите второе число');


// switch (n) {
//     case "+": alert (`${a} + ${b} = ${a+b}`); break;
//     case "-": alert (`${a} - ${b} = ${a-b}`); break;
//     case "*": alert (`${a} * ${b} = ${a*b}`); break;
//     case "/": alert (`${a} / ${b} = ${a/b}`); break;
// }



//homework3



// let operator = getOperator();

//  while(checkOperator(operator)==false||operator == ""){
//    alert('Оператор не соотвецтвует +,-,/,*')
//    operator=getOperator();
//  }

// let a = getOperand ("Введите число");
// while (wrongNumber(a)==true|| a=="")
// {
//   alert('Вы ввели не число');
//   a = getOperand ("Введите число");
// }



//  let b = getOperand ("Введите второе число");
//  while (wrongNumber(b)==true|| b=="")
// {
//   alert('Вы ввели не число');
//   b = getOperand ("Выберите действие: +, -, /, *");
// }

//  let result = calculate(a, b, operator);

   
// showResult(a, b, operator, result);


// function getOperator() {

//            return prompt ("Выберите действие: +, -, /, *");
               
           
//     } 
// function getOperand(message) {
        
//            return +prompt(message);

//         } 
// function calculate (a, b, operator) {
//                       switch (operator) {
//                             case "+": return a + b;
//                             case "-": return a - b;
//                             case "/": return a / b;
//                             case "*": return a * b;
//                         } 
//                     }
// function showResult (a, b, operator, result) {
                      

//                           alert ( `${a} ${operator} ${b} = ${result}`);
                          
                          
//                     }
// function wrongNumber(value1) {
//                       if (isNaN(value1))
//                       {
//                         return true;
//                       }
//                       else
//                       {
//                         return false;
//                       }

//                     }
// function checkOperator(Symbol1)
// {
//   switch (Symbol1) {
//     case "+": return true;
//     case "-": return true;
//     case "/": return true;
//     case "*": return true;

//   } 
//   return false;
// }


            


