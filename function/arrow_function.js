// СТРІЛКОВІ Ф-ЦІЇ

/* Пропускаємо ключове слова function , return i {} . Якщо аргумент 1 то лапки можна пропустити
Те що написано післія стрілки і являється поверненням ф-ції
Аргумент => те що повертає дана ф-ція  */
let poft = num => num * num;
console.log(poft(6));

//
function powerOfTwo(num){
  console.log(num);
  return num * num;
}
console.log(poft(5));

//Якщо потрібно розширити ф-цію і внести якісь розрахунки , стрілкова ф-ція змінює свій запис
poft = num => {
  console.log(num);
  return num * num;
}
console.log(poft(6)); 