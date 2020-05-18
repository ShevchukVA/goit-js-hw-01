const total = 100;

const ordered = prompt('Введите количество товара');

console.log('Ваш заказ:', ordered);

ordered > total
  ? console.log('На складе недостаточно товаров!')
  : console.log('Заказ оформлен, с вами свяжется менеджер.');
