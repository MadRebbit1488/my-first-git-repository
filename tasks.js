/* 1. Попросите пользователя ввести размер его зарплаты. Рассчитайте, какую сумму он должен перечислить на налог и какую сумму он получит на руки, если налоги начисляются таким образом:
Зарплата до 6000 включительно - 10%;
Зарплата до 10 000 включительно - 15%;
Зарплата до 15 000 включительно - 17.5%;
Зарплата свыше 15 000 - 20%.
2. Определите остаток от деления количества лет на 10. В зависимости от этого выведите в абзаце "Антон: 21 год" или "Антон: 24 года" или "Антон: 25 лет". Т.е. для всех чисел с 1 в конце должно быть "_1 год", для числ с 2,3,4 в конце - "_3 года", а для всех остальных - "_7 лет". Вы можете использовать для этого условные конструкциии if...else или switch...case. */

/* Решение задачи на JavaScript:

javascript

Copy code

let salary = parseFloat(prompt("Введите размер вашей зарплаты:"));

if (salary <= 6000) {

var tax = salary * 0.1;

} else if (salary <= 10000) {

var tax = 600 + (salary - 6000) * 0.15;

} else if (salary <= 15000) {

var tax = 1350 + (salary - 10000) * 0.175;

} else {

var tax = 2575 + (salary - 15000) * 0.2;

}

let netSalary = salary - tax;

alert(`Сумма налога: ${tax} рублей. Сумма на руки: ${netSalary} рублей.`);

Решение задачи на JavaScript:

javascript

Copy code

let age = parseInt(prompt("Введите возраст Антона:"));

let lastDigit = age % 10;

if (lastDigit == 1) {

var ageText = age + " год";

} else if (lastDigit >= 2 && lastDigit <= 4) {

var ageText = age + " года";

} else {

var ageText = age + " лет";

}

alert(`Антон: ${ageText}`); */

/*Ответ:

Объяснение:

 1)

const salary = prompt("Введите размер зарплаты:");

let tax;

if (salary <= 6000) {

 tax = 0.1;

} else if (salary <= 10000) {

 tax = 0.15;

} else if (salary <= 15000) {

 tax = 0.175;

} else {

 tax = 0.2;

}

const taxAmount = salary * tax;

const netSalary = salary - taxAmount;

console.log(`Размер налога: ${taxAmount}`);

console.log(`Размер зарплаты на руки: ${netSalary}`);

2)

const age = 24; // задаем возраст для примера

const remainder = age % 10;

let message;

if (remainder === 1) {

 message = `Антон: ${age} год`;

} else if (remainder >= 2 && remainder <= 4) {

 message = `Антон: ${age} года`;

} else {

 message = `Антон: ${age} лет`;

}

console.log(message); */