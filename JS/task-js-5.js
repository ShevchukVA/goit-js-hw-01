let price;
const country = prompt('Введите вашу страну:');
let toLowerCaseNameCountry;

if (country === null) {
  console.log('Отменено пользователем');
} else {
  toLowerCaseNameCountry = country.toLowerCase();

  switch (toLowerCaseNameCountry) {
    case 'китай': {
      toLowerCaseNameCountry = 'Китай';
      price = 100;
      break;
    }

    case 'чили': {
      toLowerCaseNameCountry = 'Чили';
      price = 250;
      break;
    }

    case 'австралия': {
      toLowerCaseNameCountry = 'Австралия';
      price = 170;
      break;
    }
    case 'индия': {
      toLowerCaseNameCountry = 'Индия';
      price = 80;
      break;
    }
    case 'ямайка': {
      toLowerCaseNameCountry = 'Ямайка';
      price = 120;
      break;
    }
    default:
      toLowerCaseNameCountry = false;
  }
  if (toLowerCaseNameCountry === false) {
    alert('В вашей стране доставка не доступна');
  } else {
    console.log(
      `Доставка в '${toLowerCaseNameCountry}' будет стоить '${price}' кредитов`,
    );
  }
}
