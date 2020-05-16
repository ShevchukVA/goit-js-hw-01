const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Введите ваш пароль');

if (message === null) {
  message = 'Отменено пользователем';
} else {
  message = message.toLowerCase();

  if (message === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
}
alert(message);
