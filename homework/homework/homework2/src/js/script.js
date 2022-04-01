
const n = prompt ('Выберете действие +, -, / , *');
const a = +prompt ('Напишите число');
const b = +prompt ('Напишите второе число');


switch (n) {
    case "+": alert (`${a} + ${b} = ${a+b}`); break;
    case "-": alert (`${a} - ${b} = ${a-b}`); break;
    case "*": alert (`${a} * ${b} = ${a*b}`); break;
    case "/": alert (`${a} / ${b} = ${a/b}`); break;
}





