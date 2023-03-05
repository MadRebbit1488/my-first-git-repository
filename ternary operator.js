// /* /Приклад тернарного оператора
//  Тернарний оператор це вираз(expresion ) в той час як if...else ствердження(statement)
//  Те що написано після знаку ? буде присвоєнно змінній */
10 > 0 ? console.log('Більше 0') : console.log('Не більше 0');

let str = 10 > 0 ? 'Більше 0' : 'Не більше 0';
console.log(str);

// Той же запис в if
if(10 > 0 ){
  console.log('Більше 0');
} else {
   console.log('Не більше 0');
}



//Прикад задачі в if statement
// В нас є прайс
let bmwX3Price = 100000;
let fordFocusPrice = 10000;
let budget = 20000;

// Нам потрібно вивести, що ми можемо купити
let message;

if(budget > bmwX3Price ){
  message = 'BMW';
} else {
   message = 'Велосипед';
}

// //  Те ж саме але коротший запис за допомогою ?
console.log(`Я хочю купити ${budget > bmwX3Price ? 'BMW':'Велосипед'}`);

// /* Трохи поскладніше
// Тернарний оператор може бути успадкований , тобто мати один в середині іншого */

//if statement
if(budget > bmwX3Price ){
  message = 'BMW';
} else if (budget > fordFocusPrice){
  message = 'Ford'; 
} else {
   message = 'Велосипед';
}

//Тернарний оператор
 message = budget > bmwX3Price ? 'BMW': budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочю купити ${message}`);

// /* Таку конструкцію читати складніше , так що по можливості в даних випадках кращє використовувати switch або if...else statement
//  */

// // ПРАКТИЧНЕ
// /* Методом prompt отримайте відповідь користувача на питання "Скільки буде +7 або -15". Якщо відповіль правильна виведіть в консоль "Успіх", якщо ні -"Ви робот !", а якщо він введе "Я не робот", то також "Успіх". 
//  */

 message = prompt('Скільки буде 7+15?', '');

 //Рішення if statement
if(message==='22'){
  message="Успіх";
}else if(message==="Я не робот"){
  message="Успіх";
}else{
  message="Ви робот !";
}
console.log(message);

//switch statement
switch(true) {
  case message==='22' :
    console.log("Успіх");
    break;
  case message==='Я не робот' : 
    console.log("Успіх");
    break;
  default:
    console.log("Ви робот !");   
}

//Рішення тернарним оператором
console.log(`${message==='22' ? 'Успіх' : message==='Я не робот' ? 'Успіх' : 'Ви робот' }`);

