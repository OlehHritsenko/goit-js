const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('Введите пароль');

switch (password) {
    case null:
    console.log('Отменено пользователем!');
    break;
    case ADMIN_PASSWORD:
    console.log('Добро пожаловать!');
    break;
    default:
    console.log('Доступ запрещен, неверный пароль!');
}