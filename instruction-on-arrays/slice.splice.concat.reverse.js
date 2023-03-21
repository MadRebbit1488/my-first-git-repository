// //slice. splice, concat, reverse
// //Більш масовий метод масиву, який дає змогу видаляти або додавати певні частини елементів
const roles = ['user', 'admin', 'manager', 'superuser'];


________________________________________________________________
//Метод slice, він може записуватись декількома способами
//В () вказується індекс
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






_________________________________________________________________________
//Метод splice
const res7 = roles.splice(2);
console.log(res7); //Array [ "manager", "superuser" ]
//Він виводить змінений елемент як і slice, але ключова відміність в модифікації вихідного масиву, тобто він буде обрізаним
console.log(roles); //Array [ "user", "admin" ]

//Другим аргументом приймається  довжина елементів які потрібно взяти
// З другого індексу взято 2 елемента  [ "manager", "superuser" ] які вилучились із масиву
const res8 = roles.splice(2, 2);
console.log(res8); 
console.log(roles); //Array [ "user", "admin" ]

const res9= roles.splice(2, 1);
console.log(res9); //[ "manager" ]
console.log(roles); //Array [ "user", "admin" ]

//Видаляє останній елемент із масиву
const res10 = roles.splice(-1);
console.log(res10);
console.log(roles); // Array(3) [ "user", "admin", "manager" ]



________________________________________________________________________
//Метод reverse
//Модифікує вихідний масив перевертаючи його, тому вивід roles буде також зміненим
const res11 = roles.reverse();
console.log(res11); //Array(4) [ "superuser", "manager", "admin", "user" ]
console.log(roles); //Array(4) [ "superuser", "manager", "admin", "user" ]


_________________________________________________________________________
//Метод concat
const newRoles = ['sysadmin', 'developer'];
//Потрібно об'єднати його з попереднім масивом
const res12 = roles.concat(newRoles);
console.log(res12); //Array(6) [ "superuser", "manager", "admin", "user", "sysadmin", "developer" ]
console.log(res12.length); // 6



