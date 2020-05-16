const credits = 23580;
const pricePerDroid = 3000;
let quantityDroids = prompt('Введите количество дроидов');

if (quantityDroids === null) {
  console.log('Отменено пользователем');
} else {
  quantityDroids = Number(quantityDroids);

  const notAnumber = Number.isNaN(quantityDroids);

  if (notAnumber) {
    quantityDroids = 'Было введено не число. Повторите ваш заказ!';
    alert(quantityDroids);
  } else {
    let totalPrice = pricePerDroid * quantityDroids;

    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      let remCredits = credits - totalPrice;

      console.log(
        `Вы купили '${quantityDroids}' дроидов, на счету осталось '${remCredits}' кредитов.`,
      );
    }
  }
}
