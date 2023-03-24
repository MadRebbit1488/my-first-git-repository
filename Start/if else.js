// Задача:
/* Вася поклав 12000$ на вклад 7% річних з капіталом 1 раз  в місяць.
Потрібно вивести в консоль, чи зможе він купити будинок за 13500$ через 2 роки після зняття внесення. І залишок від покупки  */

// Рішення:
let deposite = 12000;
let rate = 0.07;
let depositeLength = 24;
let hourseCost = 13500;

let res = deposite * (1+rate/12)**24;
if(res > hourseCost){
  console.log(`Ми накопичили ${res}.Можемо купити.Залишок ${res-hourseCost}`);
}else{
  console.log(`Ми накопичили ${res}.Купити не можемо`);
}

//Задачі
//Строга рівність
let secretNumber = '7';
if(Number(secretNumber) === 7){
  console.log('Вгадав !!!');
}else{
  console.log('Не вгадав');
}

//Нестрога рівність
if(secretNumber == 7){
  console.log('Вгадав !!!');
}else{
  console.log('Не вгадав');
}

//
let q = Number(prompt('Введтіть число'));
if(q === 7){
  console.log('Вгадав !!!');
}else{
  console.log('Не вгадав');
} 

//
let role = 'manager';

if(role === 'manager'){
  console.log('Менеджер');
}else if(role === 'admin') {
  console.log('Адмін');
}else if(role === 'seo') {
  console.log('СЕО');
}else{
  console.log('Ми тебе не знаємо');
}

// switch statement заміняє калька if
// B switch важливо === рівність, інакше кейс не спрацює 

switch (role) {
    case 'manager':  //role === 'manager'
      console.log('Менеджер');
      break;
    case 'admin':  //role === 'admin'
      console.log('Адмін');
      break;
    case 'seo':  //role === 'seo'
      console.log('СЕО');
      break;
    default:
      console.log('Ми тебе не знаємо');
}

//
switch (role) {
    case 'manager':  
    case 'admin':  
      console.log('Не керівник');
      break;
    case 'seo': 
      console.log('Керівник');
      break;
    default:
      console.log('Ми тебе не знаємо');
}

//
let num = 1;

switch (true) {
    case num > 0:   //true === num > 0
      console.log('Позитивний');
      break;
    case num < 0:
      console.log('Негативний');
      break;  
    default:
      console.log('Нуль');

}



//
// Напишіть програму яка приймає два цілих числа і відображає найбільше
let num1, num2;
num1 = Number(prompt('Введіть перше ціле число', "0"));
num2 = Number(prompt('Введіть друге ціле число', "0"));

if(num1 > num2){
  console.log("Із чисел " + num1 + " і " + num2 + " більше це " + num1 + ".");
} else if(num2 > num1){
  console.log("Із чисел " + num1 + " і " + num2 + " більше це " + num2 + ".");
}else{
  console.log("Числа " + num1 + " і " + num2 + " рівні."); 
}
//Оттакий розв'язок мені зрозумілий


// num1 = window.prompt('Введіть перше ціле число', "0");
// num2 = window.prompt('Введіть друге ціле число', "0");

// if(parseInt(num1, 10) > parseInt(num2, 10)){
//   console.log("Із чисел" + num1 + "і" + num2 + "більше це" + num1 + ".");
// }else if(parseInt(num2, 10) > parseInt(num1, 10)){
//   document.writeIn("Із чисел" + num1 + " і " + num2 + "більше це" + num2 + ".");
// }else{
//    document.writeIn("Числа" + num1 + " і " + num2 + "рівні.");
// }
//Хз як це працює
