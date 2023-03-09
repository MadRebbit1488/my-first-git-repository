// /* Оголошення функції
// Дана ф-ція нічього не приймає в якості аргумента і нічього не повертає */
// function logName (){
//   console.log(`Моє імя Ann`);
// }
// logName(); //Моє імя Ann
// /* Щоб ф-ція павернула значення її потрібно викликати
// Якщо у ф-ції є аргумент, його передаємо в дужках
// Виклик відпрацьовує те що є в тілі ф-ції */



// function logName (name, surname){
//   console.log(`Моє імя ${name} ${surname}`);
// }
// logName('Анна', 'Тищенко');

// // Тепер замість ф-ції яка нічього не повертає, розрахуємо депозит
// function coutDepositSum(depositInUSD, month, rate){
//   let sum = depositInUSD * (1+ rate / 12) ** month;  //розраховуємо суму
//   return sum; //Повертаємо суму 
//   return depositInUSD * (1+ rate / 12) ** month;
// } 
// //Розрахуємо як працює ф-ція на прикладі
// let example1 = coutDepositSum(1000,24, 0.12);
// console.log(example1);

// console.log(coutDepositSum(1000,48, 0.10));

// //
// userName = 'Ann';
// function showMessage (){
//   let message = 'Привіт ' + userName;
//   alert(message);
// }
// showMessage();

// // АНОНІМНІ Ф-ЦІЇ
// //Приклад стандартної ф-ції
// function powerOfTwo(num){
//   return num * num;
// }
// console.log(powerOfTwo(5));

// //Тепер ф-ція анонімна, тому що в неї немає назви. Вона має бути покладенна в змінну щоб її можна було використовувати
// let poft = function (num){
//   return num * num;
// }
// // poft тепер константа ф-ції яку ми викликаємо
// console.log(poft(6));
// /* Ф-ціями можна оперувати як змінними:класти ф-цію як аргумент іншої ф-ції; із ф-ції повертати іншу ф-цію

// Відміність в тому, що звичайну ф-цію можна викликати, а потім оголосити і це не буде помилкою. З змінними все інакше, їх треба спочатку оголошувати, а потім викликати */


// // СТРІЛКОВІ Ф-ЦІЇ

// /* Пропускаємо ключове слова function , return i {} . Якщо аргумент 1 то лапки можна пропустити
// Те що написано післія стрілки і являється поверненням ф-ції
// Аргумент => те що повертає дана ф-ція  */
// let poft = num => num * num;
// console.log(poft(6));

// //
// function powerOfTwo(num){
//   console.log(num);
//   return num * num;
// }
// console.log(poft(5));

// //Якщо потрібно розширити ф-цію і внести якісь розрахунки , стрілкова ф-ція змінює свій запис
// let poft = num => {
//   console.log(num);
//   return num * num;
// }
// console.log(poft(6)); 

//ЗАВДАННЯ
//Переписуємо ф-цію в стрілкову
// function toPower(num, power){
//   let res = num ** power;
//   return res;
// }
// console.log(toPower(2, 3));

//
// let toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));
