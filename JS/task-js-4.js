let credits = 23580;
const pricePerDroid = 3000;
const quantityDroids = prompt('Введите количество дроидов');

if (quantityDroids === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = pricePerDroid * quantityDroids;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили '${quantityDroids}' дроидов, на счету осталось '${credits}' кредитов.`,
    );
  }
}
