//Порівняння forEach i for
/* forEach - повнястю проходиться по масиву елементів, мінус в тому що ітерацію не можна зупинити і елементи ітеруються докінця, можуть виникнути проблеми з асинхроністю
for - проходиться по всіх елементах масиву, але можливо зупинити ітерацію, або прорустити шматок коду. Немає проблем з асинхроністю. Зустрічається частіше за forEach 
 */

//Задача. Потрібно вивести бали за кожен раунд гри
const score = [5, 10, 0, 15];

//Як це зробити методом for
for (const el of score) {
  console.log('Раунд: ' + el); //Раунд: 5, Раунд: 10 і т.д
}
/* Додатково потрібно щє вивести номер раунду і для цього потрібно не тільки ітеруватись по елементам, але і знати їх індекс. Для цього можна використати метод for..in або щє одну фічю метод enties():
Метод enties() - це метод масиву який повертає масив, де першим елементом являється індекс а другим сам елемент */

for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`); //Раунд 1: 5  => Раунд 4: 15
}



//ітерація методом forEach
//Більш короткий запис, де не потрібно класти змінну в ф-цію, а просто її оголосити і відразу використовувати
score.forEach((scoreEl, i) => {
  console.log(`Раунд ${i + 1}: ${scoreEl}`); //Раунд 1: 5  => Раунд 4: 15
});
/* score.forEach для кожного елементу масиву виконує ф-цію
(5, 0) => { виконується тіло ф-ції}
Воно виконалось, переходимо до другого елементу
(10, 1) => { виконується тіло ф-ції}
(0, 2) => { виконується тіло ф-ції}
(15, 3) => { виконується тіло ф-ції}
Таким чином виконується callback ф-ція для кожного із елементів
Відмінністю від for, є те що ітерацію не можна зупинити, тому ітеруються всі елементи.
Тому forEach зручно виконувати коли непотрібно нічього переривати

Приклад для того щоб обозначити ф-цію вищого порядку
const iterator = (el) => {
  console.log(`Раунд: ${el}`); //Раунд: 5 => Раунд: 15
}
score.forEach(iterator); */

__________________________________________________________________________
//Ітерація методом MAP
/* Даний метод не просто ітерується по масиву, а й поверає новий масив р-татів */

//Приклад: Список транзакцій які приходять від банку
const transactionInUSD = [10, -7, 50, -10, 100];
//Порахуємо рух грошей в гривнях по кожній транзакції

//Як би це було із циклом
const transactionInUAN = [];
for (const transaction of transactionInUSD ) {
  transactionInUAN.push(transaction * 38.5);
}
console.log(transactionInUAN); // [385, -269.5, 1925, -385, 3850]
console.log(transactionInUSD); //[10, -7, 50, -10, 100]

//Методом map
const transactionInUAN2 = transactionInUSD
.map((transaction) => transaction * 38.5);

console.log(transactionInUAN2); // [385, -269.5, 1925, -385, 3850]
console.log(transactionInUSD);
__________________________________________________________________________
//Метод FILTER
//Ітерується по масиву повертаючи true(залишає елементи якщо вони задовольняють умову) або false (видаляє елементи) , не модифікуючи вихідний масив. Повертає з вихідного масиву менший масив р-татів 
//У нас є рух коштів на банківському рахунку
const operations =[100, -20, 7, -20, 50];
//Показуємо тільки позитивні операції

//Як би це було в циклі
const positiveOperations = [];
for (const operation of operations) {
  if (operation > 0) {
    positiveOperations.push(operation);
  }
}
//console.log(positiveOperations); // [100, 7, 50]

//методом filter
const positiveOperations2 = operations.filter((operation) => operation > 0);
//console.log(positiveOperations2); //// [100, 7, 50]
//Якщо потрібно примінити методи масивів один за одним: взяти позитивні операції, а потім перевести їх в гривні, це можна зробити за допомогою chaing метода

const positiveUSDOperations = operations
  .filter(operation => {
   return operation > 0
  })
  .map(operation => operation * 38.5);

console.log(positiveUSDOperations); //[3850, 269.5, 1925]

__________________________________________________________________________
// Метод REDUCE
/* Зменшує масив до конкретного значення пройшрвшись по всіх елементах масиву. Дає змогу звернути дані до одного конкретного значення: середнього, максимального і т.д */

//Маємо послідовнясть чисел і їх потрібно звернути в одне число
//Виводимо фінальний баланс. Спочатку було 0 потіб 100, -20, 7, -30, 50
const operations1 = [100, -20, 7, -30, 50];

//Приклад з циклом
let balance = 0;
for (const operation of operations1) {
  //Потрібно для кожної операції модифікувати баланс
  balance += operation;
}
console.log(balance); //107

//Метод reduce
const finalBalance = operations1
.reduce((acc, operation, i) => {
  console.log(`Ітерація ${i +1}: acc = ${acc}, operation = ${operation}`);
  return acc += operation
}, 0);
console.log(finalBalance); // 107

/* 
Ітерація 1: acc = 0, operation = 100
Ітерація 2: acc = 100, operation = -20
Ітерація 3: acc = 80, operation = 7 
Ітерація 4: acc = 87, operation = -30
Ітерація 5: acc = 57, operation = 50  */

//Пошук мінімального елемента
let minElement = operations1
.reduce((acc, operation, i) => {
   console.log(`Ітерація ${i +1}: acc = ${acc}, operation = ${operation}`);
  if (operation > acc) {
    return acc;
  } else {
    return operation;
  }
}, 0);
console.log(minElement); //-30

/* 
Ітерація 1: acc = 0, operation = 100
Ітерація 2: acc = 0, operation = -20
Ітерація 3: acc = -20, operation = 7
Ітерація 4: acc = -20, operation = -30
Ітерація 5: acc = -30, operation = 50 */
__________________________________________________________________________
//Методи FIND і findINDEX
/* Потрібні щоб знайти щось в масиві, повертає конкретний елемент (find) або його індекс (findIndex) */

const arr = [2, 4, 4, 10, 20];
//Знаходимо перший елемент який >5

//Цикл
//element greater than five
let elGT5;
for (const el of arr) {
  if (el > 5) { //Якщо елемент > 5, він присвоюється elGT5
    elGT5 = el;
    break; // без нього буде вивід 20
  } 
}
console.log(elGT5); //10

//Точно также працює метод find
elGT5 = arr.find(el => el > 5);
const elGT5Index = arr.findIndex (el => el > 5);
console.log(elGT5); //10
console.log(elGT5Index); //3
__________________________________________________________________________
//SOME
// Написати ф-цію яка повертає true, якщо значення є, і false, якщо нема 
const arrSome = [2, 4, 4, 10];
//element який шукаємо
function some (array, element  ) {
  const res = array.find(el => el === element);
  return res == undefined ? false : true;
}

console.log(some(arrSome, 2)); //true
console.log(arrSome.some(el => el === 2)); // true
__________________________________________________________________________
//Методи FLAT і flatMAP
const prices = [[2, 4], [3, 4], [10, 20]];
//flat - робить масив пласким, тобто із вкладених масивів витягує елементи в один плаский масив. Зручно коли потрібно знизити вкладеність масиву, не модифікуючи вихідний масив
const res = prices.flat();
// console.log(res); // [2, 4, 3, 4, 10, 20]
// console.log(prices); // [Array(2), Array(2), Array(2)]

//
const prices1 = [[2, 4], [3, 4], [10, [20, 50]]];
const res1 = prices1.flat();
console.log(res1); //[2, 4, 3, 4, 10, Array(2)]

//flat приймає значення глибини, за замовчуванням воно 1
const prices2 = [[2, 4], [3, 4], [10, [20, 50]]];
const res2 = prices2.flat(2); // Якщо передати більше значення, буде робити масив щє пласкішим
console.log(res2); //[2, 4, 3, 4, 10, 20, 50]
___
//flatMap
const prices3 = [[2, 4], [3, 4], [10, [20, 50]]];
const res3 = prices3.flatMap(el => el.concat([1])); //Спочатку відбувається перетворення (map), а потім ми робимо його плоским (flat)
console.log(res3); //[2, 4, 1, 3, 4, 1, 10, Array(2), 1]

//flatMap - в деяких випадках можна замінити конструкцією .map().flat()
const prices4 = [[2, 4], [3, 4], [10, [20, 50]]];

const res4 = prices4.map(el => el.concat([1])).flat(2);
console.log(res4);//[2, 4, 1, 3, 4, 1, 10, 20, 50, 1]

__________________________________________________________________________
//Метод SORT
// < 0 - a, b - зберігає порядок 
// > 0 - b, a - змінюємо порядок  
const operationss = [100, -300, -100, 50, 480];
operationss.sort((a, b) => a - b);
//console.log(operations); //[-300, -100, 50, 100, 480]
//По зменшенню
operationss.sort((a, b) => b - a);
//console.log(operations); //[480, 100, 50, -100, -300]

//Або методом if. Збільшення
const operationss1 = [100, -300, -100, 50, 480];
operationss1.sort((a, b) => {
  if(a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
console.log(operationss1); // [-300, -100, 50, 100, 480]
//Зменшення
operationss1.sort((a, b) => {
  if(a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(operationss1); //[480, 100, 50, -100, -300]
__________________________________________________________________________

let arr = [1, 2];
let agg = 0;
arr.forEach((el, i) => agg += el + i );
console.log(agg); //4

//
 arr = [1, 2];
let res = arr.map(e => e * 2).filter(e => e > 3);
console.log(res); //[4]

// Чьому помилка ?
let arr = [1, 2];
let res = arr.reduce((acc, el) => acc += el).map(e => e * 2)
console.log(res);// Помилка

//
let arr = [1, 2, 3];
let res = arr.map(e => e * 2).find(e => e < 5);
console.log(res); //2

//
// let arr = [1, 2, 3];
// let res = arr.map(e => [e * 2]);
// //Виведеться масив з підмасивами чисел
// console.log(res); // [[2], [4], [6]];

let arr = [1, 2, 3];
let res = arr.map(e => [e * 2]).flat().reduce((acc, el) => acc -= el, 0)
console.log(res); // -12

//
let arr = [1, 2, 10, 15];
arr.sort()
console.log(arr); //[1, 10, 15, 2]
