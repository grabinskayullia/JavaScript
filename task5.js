/*5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
		Выведите массив в консоль
		Посчитайте сумму позитивных чисел из массива и выведите ее в консоль
*/
/*
function getRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function showPositiveNumber(){
    var list = [];

    for (var i = 0; i < 10; i++){
        var randomNumbers = getRandomNumbers(-10, 10);
        list.push(randomNumbers);
    }
    console.log(list);

    var sum = 0;
    for (var j = 0; j < 10; j++){
        if (list[j] > 0) {
            sum += list[j];
        }
    }
    console.log(sum);
}

showPositiveNumber();
*/