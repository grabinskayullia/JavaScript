/*8.	Сумма в диапазоне
		
			Напишите 2 функции.
			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его 
			Т.е. принимает 3 параметра и А не может быть больше чем B
			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]
			
			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
			Должна быть валидация индексов
				- Чтобы не было отрицательных чисел
				- Чтобы индекс не выходил за рамки допустимых индексов
				- Чтобы первый индекс был меньше или равен второму
			
			Пример вывода в консоль:
			Массив: [.....] сгенерированный от A до B
			Сумма чисел в диапазоне от индекса C по индекс D равна: 10
*/
/*
var a = 1;
var b = 10;
var num = 8;

function randomNumber(n, a, b) {
    var list = [];
    for (var i = 0; i < n; i++){
        if (a <= b) {
            var number = Math.floor(Math.random() * (b - a) + a);
        }
        list.push(number);
    }
    console.log('Массив: ' + list + ' сгенерированный от A до B');
    return list;
}


function calculateNumbers(arr, c, d){
    if (c < 0 || d < 0 || c > d || c < a || d > b) {
        console.log('Error');
    } else {
        var numSlice = arr.slice(c, d);
        var sum = 0;
        
        console.log('Диапазон чисел: ' + numSlice);

        for (var i = 0; i < numSlice.length; i++){
            sum += numSlice[i];
        }
        console.log('Сумма чисел в диапазоне от индекса ' + c + ' по индекс ' + d + ' равна: ' + sum);
    }
    return sum;
}


var myArray = randomNumber(num, a, b);
calculateNumbers(myArray, 2, 7);
*/