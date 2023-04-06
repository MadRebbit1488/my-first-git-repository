// DRY(Don't repeat yourself - не повторюйся)
/* Масив - це впорядкована структурована колекція даних, підвид об'єктів відкладених в пам'яті програми. Вони не представляють собою окремий тип даних , масив це - об'єкт.
[] - використовуються, щоб отримати доступ до властивості arr[] - по суті це звичайний синтаксис доступу до ключа, як obj[key], де в ролі obj => arr, а ключ => числовий індекс */

// Масив представляє собою окремий клас структур даних
//Структури даних - це колекції даних створені для того, щоб більш зручно маніпулювати даними які в ній знаходяться
//Масиви найчастіше зустрічаються при написанні коду
// Робота з масивами включає: доступ до даних, перегляд , зміни, перевірка на певні умови


//У нас є раль користувача в компанії
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

//Є масив рядків і тепер ми можемо працювати з ролями як з однією змінною яка містить набір однотипних значеннь 
const roles = ['admin', 'user', 'superuser'];
console.log(roles);
console.log(roles[0]); // [] по індексу показує елементи масиву
console.log(roles.length); // метод length показує довжину масиву
console.log(roles[roles.length -1]); //щоб отримати останній елемент масиву потрібно від довжини відняти 1, тому що індекс починається з 0

console.log(roles.at(0)); //Більш новіший спосіб отримання довжини масиву
//Перевага at в компактності 
console.log(roles.at(-1)); // Ось так можна визначити останній елемент масиву

//Масив зберігає різні типи даних
let arr = ['Яблуко', {name:'Ann'}, true, function(){console.log('Hi');}];
console.log(arr); // Array(4) [ "Яблуко", {…}, true, arr() ]
console.log(arr[3]()); //Викликає тіло ф-ції
console.log(arr[1].name); //Викликає ключ/властивість об'єкта


// В масивах можна використовувати тільки розрахункові вирази
// Вік користувача
const usersAge = [2040 - 2022, 20 - '6'];
console.log(usersAge);

// Не можна використовувати ствердження типу if...else, але можна використовувати тернарний оператор для розрахунків
const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(usersAge);
___________________________________________________________________________

// АЛЬТЕРНАТИВНИЙ СПОСІБ СТВОРЕННЯ МАСИВУ
// NEW ARRAY ()
const userNames = new Array('1', '3', '2');
console.log(userNames);

function square (el){
  return el * el;
}
// console.log(square(5)); //25
console.log(square([1, 2, 3])); // NaN, тому що проводиться операція з масивом, а не з конкретним елементом

function square (el){
  return el + el;
}
console.log(square([1, 2, 3])); //  1,2,31,2,3 (відбудеться конкатенація значень)
//Щоб працювати з кожним елементом по окремості потрібні методи перебору або щоб працювати із цілим масивом знадобляться вбудовані методи

_____________
//Якщо викликається з 1 аргументом, який представляє собою число, він створює масив без елемента але з заданою довжиною
let arr14 = new Array (2);
console.log(arr14[0]); // undefined , немає елементів
console.log(arr14.length); //2



______________________________________________________
//УПРАВЛІННЯ ЕЛЕМЕНТАМИ МАСИВУ
//Є масив користувачів
const users = ['1', '2', '3'];
console.log(users);
//Ротрібно 1 елемент замінити на інший
users[2] = '4';
console.log(users);
// users = ['1', '2', '4']; //Масив константа, йому не можна присвоїти нове значення перезаписавши всю змінну ,але можна модифікувати внутрішні елементи об'єктів
//Можна додавати елементи в масив
users[3] = '5';
console.log(users);

______________________________________________________
//Є масив користувачів
const usersArr = [
  {name: 'user1', age: 20},
  {name: 'user2', age: 30}
];

const newUsers = true;
//Додаємо нового користувача до масиву
if(newUsers){
  usersArr.push({name: 'user3', age: 33}); // В кінець
  //usersArr.unshift({name: 'user3', age: 33}); // На початок
  // usersArr.pop(); //Видаляє з кінця
  // usersArr.shift();// Видаляє на початку
  //Видаляє вказаний елемент з масиву і дає змогу додавати на його місце новий
  // usersArr.splice(-1);  //Видаляє останній елемент
  //Видаяляє з першого елемента по третій , але не враховуючи його
  // usersArr.splice(1, 2); //Залишає перший елемент
  // usersArr.splice(0, 1); //Видаляється перший елемент
  // usersArr.splice(0, 1, {name:'user0', age:15}); //Таким чином видаляється перший елемент об'єкта і заміняється новим
}

console.log(typeof usersArr); // Object { name: "user3", age: 33 }

// В методі splice(1, 2) перший індекс вказує на те який елемент в списку видаляти, другий - скільки
 

console.log(usersArr.length);
usersArr.push( {profession: 'QA'} );
console.log(String(usersArr));


_________________________________________________________________________
const arr= [1, 2, 3];
//Бінарний + об'єднує дані приводячи їх до рядка
alert("" + 1); //1
alert("1" + 1); //11
alert("1,2" + 1); //1,21
console.log(arr);
 
____________________________________________________________
/* Щоб отримати доступ до елементу об'єкта в масиві потрібно в () після імені масиву вказати індекс об'єкта в [], а потім через крапку ім'я ключа:
console.log(arrTwo[1].type); */
/* Щоб виконати тіло ф-цію потрібно в виклиці після позиції ф-ції [] поствити () */

_________________________________________________________________________
//Багатомірний масив , можуть містити елементи які також являються масивами
//Зозвичай використовують для зберігання матриць
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);
console.log(matrix[2][1]); //8, центральний елемент
//[2]-елемент масиву, який являється також масивом ; [1] - ключ/позиція елементу
___________________________________________________________________________
//Масив поводить себе як об'єкт, тобто копіюється за посиланням
const arr01 = ['1', '2', '3'];
let newArr = arr01; // Присвоюємо масив змінній
console.log(newArr.length); //3
newArr.length = 2; // Вкорочуємо масив
console.log(arr01); //Array [ "1", "2" ]
//Сам масив по суті не змінився, просто тепер до нього є два ключа


_________________________________________________________________________
//Масив використовуєм як масив
//Масив являється об'єктом і поводить себе як об'єкт

let arr = ['Ваня', 'Іван', 'Оля'];

//Додаємо нечислову властивість
arr.name = "Колян";
console.log(arr); //Array(3) [ "Ваня", "Іван", "Оля", name: "Колян" ]

/* 
Масиви робить особливим їхнє внутрішнє уявлення. Движок JS старається зберігати елементи масива в безперервній області пам'яті, один за одним. Існують і інші способи оптимізації, завдяки яким масиви працюють дуже швидко.
Але всі вони втратять ефективність, якщо перестати працювати з масивами як з "впорядкованою колекцією даних" і почати використовувати їх як звичайні об'єкти.

Варіанти неправильного використання масива:
1. Додавання нечислових властивостей : arr.test = 5.
2. Створення дірок : додавання arr[0],потім arr[1000](між ними нічього немає)
3. Заповнення масиву в зворотньому порядку: arr[1000], arr[999] і.т.д
Все призведе до зменшення швидкості масиву
*/
______________________________________________________________________
//Масив являється об'єктом і поводить себе як об'єкт
//Копіює по силкі
const fruits2 = ['Банан'];
let arr12 = fruits2; // Копіювання по силкі, дві змінні посилаються на один і той же масив
// alert(arr12 === fruits2); // true
arr12.push('Груша'); // Масив змінюється по силкі
console.log(arr12); //Array [ "Банан", "Груша" ]
console.log(fruits2); //Array [ "Банан", "Груша" ]

___________________________________________________________________________
//Властивість LENGTH
//Його можна перезаписати. Якщо його збільшити нісього цікавого не відбудеться, а якщо зменщити - масив стане коротшим

let arr13 = [1, 2, 3, 4, 5];
arr13.length = 2; //Вкорочує до 2 елементів
console.log(arr13); //Array [ 1, 2 ]
arr13.length = 5;
console.log(arr13); //Array(5) [ 1, 2, <3 empty slots> ]
//Відновлює довдину масиву, але не відновлює видалені значення. Замість них будуть порожні слоти
console.log(arr13[2]); // undefined, так як під 2 індексом стоїть порожній слот
//Таким чином можна очистити масив arr.length = 0;
//arr13.length = 0; Array []

___________________________________________________________________________
// Оператор ==
/* Не варто зрівнювати масиви за допомогою даного метода,вони не будуть однаковими, якщо тільки це не дві змінні які посилаються на один і тойже масив. Так як він не має спеціального підходу до них.
Кращє використовувати зрівняння по елементам в циклі або використовувати методи ітерації */

console.log([] == []); // false
console.log([0] == [0]); // false

console.log(0 == []); //  true
console.log('0' == []); // false