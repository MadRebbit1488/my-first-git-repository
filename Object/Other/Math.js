/* 
Вбудований об'єкт, який зберішає в своїх властивостях і методах різноманітні математичні константи і -ції. Не працює з числоами типу BigInt.
Не являється конструктором , всі властивості і методи статистичні.
Методи:
-Math.max([x[, y[, …]]]) - повертає найбільше число із своїх аргументів
-Math.min([x[, y[, …]]]) - повертає найменше число
-Math.pow(a, n) - повертає a в n-й ступені.
-Math.random() - повертає випадкове число в діапазоні від 0 до 1
-Math.round(x) - повертає значення число, округлене до найближчого цілого
-Math.floor - метод завжди округляє вниз і повертає найбільше ціле число, яке менше або дорівнює заданому числу.
-Math.ceil - метод завжди округлює та повертає менше ціле число, яке більше або дорівнює заданому числу.
*/

//Math.trunc - вбудована ф-ція, яка видаляє десятичну частину
console.log(String(Math.trunc(Number('49')))); //49
console.log(String(Math.trunc(Number('+49')))); //49
console.log(String(Math.trunc(Number('1.2')))); //1


//toFixed(n) округлення р-тату
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30
//Так як сума 0,1 і 0,2 буде не 0,3, а 0.30000000000000004