/* ТЕМИ:
- Оголошення / звернення / створення / модифікація
- Метод THIS
- Ітерація 
- Деструктуризація / REST / SPREAD
- оператор IN
-Впорядкування властивостей об'єкта
- Math.trunc
- Дублювання об'єктів / Object.assign / Вкладене копіювання / structuredClone()
-*/

/* Два об'єкти рівня якщо це один і тойже об'єкт.
При порівнянні об'єкта з примітивом '==' об'єкт сам перетворюється в примітив */

/* В JS є багато типів об'єктів:
- plain objec - простий об'єкт
- Array - для зберігання впорядкованих колекцій даних 
- Date  - для зберігання і-нфо про дату і час
- Error - для зберігання і-нфо про помилки
- і т.д*/

//
/* Синтасис:
1. Конструктор об'єкта: const user = new Object();  
2. Літеральна натоція: const user = {};*/

/*Якщо і'мя ключя складається із декількох слів, воно повинно бути в '' .
Але звернутись до такої властивості через крапку не вийде, буде помилка. Тут потрібно використовувати [] */
let user1 = {
  "likes birds": true  
};
console.log(user1['likes birds']); //true

//
// Імена змінних не можуть співпадати з зарезервованими словами, але для властивостей об'єктів таких обмежень немає
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); //6

//
let fruits = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruits]: 5, //ім'я властивості буде взяти із змінної fruit
};
console.log(bag.apple) //5
//Якщо ввести слово apple, то в об'єкті bag буде лежати властивість {apple: 5}
//
let fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5,
};
console.log(bag); // {appleComputers: 5}
//
const res = prompt('Введіть властивусть');
console.log(user[res]); //24
//Якщо звертатись до властивості об'єкта якої не існує. буде вивід undefined

//
// Зберігають іменовані набори даних з певними властивостями 
const userArray = ['Вася', 'Пупкін', 24];
const user = {
  name: 'Вася',
  surname: 'Пупкін',
  age: 24,
  skills: [
    'Кушунькати',
    'Спатуськати',
  ],
  eduBasic: 'Школа',
  eduPro:'ЧМК',
};


//
//Звернення до елементів об'єкта
console.log(user); //Виведеться весь об'єкт
console.log(user.name); //Вася
//Виклик властивості масиву
console.log(user.skills); //['Кушунькати', 'Спатуськати']
console.log(user.skills[0]); //Кушунькати
//Звернення через [' '] доступне для розрахункових властивостей, звернення через крапку ні
console.log(user['skills']); //['Кушунькати', 'Спатуськати']
//Приклад: звертаємось до елементу користувача в залежності від запросу
const level = 'Pro';
console.log(user['edu' + level]); //ЧМК
//В такому варіанті звернення може бути будь-який вираз для розрахунку або змінна


//Створення властивості заданого об'єкта
user.city = 'Київ';
//або
user['city'] = 'Київ';
console.log(user); //{name: 'Вася', surname: 'Пупкін', age: 24, skills: Array(2), eduBasic: 'Школа', city: "Київ" }

//Модифікація існуючього масиву
user.age = 30;
//або
user['age'] = 30;
console.log(user); //{name: 'Вася', surname: 'Пупкін', age: 30, skills: Array(2), eduBasic: 'Школа', city: "Київ" }
//Не змінює попередні виводи

//Щоб видалити властивість, можна використовувати оператор delete/
delete user.age;
console.log(user); //{name: 'Вася', surname: 'Пупкін', skills: Array(2), eduBasic: 'Школа', eduPro: 'ЧМК', …}

________________________________________________________________________
//МЕТОДИ ОБ'ЄКТІВ

//Ключове слово THIS(Цей) тобто сам об'єкт
//Звертається до властивостей, розраховує і повертає
//Розраховуємо повне ім'я користувача
const user = {
  name: 'Пупа',
  surname: 'Залупкіна',
  age: 24,
  getFullName: function () {
    //Показує роботу методу
    console.log(this);  //{name: 'Пупа', surname: 'Залупкіна', age: 24, getFullName: ƒ}
    return this.name + ' ' + this.surname;
  }
};
console.log(user.getFullName()); //Пупа Залупкіна

________________________________________________________________________
//Enhance object literals
/*  this.operations.push({
      reason,
      sum, 
    })
    Якщо змінні які кладуться в ключ і значення співпадають, то можна пропустити одну із них */
const balance = 7;
const wallet = {
  balance, // це буде означяти, що змінна рівна початковому балансу - 7 
  operations: [],
}
//
const initialBalance = 7;
wallet = {
  balance: initialBalance,
  operations: [],
}

________________________________________________________________________
//Ітерація
//Об'єкт міст з вказаною т-ратурою.
//Потрібно порахувати середню т-пиратуру
const cities = {
  kiv: {
    lt: 200,
    temp: 25
  },
  ivfr: {
    lt: 100,
    temp: 20
  },
}
//Object.keys - робить із ключів масив, length масиву - це число ключів
//keys - це метод Object,який дозволяє отримати ключі із об'єкта
console.log(Object.keys(cities)); //['kiv', 'ivfr']

//Цикл for..in ітерується по ключам
let sumTemp = 0; 
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
  //citiesCount++;
  sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount); // 22.5

//
let userCycl = {
  name: 'Pypa',
  age: 24,
  isStudent: true,
};

for (let key in userCycl) {
  console.log(key); //name, age, isStudent
  console.log(userCycl[key]); //Pypa, 24, true
}
 

//Цикл for..of - ітерується по ключам, можна використовувати тільки разом з Object.keys
for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
  console.log(key); ////['kiv', 'ivfr']
}
console.log(sumTemp / citiesCount); //22.5

________________________________________________________________________


//Оператор in 
//Перевіряє існування властивості в об'єкті
//Синтаксис: "key" in object

let user = {};
console.log(user.Hcrjhnei === undefined); //true

//
let user3 = { name: "Pizhma", age: 24};
console.log('age' in user3); //true
console.log('pypa' in user3); //false

//Якщо зліва вказувати властивість не в '', це буде означати що вказана змінна, в якій знаходиться ім'я властивості
let user4 = {age: 24};
let key = 'age';
console.log(key in user4); //true

//Оператор in підходить для випадків коли властивість існує, але має значення undefined.
let obj1 = {
  test: undefined,
};
console.log(obj1.test); //undefined, хочя властивість існує
console.log('test' in obj1); //true, оператор in це підтверджує
________________________________________________________________________
//Впорядкування властивостей об'єкта
/* Властивості впорядковуються особливим чином:
- цілочислові ключі сортуються по збілльшенню
- інші(не цілочисленні також) в порядку створення */
//Цілочислові це цілі числа, типу '49','32' і т.д. а от '+49', '1,2' цілочисловими не являються
let codes = {
  "49": "Германія",
  "41": "Швейцарія",
  "44": "Великобританія",
  // ..,
  "1": "США"
};
for (let code in codes) {
  console.log(code); //1, 41, 44, 49
}
//Так як значення цілочислові, вони виводяться в порядку збільшення. Щоб вивести їх в порядку створення достатньо зробити їх не цілочисловими додавши на початку знак '+'.

//Math.trunc - вбудована ф-ція, яка видаляє десятичну частину
console.log(String(Math.trunc(Number('49')))); //49
console.log(String(Math.trunc(Number('+49')))); //49
console.log(String(Math.trunc(Number('1.2')))); //1
________________________________________________________________________
//Дублювання об'єктів
/* В JS для такого немає вбудованого методу. Але можна створити новий порожній об'єкт і додати до нього перебором властивості, скопіювавши їх на примітивному рівні  */
let coral = {
  sort:  'spongy',
  color: 'red',
};
let clone = {}; // новий порожній об'єкт
//Копіюємо до нього всі властивості із coral
for (let key in coral) {
  clone[key] = coral[key];
}
clone.color = 'blu';

console.log(coral); //{sort: 'spongy', color: 'red'}
console.log(clone); //{sort: 'spongy', color: 'blu'}

/* Object.assign(dest,[src1, src2, src3...])
- dest - цільовий об'єкт
- src1, src2, src3 - вихідні об'єкти
Даний метод можна використовувати для копіювання або об'єднання декількох об'єктів в 1  */

let kaka = {color: 'brown', scent: 'stinks'};
let permissions1 = {canView: true};
let permissions2 = {canEdit: true};
//Копіюємо всі властивості із permissions1, permissions2 в kaka
Object.assign(kaka, permissions1, permissions2);
console.log(kaka); //{color: 'brown', scent: 'stinks', canView: true, canEdit: true}

//Якщо скопійоване ім'я властивості існує, воно буде перезаписано
let baka = {name: 'Omnomnom!!!'};
Object.assign(baka, {name: 'Pyk'});
console.log(baka); //{name: 'Pyk'}

//Object.assign можна використовувати для заміни циклу for..in для простого копіювання
let oppai = {
  size1: 'small',
  size2: 'big',
};
let clone1 = Object.assign({}, oppai);
clone1.size3 = 'average';
console.log(oppai); //{size1: 'small', size2: 'big'}
console.log(clone1); //{size1: 'small', size2: 'big', size3: 'average'}

//Вкладене копіювання
/* Властивості об'єкта можуть бути силками на інші об'єкти . 
Тепер не вийде скопіювати clone.size = banana.size, тому що banana.size - це об'єкт і він буде скопійований по силкі. Таким чином clone і banana будуть мати спільний об'єкт size*/

let banana = {
  color: 'yellow',
  size: {
    height: 15,
    width: 5,
  },
};
let clone = Object.assign({}, banana);
console.log(clone.size === banana.size); //true, один і тойже об'єкт
banana.size.height++;
console.log(banana.size); //{height: 16, width: 5}
console.log(clone.size); //{height: 16, width: 5}
/* Щоб це виправити потрібно використовувати цикл клонування, який перевірить кожне значення banana[key], і якщо властивість об'єкт, скопіює його структуру. Це називається глибоким клонуванням.
Також можна виконати глибоке клонування використовуючи рекурсію.
Або використати глобальний метод  structuredClone(), який дозволяє зробити повну копію об'єкта */

//structuredClone()
let banan = {
  name: 'banan',
  characteristics: {
    color: 'yellow',
  },
};

let nameBanana = structuredClone( banan);
nameBanana.characteristics.color = 'black';
console.log(banan.characteristics); //{color: 'yellow'}
console.log(nameBanana.characteristics); //{color: 'black'}
________________________________________________________________________
