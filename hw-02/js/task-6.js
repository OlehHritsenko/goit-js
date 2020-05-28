let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    const isNumber = Number.isNaN(+input);
    if (isNumber === true) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    numbers.push(+input);
} while (input !== null)

for (let number of numbers) {
    total += number;
}

console.log(`Общая сумма чисел равна ${total}`);