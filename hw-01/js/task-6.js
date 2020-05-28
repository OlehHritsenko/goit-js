let inputNumber;
let total = 0;

do {
    inputNumber = prompt('Введите число');
    const isNumber = Number.isNaN(+inputNumber);
    if (isNumber) {
        continue;
    }
    total += +inputNumber;
} while (inputNumber !== null);

console.log(`Общая сумма чисел равна ${total}`);
