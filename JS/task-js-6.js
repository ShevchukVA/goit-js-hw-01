let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');

  input = Number(input);

  if (input === 0) {
    break;
  }

  const notNumber = Number.isNaN(input);

  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}

alert(`Общая сума чисел равна: ${total}`);
