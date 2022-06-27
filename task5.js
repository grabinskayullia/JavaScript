/* 5.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
		
		var computerChoice = Math.random();
		alert(computerChoice);
		
		let comp = getComputerChoice();
		let user = getUserChoice();
		function game(comp, user) {
			
		}

        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
*/
/*
var userChoice = prompt('Введите Камень, Ножницы или Бумага: ');
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
    computerChoice = 'Камень';
} else if (computerChoice <= 0.67) {
    computerChoice = 'Ножницы';
} else {
    computerChoice = 'Бумага';
}
    
document.write('Ваш выбор: ' + userChoice + '</br>');
document.write('Компютер выбрал: ' + computerChoice);

var compare = function game(user, comp) {
    if (user === comp){
        return alert('Ничья!');
    } 
    if (user === 'Камень'){
        if (comp === 'Ножницы'){
            return alert('Камень выиграл!');
        } else {
            return alert('Бумага выиграли!');
        }
    }

    if (user === 'Бумага'){
        if (comp === 'Камень') {
            return alert('Бумага выиграла!');
        } else {
            return alert('Ножницы выиграли!')
        }
    }

    if (user === 'Ножницы'){
        if (comp === 'Камень') {
            return alert('Камень выиграл!');
        } else {
            return alert('Ножницы выиграли!');
        }
    }
} 
compare(userChoice,computerChoice);
*/
