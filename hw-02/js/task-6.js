let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } if (input !== null) {
        numbers.push(+input);
    }
} while (input !== null)

if (numbers.length !== 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
} else if (numbers.length === 0) {
    console.log('Вы не ввели число!');
}