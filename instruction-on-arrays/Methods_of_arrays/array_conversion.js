//Перетворення масивів
/* 
Методи:  
-reverse
-map
-sort/localeCompare
-split/join
-reduce/reduceRight */


//Метод reverse
//Сортування масивів
//Змінює порядок елементів на зворотній
//Модифікує вихідний масив перевертаючи його, тому вивід roles буде також зміненим
const roles = ['user', 'admin', 'manager', 'superuser'];
const res11 = roles.reverse();
console.log(res11); //Array(4) [ "superuser", "manager", "admin", "user" ]
console.log(roles); //Array(4) [ "superuser", "manager", "admin", "user" ]

________________________________________________________________________________
//Перетворення масивів
//Метод map - викликає ф-цію для кожного елементу масива і повертає масив р-татів виконання цієї ф-ції не модифікуючи вихідний масив
//В тілі ф-ції можна виконувати певний код і повертати р-тати які сформують значення нового масиву

/* Синтаксис:
let result = arr.map(function(item, index, array){
  //Повертає нове значення замість елемента
}); */

let arrMap = ['Ваня', 'Іван', 'Оля'];

let resultMap = arrMap.map(function(item, index, array){
  return item[0]; //Повертає першу букву кожного елементу "В", "І", "О"
});
console.log(arrMap); //Array(3) [ "Ваня", "Іван", "Оля" ] масив не змінився
console.log(resultMap); // новий масив Array(3) [ "В", "І", "О" ]

//Інший приклад
//Метод map
//Проходиться по заданому йому масиву, та в залежності від умови модифікує записи і повертає новий масив не модифікуючи оригінальний масив 

const users3 = [
  {
    name: 'Vitaliy',
    age: 26,
    sex: 'male',
  },
  {
    name: 'Jessica',
    age: 17,
    sex: 'female',
  },
  {
    name: 'Robert',
    age: 16,
    sex: 'male',
  },
  {
    name: 'Sara',
    age: 20,
    sex: 'female',
  },
  {

    name: 'Rob',
    age: 34,
    sex: 'male',
  },
];


//В залежності від статі користувача додаємо приставку Mr або Mrs
const correctName = users3.map(function(item) {
  return item.sex === 'male' ? 'Mr. ' + item.name : 'Mrs. ' + item.name;
});

console.log(correctName); // [ "Mr. Vitaliy", "Mrs. Jessica", "Mr. Robert", "Mrs. Sara", "Mr. Rob" ]

//
//Перетворюємо елемент в його довжину
let arrMapLength = ['Сорока', 'Ворона', 'Сокіл'];
let mapLength = arrMapLength.map(item => item.length);
console.log(mapLength); //Array(3) [ 6, 6, 5 ]

//
// Прикинь що сама додумалась зробити
let arrN = [1, 2, 3];

let arrNum = arrN.map(function(item){
  return item + '.0'  ;
});

console.log(arrNum); // Array(3) [ "1.0", "2.0", "3.0" ]

//
//АБО
let arrN1 = [1, 2, 3];

let arrNum1 = arrN1.map(function(item){
  return '0.' + item  ;
});

console.log(arrNum1); //Array(3) [ "0.1", "0.2", "0.3" ]

//
//Я хочю щоб приставка "0." використовувалась до чисел >10
let arrN2 = [1, 2, 3, 10];

let arrNum2 = arrN2.map(function(item){
  if(item < 10) {
    return '0.' + item;
  } else {
    return item;
  }  
});
console.log(arrNum2); 

//
//Цікаво вийшло
let arrN3 = [1, 3, 10, 13, 14];

let arrNum3 = arrN3.map(function(item){
  return  item <= 10  ;
});

console.log(arrNum3); //Array(5) [ true, true, true, false, false ]
________________________________________________________________________________
//Сортування масивів
//Метод sort(fn) - змінює в масиві порядок елементів .Схоже на метод  reverse.Модифікує вихідний масив
//В процесі роботи алгоритму зрівнює елемент з багатьма іншими, але старається зробити якомога менше порівнянь
//Щоб відсорторувати елементи в тому порядку в якому потрібно нам, потрібно вказувати ф-цію сортування в (). Дана ф-ція потребує будь-яку позитивне, щоб сказати "більше" і негативне число, щоб сказати "менше"

/* //Сортування слів
let arrOne1 = ['Ваня', 'Іван', 'Оля'];
console.log(arrOne1.sort()); //Array(3) [ "Іван", "Ваня", "Оля" ] */

//Сортування чисел
let arrTwo2 = [8, 22, 1];
console.log(arrTwo2.sort()); //Array(3) [ 1, 22, 8 ]

/* За замовчуванням елементи сорторуються як рядки , для яких використовується лексикографічний порядок  
console.log('8' > '22'); // true */

//В момент виклику метода sort в () можна вказувати ім'я ф-ції яка буде враховуватись при виконанні сортування

//Ф-ція сортування
// function compareNumeric (a, b) {
//   console.log(`Порівнюємо ${a} і ${b}`);
//    if (a > b) return 1;  
//   if (a == b) return 0;
//   if (a < b) return -1; */
/*   Оскільки в даному випадку достатньо повертати позитивне або негативне число  або 0 , то замість запису вищє можнав використати  повернення результату виразу віднімання
return a - b;  //Array(3) [ 1, 8, 22 ] */

// }
// console.log(arrTwo2.sort(compareNumeric));  //Array(3) [ 1, 8, 22 ]
                                           // Порівнюємо 1 і 22
                                           //Порівнюємо 22 і 8
                                           // Порівнюємо 1 і 8

//Або можна вирішити всю задачу використовуючи стрілкову ф-цію і в () метода sort написати ф-ція яка буде виконувати все те саме
console.log(arrTwo2.sort((a, b) => a-b)); //  Array(3) [ 1, 8, 22 ]
//В р-таті ми отримуємо правильно відсортований масив чисел

______
let arrSorn = [1, 5, 16, 14];
console.log(arrSorn.sort()); //Array(4) [ 1, 14, 16, 5 ]
console.log(arrSorn.sort((a, b) => a-b)); // Array(4) [ 1, 5, 14, 16 ]

//Щоб дізнатись  які елементи порівнюються, можна вивести їх на екран
let arrSort1 = [1, 5, 16, 14];
arrSort1.sort(function(a, b){
  alert(a + '<>' + b);  // 1<>5; 5<>16; 16<>14; 5<>14
  return a -b;
});

//
/* Алгоритм сортування рядків порівнює букви по їх кодам. Для багатьох алфавітів кращє використовувати метод  str.localeCompare, для правильного сортування букв таких як Ö. */
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a.localeCompare(b))); //Array(3) [ "Andorra", "Österreich", "Vietnam" ]
________________________________________________________________________________

// ПЕРЕТВОРЕННЯ РЯДКІВ І МАСИВІВ ОДИН В ОДНОГО

//РЯДОК => МАСИВ
//split(розбити) - метод рядка, який дозволяє перетворювати(розділяти) вихідний рядок до масива не модифікуючи його. В якості аргумента він приймає симвал по якому потрібно розбити вихідний рядок на масив(/)

/* Метод split перетворює рядок в масив по заданому розділювачю
Синтаксис: 
str.split(delim)  */

//Нам приходить рядок з url(для нього існують окремі методи
const url = 'auth/user/login';
//Ми хочемо отримати кожний сегмент. 
const res = url.split('/');
//Ми вказали, що нам потрібно розбити по / і вийшло три елемента
console.log(res); //Array(3) [ "auth", "user", "login" ]

/* Якщо помтавити на початку / буде чьотири елемента
 const url = '/auth/user/login';
const res = url.split('/');
console.log(res); //Array(4) [ "", "auth", "user", "login" ] */

//Інший приклад
let strSplit = 'Ваня, Іван, Оля';

let arrSplit = strSplit.split(','); //Звертаємось до рядка strSplit ставимо '.' пишемо split і в ('') вказуємо розділювач, в даному випадку це ','
console.log(arrSplit); //Отримуємо масив із цих елементів :Array(3) [ "Ваня", " Іван", " Оля" ]

//Можна обмежити к-ть об'єктів які потраплять в масив, через ',' вказавши потрібну к-ть
let arrSplitOne = strSplit.split(',', 2);
console.log(arrSplitOne); //Array [ "Ваня", " Іван" ]

//
//Виклик split() з порожнім аргументом, розбиває рядок на масив букв
let str = 'test';
console.log(str.split('')); //Array(4) [ "t", "e", "s", "t" ]

______
______
//МАСИВ => РЯДОК
/*join - поєднує елементи масива в рядок по заданому розділювачю, який може бути чим завгодно
Синтаксис:
arr.join(glue) */

const roles1 = ['user', 'admin', 'manager', 'superuser'];
console.log(roles1.join('-')); // user-admin-manager-superuser */

// Метод join перетворює масив в рядок 
let arrJoin = ['Ваня', 'Іван', 'Оля'];
let strJoin = arrJoin.join(',');
console.log(strJoin); // Ваня,Іван,Оля

//Отримання рядка із масиву ф-цією String, р-тат буде тимже
//Але при промтому переводі в рядок не можна вказати розділювач і він завжди буде ','
let arrJoinOne = ['Ваня', 'Іван', 'Оля'];
console.log(String(arrJoinOne)); // Ваня,Іван,Оля

________________________________________________________________________________

//Методи reduce/reduceRight

/* Якзщо потрібно перебрати масив - можна використовувати forEach, for або for...of . Якщо потрібно перебрати масив і повернути дані для кожного елемента - метод map

Методи arr.reduce і arr.reduceRight схожі на ці методи, але вони трохи складніші і використовуються для вичислення якогось єдиного значення на основі всього масиву
 */


Синтаксис:
let value = arr.reduce(function(previousValue, item, index, array){
  //....
}, [initial]);

/* До звичних аргументів додається previousValue:
  initial - початкове значення, записано другим параметром reduce
  previousValue - приймає р-тат попереднього виклику ф-ції, рівний початковому значенню (initial) при першому виклику (якщо переданий initial), 
  item - елемент масиву,
  index - його індекс,
  array - сам масив.

  Ф-ція застосовується по черзі до всіх елементів масиву і переносить свій р-тат на наступний виклик.Р-тат її попереднього виклику передається на наступний виклик в якості першого аргументу.
  Перший аргумент являється акамулятором, який зберігає об'єднаний р-тат всі попередніх викликів ф-ції.
  */

  let arrReduce = [1, 2, 3, 4];
  let reduceValueOne = arrReduce.reduce(function(previousValue, item, index, array){
    return item + previousValue; //Сума поточного значення масиву [1, 2, 3, 4], з попереднім previousValue
  }, 0); //0 Початкове значення для previousValue

  console.log(reduceValueOne); //10

  /* 
   Крок №1 
  previousValue = 0;
  item = 1;
  Їх сума = 1;

   Крок №2
  previousValue = 1;
  item = 2;
  Їх сума = 3;

   Крок №3
  previousValue = 3;
  item = 3;
  Їх сума = 6;

   Крок №4
  previousValue = 6;
  item = 4;
  Їх сума = 10;
  */


/*   Якщо не вказати початкове значення, то воно буде дорівнювати першому елементу масива(previousValue = Ваня), а робота метода почнеться з другого елемента (item = Іван)
  Але якщо масив порожній, без початкового значення reduce видасть помилку */

let arrName = ['Ваня', 'Іван', 'Оля'];
let reduceValueTwo = arrName.reduce(function(previousValue, item, index, array){
    console.log(previousValue); //Ваня
    console.log(item); // Іван
    return `${item}, ${previousValue}`; //Іван, Ваня
});
console.log(`Користувачі: ${reduceValueTwo}`); // Користувачі: Оля, Іван, Ваня

//
let arrReduseSum = [1, 2, 3, 4, 5];
let result = arrReduseSum.reduce((sum, item) => sum + item, 0);
console.log(result); //15
//Р-тат без початкового значення тоічно такий же
let arrReduseSum1 = [1, 2, 3, 4, 5];
let result1 = arrReduseSum1.reduce((sum, item) => sum + item);
console.log(result1); //15

/* 
1. sum = 1 + item = 2 = 3
2. sum = 3 = item = 3 = 6
3. sum = 6 + item = 4 = 10
4. sum = 10 + item = 5 = 15 */


//Інший приклад
//Метод reduce

const users4 = [
  {
    name: 'Vitaliy',
    age: 26,
    sex: 'male',
  },
  {
    name: 'Jessica',
    age: 17,
    sex: 'female',
  },
  {
    name: 'Robert',
    age: 16,
    sex: 'male',
  },
  {
    name: 'Sara',
    age: 20,
    sex: 'female',
  },
  {

    name: 'Rob',
    age: 34,
    sex: 'male',
  },
];


//Отримуємо середній вік користувачів(додаємо вік і ділимо на к-ть користувачів)
const summ = users4.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);

console.log(summ);  // 113
console.log(summ / users4.length); // 22.6

//0 - це точка відліку з якої починається обрахунок, якщо булоб вказано 100 р-тат був би 213 і т. д
/* 1. Ітерація 
  accumulator =0, currentValue = 26
2.accumulator =26, currentValue = 17
3. accumulator =43, currentValue = 16
4. accumulator =59, currentValue = 20
5. accumulator =79, currentValue = 34  = 113 
Таким сином ф-ція reduce отримує р-тат*/
__________
//Метод reduceRight працює аналогічно, але проходить по масиву справа на ліво
let arrReduseSum2 = [1, 2, 3, 4, 5];
let result2 = arrReduseSum2.reduceRight((sum, item) => sum + item, 0);
console.log(result2); //15
________________________________________________________________________________
// Метод toString
// Повертає список елементів, розділених комами
let str1 = [1, 2, 3];
console.log();
console.log(String(str1)); //  1,2,3

console.log([] + 1); //1
console.log([1] + 1); // 11
console.log([1,2] + 1); //1,21
//Тут [] стає пустим рядком, [1] => "1", a [1,2] => "1,2"
//Принцип той же, що і у рядкового перетворення за допомогою бінарного плюса 

________________________________________________________________________________