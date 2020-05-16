const total = 100;

let ordered = prompt('Введите количество товара');

if (ordered === null) {
  console.log('Отмена заказа товара');
} else {
  ordered = Number(ordered);

  const notAnumber = Number.isNaN(ordered);

  if (notAnumber) {
    console.log('Было введено не число. Повторите ваш заказ!');
  } else {
    console.log('Ваш заказ:', ordered);

    if (ordered > total) {
      console.log('На складе недостаточно товаров!');
    } else {
      console.log('Заказ оформлен, с вами свяжется менеджер');
    }
  }
}
