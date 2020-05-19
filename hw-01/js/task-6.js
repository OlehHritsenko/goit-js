let inputNumber;
let total = 0;

while (true) {
    let inputNumber = prompt('Введите число');
    
    if (inputNumber === null) {
        break;
    }

    inputNumber = Number(inputNumber);
    const isNumber = Number.isNaN(inputNumber)
    if (isNumber === true) {
        continue;
    }
    total += inputNumber;
}

console.log(`Общая сумма чисел равна ${total}`);