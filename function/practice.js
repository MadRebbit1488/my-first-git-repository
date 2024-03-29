//ЗАВДАННЯ
// Переписуємо ф-цію в стрілкову
function toPower(num, power){
  let res = num ** power;
  return res;
}
console.log(toPower(2, 3));

let toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

// Перепишемо ф-цію в константу з використанням стрілкової ф-ції і тернарного оператора
let canAccessWebsite2 = age => age < 18 ? 'Ні' : 'Так';
console.log(canAccessWebsite2(18));


//
/* 
Користвач:
-Вік 
-Наявність роботи
-Гроші
Потрібно перевірити чи може він купити новий MakBook за 2000$?
Він може брати не тільки свої гроші, але і взяти кредит.
Йому дадуть 500$, тільки якщо йому більше 24-х років і він має роботу, 100$ якщо йому просто більше 24-х і 0 в іншому випадку.
Напишіть ф-цію, яка приймає дані користувача і товара і повертає true або false. */
//Ф-ція для розрахунку кредиту
function computeCredit(age, hasJob = false){
   // Залежить від 2 параметрів:наявність роботи, вік.Якщо немає інформації про роботу, то вона за замовчуванням false
  switch(true){
    case age > 24 && hasJob:
      return 500; // return працює як brake
    case age >24 :
      return 100;
    default:
      return 0;  
  }
}

// //На практиці якщо ф-ція має багато аргументів, використовують об'єкти
function canBuy(productPrice, age, money, hasJob = false){
//Розраховуємо чи можна купити товар
// Розраховуємо кредитні кошти
let creditMoney = computeCredit(age, hasJob);
// Рахуємо чього більше. Якщо його грошей + кредитних буде більше за вартість товару, то буде true
return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1000));



//Чи буде дана ф-ція працювати без else? .... Yes
function checkAge(age){
  if(age >18){
    return confirm ('TRUE');
  }else{
  return confirm ('FALSE');
  }
}
console.log(checkAge(19));
//
function checkAge(age){
  if(age >18){
    return confirm ('true');
  }
  return confirm ('FALSE');
  
}
console.log(checkAge(19));

//Переписати ф-цію використовуючи оператор '?' чи '||'
function checkAge(age){
  if(age >18){
    return confirm ('TRUE');
  }else{
  return confirm ('FALSE');
  }
}

//'?'
function checkAge (age) {
  return (age>=18) ? true : false;
}

// '||'
function checkAge(age ){
  return(age >= 18) || 'false';
}
console.log(checkAge(18));

//Напишіть ф-ція min(a, b) яка повертає менше із чисел a і b
//Варіант рішення з оператором if
function min (a, b){
  if (a < b){
    return a;
  }
  return b;
}

//Варіант рішення з оператором '?'
function min (a, b){
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min (5, 2));
console.log(min (7, 4));


/* Напишіть ф-цію pow(x ,n) яка виводить х в ступінь n і повертає результат
Cтворіть сторінку, яка запитує x і n, а потім виводить результат */
function pow (x, n) {
 let result = x ;
  for (let i=1; i<n; i++){
    result *=x;
  }
  return result;
 }

 let x = prompt('x?', '');
 let n = prompt('n?', '');

 if (n<1){
  alert(`Ступінь ${n} не підтримується, використайте натуральне число`);
 }else {
  alert(pow(x, n));
 }
// Я цю фігню не зрозуміла, хай просто побуде тут

//
function getUser(id = 1, name) {
    console.log(id + ' ' + name);
}
console.log(getUser('Антон')); // Антон undefined

//
function isAdmin(userId) {
    if (userId === 10) {
        return true;
    } else {
        return isAdmin(10);
    }
}
console.log(isAdmin(5)); // true

//
function start() {
    return 'start';
}
function run() {
    return start() + ' finish ' + start();
}
console.log(run()); // start finish start

//
function a() {
    return c();
}
function b() {
    return 'Yes';
}
function c() {
    return b;
}
console.log(a());


function doReverse(p1){
  return p1.split("").reverse().join("");
}

function someFunction(p1, p2, p3){
  p1 = doReverse(p1);
  p2 = ['1', '2', '3'];
  p3.push('9999');
}

let a = 'xyz';
let b = ['123', '567'];
let c = ['abc', 'def'];

someFunction(a, b, c);

console.log(a); //  xyz
console.log(b); //[ "123", "567" ]
console.log(c); //[ "abc", "def", "9999" ]


let number = 10;

let display = function () {
  console.log(number);
   let number = 20;
};
display(); // undefined


async function callMe() {
  console.log(1);
  await crazyFunction();
  console.log(3);
}

function crazyFunction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(2);
    }, 1000);
  });
}

callMe(); // 1, 2

//
// Хто потрапить в консоль першим
function showName (){
  console.log('Вася');
}
setTimeout(showName, 0);
console.log('Коля'); // Коля , так як Вася вийде із затримкою

//
// Чи правильно викликана ф-ція?
showMessage();
function showMessage(){
  console.log('Повідомлення');
} // Так, так як викликати ф-цію можна до її оголошення

//
//Чи правильно викликана ф-ція?
showMessage();
let showMessage = function(){
  console.log('Повідомлення');
} // Ні, так як в ф-ціональних виразах як і в змінних виникає помилка при передчасному виклику змінної

//
//Як вирішити проблему ?
'use strict'
if(2>1){
  function showMessage(){
    console.log('Повідомлення');
  }
}
showMessage();

// Ось так 
'use strict'
let showMessage ;
if(2>1){
  showMessage = function (){
    console.log('Повідомлення');
  }
}
showMessage();