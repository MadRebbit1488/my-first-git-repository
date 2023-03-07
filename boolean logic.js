// operator or|| (АБО)
/* Щоб весь вираз був правдивим потрібно, щоб хочаб одна умова була true
Повертає перше істинне значення
Для нього false,0,'',null чи undefined однаково хибні значення */


//  operator and && (І)
/* & знак аперсанту
Якщо всі умови true виведе true 
Якщо хочя б одна умова false, а інші true , приведе весь вираз до false */


// оператор Not ! (Не) 
/*  Спочатку приводить аргумент до логічного типу, потім інвертує протилежне значення 
Має високий пріорітет
true -> false
false -> true 
Подвійне !! використовується для перетворення значення на булевий тип:
alert(!!"Не порожній рядок");  //true
alert(!!null);  //false
*/

//Оператор нульового злиття ??
/* Повертає перщий аргумент якщо він не null чи undefined, інакше другий
Повертає перше визначене значення 
Сприймає 0 як вірне значення якщо він не прирівнюється до null чи undefined*/


//ПРИКЛАД
//В нас є користувач який хочє зайти в систему і записати файл. В нас є його права і параметри
let isAdmin = true;
let canWrite = true;

//Виведемо в консоль можливість користувача відредагувати системний файл, для якого потрібні права користувача і права на запис

console.log(`Системний файл ${isAdmin && canWrite}`);
//Щоб записатил звичайний файл потрібно бути або Admin або мати право доступу
console.log(`Звичайний файл ${isAdmin || canWrite}`);
//Інвертуємо права користувача
console.log(`Інвертуємо права адміна ${!isAdmin}`);

//Ускладним задачу. У нас є файл який вже редактується
let isEdited = true;
let isSuperAdmin = true;
//Виводимо в консоль чи ми можемо редагувати файл з рудагування
console.log(`Системний файл з редагування ${isAdmin && canWrite &&(!isEdited || isSuperAdmin)}`);

//Інші типи значень
//  ||
console.log('Вася' || 'Олег'); //Вася
//Якщо це не булеве значення || завжди виводить перший операнд якщо він рівний true
console.log(false || 'Олег'); //Олег
console.log('Вася' || false); //Вася

//  &&
console.log('Вася' && 'Олег'); //Олег
//Якщо це не булеве значення && завжди виводить останній операнд якщо інші  рівні true
console.log(false && 'Олег'); //false
console.log('Вася' && false); //false

//ПРИКЛАД
let a;
const user = a || 'Петя';
console.log(user);
//Якщо 'a' не присвоєнно значення, то виведеться Петя. Якщо 'а' має значення, то воно виведеться якщо буде рівне true

/* Дані оператори використовуються не тільки для перевірки умов, а можуть самі  по собі повертати одне із значень якщо це необхідно */

//ПРИКЛАД
// Ми можемо повернути назву файл тільки якщо користувач адмін
let fileName = isAdmin && 'file.mp4';
console.log(fileName);


// Оператор нульового злиття ??
//Порівняння з ||
 let userName = 'Вася';
 console.log(userName || 'Default Username'); //Вася

 userName = null;
 console.log(userName || 'Default Username'); //Default Username

 userName = undefined;
 console.log(userName || 'Default Username'); //Default Username

 userName = '';
 console.log(userName || 'Default Username'); //Default Username

userName = 0;
console.log(userName || 'Default Username'); //Default Username


 //??
 userName = 'Вася';
 console.log(userName ?? 'Default Username'); //Вася

 userName = null;
console.log(userName ?? 'Default Username'); //Default Username

 userName = undefined;
console.log(userName ?? 'Default Username'); //Default Username

 userName = 0;
console.log(userName ?? 'Default Username'); //0

userName = '';
console.log(userName ?? 'Default Username'); //Виконвуватись не буде , так як значення не задано


//ПРИКЛАД
a =5;
b =4;
result = (a!==null && a!==undefined ? a:b);
console.log(result); //5

//
let height = 0;
console.log(height || 100); //100
console.log(height ?? 100); //0

//Використовувати в дужках в поєднання з || чи && , так як має такийже пріорітет 
let heigh;
let width;
console.log((heigh ?? 100) * (width ?? 50)); // 5000

//ПРАКТИКА
//Задача
/* Користувач хоче купити гру в магазині. Він може це зробити якщо:
-Його баланс більше 1000(balance) або число бонусів більше 100 (bonusBalance)
-Він не забанений (isBanned)
-Гра не куплена (isExist)
-Гра в продажу (isSelling)
Потрібно написати умову для покупки і вивести в консоль результат */

let balance = 1200;
let bonusBalance = 90;
let isBanned = false;
let isExist = false;
let isSelling = true;

let canBuy = (balance > 1000 || bonusBalance> 100)
&& !isBanned
&& !isExist
&& isSelling;
console.log(`Можу купити гру: ${canBuy ? 'Так' : 'Ні'}`);



