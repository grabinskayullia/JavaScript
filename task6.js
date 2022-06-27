/*          Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
			Определите наименьшее и наибольшее число в массиве.
			Массив, минимальное и максимальное число - вывести в консоль.
*/

/*
function getRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function showPositiveNumber(){
    var list = [];
    var ask = +prompt('Введите количество элементов: ');
    for (var i = 0; i < ask; i++){
        var randomNumbers = getRandomNumbers(-10, 10);
        list.push(randomNumbers);
    }
    console.log(list);

    const smallest_number = Math.min(...list);
    const largest_number = Math.max(...list);

    console.log('Smallest Value:', smallest_number);
    console.log('Largest Value:', largest_number); 
    
}

showPositiveNumber();
*/