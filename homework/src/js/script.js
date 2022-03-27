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

const n = prompt ('Выберете действие +, -, / , *');
const a = +prompt ('Напишите число');
const b = +prompt ('Напишите второе число');


switch (n) {
    case "+": alert (`${a} + ${b} = ${a+b}`); break;
    case "-": alert (`${a} - ${b} = ${a-b}`); break;
    case "*": alert (`${a} * ${b} = ${a*b}`); break;
    case "/": alert (`${a} / ${b} = ${a/b}`); break;
}





