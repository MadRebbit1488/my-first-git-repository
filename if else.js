// // Задача:
// // Вася поклав 12000$ на вклад 7% річних з капіталом 1 раз  в місяць.
// // Потрібно вивести в консоль, чи зможе він купити будинок за 13500$ через 2 роки після зняття внесення. І залишок від покупки 

// // Рішення:
// let deposite = 12000;
// let rate = 0.07;
// let depositeLength = 24;
// let hourseCost = 13500;

// let res = deposite * (1+rate/12)**24;
// if(res > hourseCost){
//   console.log(`Ми накопичили ${res}.Можемо купити.Залишок ${res-hourseCost}`);
// }else{
//   console.log(`Ми накопичили ${res}.Купити не можемо`);
// }


// let secretNumber = '7';
// if(Number(secretNumber) === 7){
//   console.log('Вгадав !!!');
// }else{
//   console.log('Не вгадав');
// }

// if(secretNumber == 7){
//   console.log('Вгадав !!!');
// }else{
//   console.log('Не вгадав');
// }

// let q = Number(prompt('Введтіть число'));
// if(q === 7){
//   console.log('Вгадав !!!');
// }else{
//   console.log('Не вгадав');
// } 


// let role = 'manager';

// if(role === 'manager'){
//   console.log('Менеджер');
// }else if(role === 'admin') {
//   console.log('Адмін');
// }else if(role === 'seo') {
//   console.log('СЕО');
// }else{
//   console.log('Ми тебе не знаємо');
// }

// // switch statement заміняє калька if
// // B switch важливо === рівність, інакше кейс не спрацює 

// switch (role) {
//     case 'manager':  //role === 'manager'
//       console.log('Менеджер');
//       break;
//     case 'admin':  //role === 'admin'
//       console.log('Адмін');
//       break;
//     case 'seo':  //role === 'seo'
//       console.log('СЕО');
//       break;
//     default:
//       console.log('Ми тебе не знаємо');
// }


// switch (role) {
//     case 'manager':  
//     case 'admin':  
//       console.log('Не керівник');
//       break;
//     case 'seo': 
//       console.log('Керівник');
//       break;
//     default:
//       console.log('Ми тебе не знаємо');
// }

// let num = 1;

// switch (true) {
//     case num > 0:   //true === num > 0
//       console.log('Позитивний');
//       break;
//     case num < 0:
//       console.log('Негативний');
//       break;  
//     default:
//       console.log('Нуль');

// }