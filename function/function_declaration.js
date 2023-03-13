// /* Оголошення функції
// Дана ф-ція нічього не приймає в якості аргумента і нічього не повертає */
// function logName (){
//   console.log(`Моє імя Ann`);
// }
// logName(); //Моє імя Ann
// /* Щоб ф-ція павернула значення її потрібно викликати

//
// function showMessage(){
//   message = 'Повідомлення';
// }
// showMessage();
// console.log(message);

//
// let message = 1 ;
// function showMessage(){
//   let message = 2;
//   console.log(message);
// }
// console.log(message);
// showMessage();


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

//
// Приклад використання глобальної змінної
// let globalVar = 'Глобальна змінна';
// function getSumm(){
//   let numOne, numTwo;
  
//   function getNumOne(){
//     numOne = 1;
//     console.log(globalVar);
//   }
  
//   function getNumTwo(){
//     numTwo = 2;
//   }

//   getNumOne();
//   getNumTwo();

//   let numSumm = numOne + numTwo;
//   console.log(globalVar);

// }
// console.log(globalVar);
// getSumm();

// //
// userName = 'Ann';
// function showMessage (){
//   let message = 'Привіт ' + userName;
//   alert(message);
// }
// showMessage();

// //Властивості аргументів за замовчуванням
//
//Параметри в ф-цію передаються під час її виклику. Вони передаються в локальні змінні, в даному випадку це numOnе = 46 і numTwo = 59
// function calcSumm(numOne, numTwo){
//   console.log(`Змінна numOne:${numOne}`);
//   console.log(`Змінна numTwo:${numTwo}`);

//   let numSumm = numOne + numTwo;

//   console.log(`Сума: ${numSumm}`);

// }
// calcSumm(46, 59);
//
// //Якщо при виклику ф-ції аргумент не вказаний, то його значення стає undefined
// //Якщо power не задати значення , то воно за замовчуванням буде 2, або будь яке інше задане значення, наприклад ф-ція
// //Якщо є дефолтне значення за замовчуванням, то його потрібно ставити в кінці
// function toPower(num, power = 2){
//   // let power = power ?? 2; //Можна зробити щє ось так, але це буде довший і менш зручний запис
//   let res = num ** power;
//   return res;
// }
// console.log(toPower(2));




// //УМОВИ В Ф-ЦІЯХ
//
//Ф-ції вміють повертати результат своєї роботи, для цього використовується директива return
//Ф-ція calcSumm виконує операцію складання двох аргументів і повертає отриманий результат
// function calcSumm(numOne, numTwo){
//   let numSumm = numOne + numTwo;
//   //Повернення
//   return numSumm;
//   //Долі код не виконується
// } 
//Результат ми кладемо у змінну присвоївши їй ф-цію з параметрами
// let funcRezult = calcSumm(1, 2);
// console.log(`Сумма: ${funcRezult}`);  

//
// //Перевірка віку користувача при вході на сайт
// function canAccessWebsite(age){
//   if (age < 18){
//     return false;
//   } else {
//     return true;
//   }
// }
// //В тілі ф-ції може бути декілька return в залежності від умови. Якщо він без знасення це призведе до негайного виходу з ф-ції

// //Код можна зробити коротшим прибравши лишній else, умова всеодно буде працювати
// function canAccessWebsite(age){
//   if (age < 18){
//     return false;
//   }  
//     return true;
// }
// console.log(canAccessWebsite(18));

// //Виклик оператора return зупиняє подальше виконання блоку коду якщо умова істинна, якщо ні ф-ція переходить до виконання наступної умови



// //Ф-ЦІЯ В Ф-ЦІЇ(callback)
// //У нас є стартап по доставці, який дає змогу людям обмінюватись подарунками. Ціна даставки залежить від ваги подарунка і від дистанції між двома користувачами. Потрібно розрахувати скільки в них піде на це грошей.
// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) { //Розраховує вартість  по вазі
//   return present * KG_IN_USD;
// }
// function calculateKM(distance) { //Розраховує вартість  по відстані
//   return distance * KM_IN_USD;
// }

// //Ф-ція яка рахує загальний кост доставки і ділить на 2. Будемо вважати що present це його вага
// function getExchagePrice (present1, present2, distance) {
//   // let price1 = present1 * KG_IN_USD;
//   // let price2 = present2 * KG_IN_USD;
//   // let distancePrice = distance * KM_IN_USD;
//   // return price1 + price2 + distancePrice; ||Розрахунок без використання ф-цій
//   let price1 = calculateW(present1);
//   let price2 = calculateW(present2);
//   let distancePrice = calculateKM(distance); 
//   return price1 + price2 + distancePrice; 
// }

// console.log(getExchagePrice(1, 2, 10));
// // В нас є ф-ція getExchagePrice . 1 підставляється в present1, потім ця одиниця передається в ф-цію calculateW і умножається на KG_IN_USD, ф-ція calculateW повертається і кладе значення в price1.Теж саме відбувається з present2 і distance і ми отримуємо фінальний результат.
// // Якщо використовувати складніші розрахунки в ф-ціях, даний метод буде досить зручним, так як не потрібно повторювати одні і тіж розрахунки декілька разів. Потрібно лиш повторно викликати ф-цію.
// // Ф-ція може бути не тільки викликаною , а й викликати в собі додаткові ф-ції

//
// function calcSumm(numOne, numTwo, more, less){
//   let numSumm = numOne + numTwo;

//   if(numSumm > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMoreMessage() {  //Ф-ція передасться як параметр аргумента при виклику ф-ції calcSumm
//   console.log('Більше ніж 3');
// }

// function showLessMessage() {  //Ф-ція передасться як параметр аргумента при виклику ф-ції calcSumm
//   console.log('Менше ніж 3');
// }
// calcSumm(1, 5, showMoreMessage, showLessMessage); //Всі ці параметри передаються в локальні змінні:numOne, numTwo, more, less.

//
// function getSumm(numOne, numTwo){
//   let numSumm = calcSumm(numOne, numTwo);
//   console.log(numSumm);
// }
// function calcSumm(numOne, numTwo){
//   return numOne + numTwo;
// }
// getSumm(4, 6);
/* Ми оголошуємо ф-цію getSumm з двома аргументами. В тілі ф-ції виконується операція присвоєння ф-ції calcSumm змінній numSumm. Яка виводить в консоль результат даної ф-ції.
Далі оголошується ф-ція calcSumm яка виконує операцію дадавання значень двох аргументів і присвоює це значення змінній numSumm в тілі ф-ції getSumm. Після чього проводиться виклик ф-ції getSumm з вказаними параметрами*/

//
//Рекурсія - це коли ф-ція викликає саму себе
// без рекурсії
// function calcSumm(numOne, numTwo){
//   let result = 1;
//   //Умножуємо result на numOne, numTwo в циклі
//   for(let i = 0; i < numTwo; i ++){
//     result *= numOne;
//   }
//   return result;
// }
// console.log(calcSumm(2, 3));

//Той же приклад, але з рекурсією
//Тут ф-ція calcSumm в певний момент викликає сама себе, передаючи трохи інші параметри. Кількість таких вкладених викликів називається глибиною рекурсії і контролюється движком JS
// function calcSumm(numOne, numTwo){
//   if(numTwo === 1){
//     return numOne;
//   } else {
//     return numOne * calcSumm(numOne, numTwo -1);
//   }
// }
// console.log(calcSumm(2, 3)); 
