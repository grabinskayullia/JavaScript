/*1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя.
*/
/*

var firstNumber = +prompt('Введите первое число: ');
var secondNumber = +prompt('Введите друге число: ');
var signs = prompt('Введите знак арифметической операции: ');
var result;


function add(a, b) {
    return a + b;
}

function sub(a, b) {           
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

        
switch (signs) {
    case "+":
        result = add(firstNumber, secondNumber);
        break;
    case "-":
        result = sub(firstNumber, secondNumber);
        break;
    case "*":
        result = mul(firstNumber, secondNumber);
        break;
    case "/":
        result = div(firstNumber, secondNumber);
        break;
    default:
        document.write("<p><b style='color:red'>" + signs + "</b> - не является знаком арифметической операции.</p>");
}

if (result != undefined) {
    document.write("Результат операции: " + result);
} else {
    console.log("Error");
}
*/