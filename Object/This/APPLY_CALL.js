
//Call(виклик), apply(застосовувати)
// Відразу викликають ф-цію на певне this
//Самастійне управління this в залежності від того що необхідно
/* Приклад: робота з людьми  які обдивляються автомобілі і вносять пошкодження*/
const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [], // масив пошкоджень,який буде наповнюватись по ходу огляду автомобіля
/*   Метод який наповнює об'єкт пошкоджень
  part - частина авто яка пошкоджена
  rate - ступінь пошкодження */
  addDamage (part, rate) {
    console.log(`У авто ${this.make} ${this.model} ${this.year} додано:  пошкодження ${part} в ступені ${rate}`);
    this.damages.push({
        part,
        rate
    });
  }
};
audi.addDamage('Капот', 1); //У авто Audi A3 2021 додано:  пошкодження: Капот в ступені 1

//Тепер уявимо, що в нас є і інші автомобілі
const bmw = {
  make: 'BMW',
  model: 'X5',
  year: 2022,
  damages: [],
};
//І ми хочемо додати їх відповідний метод
bmw.addDamage = audi.addDamage;
bmw.addDamage('Бампер', 2); //У авто BMW X5 2022 додано:  пошкодження Бампер в ступені 2

//Витягуємо метод із об'єкта і зробити універсальний метод
const addDamageFunc = audi.addDamage;
addDamageFunc('Бампер', 2); // при виклику даного методу буде помилка, тому що ми не можемо отримати ніодної властивості об'єкта, так як його немає. Тепер це глобальний метод - undefined, так як це звичайна ф-ція. І від undefined ми не можемо читати властивості


/* Є декілька можливостей перевикористати витягнутий метод на об'єктах
Call(виклик) - викликає ф-цію з вказаним значенням this і індивідуалтно наданими аргументами
Синтаксис:
fun.call(thisArg[, arg1[, arg2[, ...]]])
ТОбто call каже 'Виклич цю ф-цію , вкажи на якому контексті this і з якими аргументами
Тепер мим викликаємо ф-цію в контексті об'єкта bmw з переданими аргументами
*/
addDamageFunc.call(bmw, 'Бампер', 2); //У авто BMW X5 2022 додано:  пошкодження Бампер в ступені 2
addDamageFunc.call(audi, 'Бампер', 2); //У авто Audi A3 2021 додано:  пошкодження Бампер в ступені 2
//Можна також отримати масив аргументів через spred і отримати тойже р-тат
addDamageFunc.call(audi, ...['Кузов', 2]); //У авто Audi A3 2021 додано:  пошкодження Кузов в ступені 2
//Це працює тому що коли ми робимо spred від масива, ми отримуємо конкретні елементи і вони стають аргументами через кому нашої ф-ції

//Ідентично працює apply
//apply вказує на якому об'єкті застосувати метод, а далі масив аргументів
addDamageFunc.apply(bmw, ['Колесо', 3]); //У авто BMW X5 2022 додано:  пошкодження Колесо в ступені 3

/* Це одна із можливостей ручного управління чим буде this */