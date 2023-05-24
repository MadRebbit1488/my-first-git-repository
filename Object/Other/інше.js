/* Вибір чьогось із корзини покупок, авторизація, вихід із системи - такі дії представлені ф-ціями в властивостях */
//Вчимо користувача вітатись
let userHi = {
  name: 'Pypa',
  age: 24,
}
userHi.sayHi = function () {
  console.log('Helloy');
};

console.log(userHi); //{name: 'Pypa', age: 24, sayHi: ƒ}
console.log(userHi.sayHi()); //Helloy
/* Тут використовується ф-ціональний вираз щоб створити ф-цію привітання, і присвоїли її властивості userHi.sayHi() об'єкта.
Ф-ція яка є властивістю об'єкта, називають методом цього об'єкта.
Можна булоб використати зарання оголошену ф-цію в якості метода
let userHi = {
  name: 'Pypa',
  age: 24,
}
function sayHi () {
  console.log('Helloy');
}
userHi.sayHi = sayHi;
console.log(userHi.sayHi()); //Helloy
*/

//Скорочені записи в літералі об'єкта
//abbreviation - скорочення
let userAbb = {
  saiHi: function () {
    console.log('Helloy');
  }
};
//Скорочений запис
//Можна пропустити слово function і просто написати sayHi(), хочя між цими записами є даякі відмінні нюанси
user = {
  saiHi() { // теж саме що 'sayHi: function(){...}'
    console.log('Helloy');
  }
}
