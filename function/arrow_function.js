// СТРІЛКОВІ Ф-ЦІЇ

/* Пропускаємо ключове слова function , return i {} . Якщо аргумент 1 то лапки можна пропустити
Те що написано післія стрілки і являється поверненням ф-ції
СИНТАКСИС:
let ім'я змінної =(параметр, ..., параметр) = > вираз */

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

//Однорядкова стрілкова ф-ція
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привіт', 'Пижмо'));

//Багаторядкова стрілкова ф-ція
 getMessage = (text, name) =>{
  let message =  text + ', ' + name + '!';
  return message;
}
console.log(getMessage('Привіт', 'Пижмо'));


let age = prompt("Скільки вам років?");

let welcome = (age < 18) ?
  () => console.log ('Привіт!') :
  () => console.log ('Доброго дня!');
  
welcome ();

//Перепишіть з використанням стрілкової ф-ції
function ask(question, yes, no) {
  if(confirm(question)) yes ()
  else no ();
}

ask (
  "Ви згодні?",
  function () { console.log("Ви погодились"); },
  function () { console.log("Ви відмінили виконання"); }
);
//
function ask(question, yes, no) {
  if(confirm(question)) yes ()
  else no ();
}

ask(
  "Ви згодні?",
  () => console.log("Ви погодились") ,
  () => console.log("Ви відмінили виконання")
);
ask();











