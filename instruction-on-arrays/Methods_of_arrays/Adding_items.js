
________________________________________________________________________________________________________________
________________________________________________________________________________________________________________
const users = ['1', '2', '3'];
//
//Додавання в кінець push
/* Даний метод, це такаж ф-ція як console.log, тільки над масивом . Вихідний масив мутується, присвоєння нового значення не відбувається. push полегщує додавання елементів в кінець масиву, без визначення індексу останнього елемента */
users.push('5');
console.log(users);
/* push повертає довжину зміненого масиву
Його можна  покласти в  константу, щоб  одразу отримати нову довжину  */
const arrLength = users.push('5'); 
console.log(users);
console.log(arrLength);

//Може одночасно додавати к-ка елементів
const num = ['3'];
num.push('4', '5'); //Array(3) [ "4", "5" ]
console.log(num); // Array(3) [ "3", "4", "5" ]

________________________________________________________________________________________________________________

//
//Додавання на початок unshift
//Зміщує всі елементи, те що спочатку було під індексом 0 тепер під індексом 1 і т.д
users.unshift('6');
console.log(users);

________________________________________________________________________________________________________________
________________________________________________________________________________________________________________

//Метод concat
//Створює новий масив, в який копіює дані із інших масивів і додаткові значення (в кінець масиву)
//Синтаксис arr.concat(arg1, arg2...)
const roles = ['user', 'admin', 'manager', 'superuser'];
const newRoles = ['sysadmin', 'developer'];
//Потрібно об'єднати його з попереднім масивом
const res12 = roles.concat(newRoles);
console.log(res12); //Array(6) [ "superuser", "manager", "admin", "user", "sysadmin", "developer" ]
console.log(res12.length); // 6

//Індший приелад
 let arr10 = ['1', '2', '3'];
 let arr11 = arr10.concat('4'); //Додає нове значення, думаю в такому форматі діє аналогічно методу push 
  console.log(arr11); //Array(4) [ "1", "2", "3", "4" ]
________________________________________________________________________________________________________________
//Метод slice
//Створює новий масив, в який копіює частину або весь масив
//Синтаксис: arr.slice([start], [end] не включаючи [end])
const res = roles.slice(2);
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res); //Array [ "manager", "superuser" ]
//Даний метод не модифікує вихідний масив, а відрізає шматок даних і кладе їх в нову змінну
const res2 = roles.slice(2, 3);
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res2); //Array [ "manager" ]

 /* Як він працює
З 1 аргументом: береться початковий індекс (в даному випадку 2 відрізається все до кінця масиву і кладеться в змінну (res)
У випадку з 2 аргументами: в якості першого аргументу він приймає початковий індекс, в якості другого елемента , кінцевий . Тобто він бере елемент 2 , по але невраховуючи 3
const res2 = roles.slice(0, 3);
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res2); //Array(3) [ "user", "admin", "manager" ]
const res2 = roles.slice(0, 2);
console.log(roles); 
console.log(res2); //Array [ "user", "admin" ] тому що 2 елемент враховуватись не буде */

// Він також може приймати негативні значення
const res3 = roles.slice(-1);
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res3);  //Array [ "superuser" ]
/* slice(-1) бере останній елемент масиву ,це аналогія
const res3 = roles.at(-1);
console.log(res3); // superuser
або
const res3 = roles[roles.length -1];
console.log(res3); // superuser
Різниця в тому що метод slice кладе у змінну шматок масиву, інші методи конкретне значення елемента
Щоб отримати ідентичне значення, потрібно взяти 0 елемент
const res3 = roles.slice(-1)[0];
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res3); // superuser */

// Якщо взяти -2, то це буде виведено два останні елементи масиву
const res4 = roles.slice(-2);
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
console.log(res4); //Array [ "manager", "superuser" ] 

// Виводиться значення від першого індексц по -1 не включаючи його
const res5 = roles.slice(1, -1);
console.log(res5); // Array [ "admin", "manager" ]

const res6 = roles.slice(1, -2);
console.log(res6); //Array [ "admin" ]
console.log(roles); //Array(4) [ "user", "admin", "manager", "superuser" ]
// Вивід масиву під кінець маніпуляцій буде незмінним


//Інші приклади
//Копіюємо частину масиву
let arr6 = ['1', '2', '3'];

//Починаючи з першої позиції ('2') до другої позиції ('3') але не включно
let arr7= arr6.slice(1, 2);
console.log(arr7); //Array [ "2" ]

//Починаючи з передостаньої позиції ('2') до останьої ('3') але не включно
let arr8 = arr6.slice(-2, -1);
console.log(arr8); //Array [ "2" ]

//Копіюємо весь масив
let arr9 = arr6.slice();
console.log(arr9); //Array(3) [ "1", "2", "3" ]

________________________________________________________________________________________________________________
