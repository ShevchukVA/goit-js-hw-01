let input;
let total = 0;

while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    console.log('Отменено пользовaтелем');
    break;
  }

  input = Number(input);

  const notNumber = Number.isNaN(input);

  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}

alert(`Общая сума чисел равна: ${total}`);
