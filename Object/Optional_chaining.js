//с (опціональний ланцюг) - ?.?.?
/* Optional chaining - це безпечний спосіб доступу до властивостей вкладених об'єктів, навіть якщо якісь із проміжних властивостей не існують
Виконує послідовно перевірку кожного елементу
Відносно нова властивість, в старих браузерах потрібен буде поліфіл*/
const cities1 = {
  kiv: {
    lt: 200,
    temp: {
      celcius: 25,
    },
  },
  ivfr: {
  },
}

//Звернення до властивості температури
console.log(cities.kiv.temp.celcius); //25
console.log(cities.ivfr.temp); //undefined
console.log(cities.ivfr.temp.celcius); // Uncaught TypeError: так буде тому, що temp - undefined, і celcius не зможе прочитатись від undefined, так як немає заданої властивості об'єкта

//Перевірки
//Якщо є cities.ivfr і в нього є температура ivfr.temp, це можна вивести в консоль
if (cities.ivfr && cities.ivfr.temp ) { 
 console.log(cities.ivfr.temp.celcius); //не буде помилки 
}

//
let city1 = 'kiv';
if (cities1[city1] != undefined && cities1[city1].temp != undefined) { 
 console.log(cities1[city1].temp.celcius); // 25
 //Якщо city = 'ivfr' , ми нічього не отримаємо, тому що працює перевірка
}

//Даний синтаксис занадто громоздкий, особливо коли є вложення до 4-6 рівня
//В таких випадках викор оptional chaining - опціональна побудова ланцюга
//Коли потрібно звернутись до якоїсь властивості, ми кажемо, що у нас в 
city1 = 'ivfr';
console.log(cities1[city1]?.temp?.celcius); //undefined
/* Тепер це не викличе помилки.
Знак '?' каже, що якщо в 'cities[city]', немає 'temp', тоді весь об'єкт буде undefined . 
Якщо в 'temp' немає 'celcius' - весь об'єкт буде undefined */

_______
//Проблема неіснуючьої властивості
/* Об'єкти user, містять інфо про користувача. У більшості користувачів є адреса у валстивості user.address з вулицею user.address.street, але в декого вона не вказана.
В такому випадку, якщо спробувати отримати user.address.street, а користувач виявиться без адреси, ми отримаємо помилку.
Хочя кращє отримати undefined замість помилки.
Щє приклад:
В веб-розробці ми можемо отримати об'єкт, відповідаючий елементам веб-сторінки, за допомогою спеціального виклику метода, такого як document.querySelector('.elem') і він повертає null, якщо потрібного елементу немає*/

//document.querySelector('.elem') рівний null, якщо елемента немає
let html = document.querySelector('.elem').innerHTML; //помилка якщо він рівний null

//Опціональний ланцюг - зупиняє розрахунок і повертає undefined, якщо значення перед ?. рівно undefined або null
let userError = {};
console.log(userError?.address?.street); //undefined

//Приклад з document.querySelector
let html1 = document.querySelector('.elem')?.innerHTML; //undefined
/* Синтаксис ?. робить необов'язковим значення перед ним , але не наступні після нього.
Так наприклад в user?.address.street.name, user може бути null/undefined(повернеться undefined), доступ до інших властивостей виконується звичайним чином. Якщо потрібно зробити якісь із них необов'язковими, потрібно буде замінити '.' на '?.'*/
/* Слід використовувати тільки там де відсутність значення допустимо, інакше помилки можуть замовчуватись, там де цього не потрібно */

//Якщо змінної user взагалі немає, то user?.anything приведе до помилки
console.log(pypa?.address); // помилка
//Орціональний ланцюг працює тільки з оглошеними змінними

_______
let opa = null;
let x = 0;
opa?.sayHi(x++); // немає opa, тому виконання не доходить до вкилику sayHi і x++
console.log(x); //0, значення не збільшилось
_______
//Інші варіанти використання: ?.(), ?.[]
/* ОЛ - це не оператор, а спеціальна синтаксична конструкція, яка працює із ф-ціями і []

Приклад: ?.() використовується для ф-ції яка може не існувати */
let userAdmin = {
  admin () {
    console.log('Я адмін');
  }
};
let userGuest = {
  guest() {
    console.log('Я не адмін');
  }
};
userAdmin.admin?.(); //Я адмін
userGuest.admin?.() || userGuest.guest(); //Я не адмін

//Приклад: ?.[], безпечно зчитує властивості об'єкта, навіть якщо він не існує
let key = "firstName";
let userOne = {
  firstName: 'DIO',
};
let userTwo = null;
console.log(userOne?.[key]); //DIO
console.log(userTwo?.[key]); //undefined

//Також можна використовувати ?. із delete
delete user?.name; //Видаляє user.name якщо властивість існує

/* ОЛ не має сенсу в лівій частині присвоєння, буде помилка */ 
