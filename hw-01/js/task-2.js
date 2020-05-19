const total = 100;
const ordered = prompt('Введите количеcтво товаров');

if (ordered <= total) {
    console.log ('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log ('На складе недостаточно товаров');
}