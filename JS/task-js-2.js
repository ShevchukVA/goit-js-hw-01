const total = 100;

const ordered = prompt('Введите количество товара');

if (ordered === null) {
  console.log('Отмена заказа товара');
} else {
  console.log('Ваш заказ:', ordered);

  if (ordered > total) {
    console.log('На складе недостаточно товаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  }
}
