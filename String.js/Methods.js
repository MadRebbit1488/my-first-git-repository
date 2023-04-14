/* 
Методи:
-charAt
-indexOf/lastIndexOf/includes
-join/split
-slice
-startsWith/endsWith
-toLowerCase/toUpperCase
-riplace/riplaceAll
-trim/trimStart/trimEnd
-padStart/padEnd
-repeat
 */

/* Внутрішній формат для рядка - UTF-16, незалежно від
 кодування сторінки*/
//Стандартні методи для роботи з рядками

const userName = 'Вася Пупкіна';
//Отримуємо першу букву  імені, щоб написати скорочення
//Це можна зробити звернувшись до рядка як до масиву
console.log(userName);
console.log(userName[0]); // В
//В даному випадку рядок буде поводити себе як масив
//таким чином можна побуквенно отримати весь рядок
/* const userName = 'Вася Пупкін'[0]; // В
 можна даний метод використовувати безпосередньо в
  самій змінній */

//Метод charAt
//Працює аналогічно
console.log(userName.charAt(1)); //а

//Можна дізнатись довжину рядка, так як образно це масив букв
console.log(userName.length); //11
/* str.length - це числова властивість,а не ф-ція, тому 
додавати () не потрібно.
Отриману довжину можна якось обробляти в випадку
коли це необхідно */

//Пошук по рядку
//indexOf - повертає перше співпадіння індекса 
console.log(userName.indexOf('а')); //1
console.log(userName.indexOf('а', 2)); //11
//Необов'язково шукати одну букву
console.log(userName.indexOf('уп')); //6
//Щоб знайти всі співпадіння, можна запустити цикл
let target = 'а'; //мета пошуку
let pos = 0;
while(true) {
  let foundPos = userName.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log(foundPos); // 1, 11   
  pos = foundPos + 1; // продовження з наступної позиції
}
/* Обов'язково потрібно робити перевірку на -1, тому що
якщо елемент стоїть на позиції '0', іf вирішить що тест не пройдений  */
if (userName.indexOf('В')){
  console.log("Совпадение есть"); // не працює
}
if (userName.indexOf('В') != -1){
  console.log("Совпадение есть"); // працює
}

// lastIndexOf - повертає останнє співпадіння 
console.log(userName.lastIndexOf('а')); //11
// Includes
console.log(userName.includes('а')); // true
//Можна вказаи позицію з якої почнеться пошук
console.log(userName.includes('В', 1)); //false

//Вивід частин рядка
//SLICE - обрізає рядок
//Масив обрізався далі від 4 індексу 
console.log(userName.slice(4));// Пупкіна
console.log(userName.slice(5, 8)); //Пуп
console.log(userName.slice(-7, -4)); //Пуп


// Використання перевірок
const str = 'Купила баба коника';
console.log(str.includes('а')); // true
//startsWith - з чього починається рядок
console.log(str.startsWith('К')); // true
//endsWith - чим рядок закінчується
console.log(str.endsWith('а'));// true
console.log(str.endsWith('к')); // false
/* 
Рядки мають методи, тому що під капотом JS вони
перетворюються до об'єктів.

Насправді це виглядає ось так :*/
console.log(new String('Купила баба коника')); //String {'Купила баба коника'}
//Рядок перетворився в об'єкт і тепер до нього можна використовувати методи
console.log(new String('Купила баба коника').includes('а')); //true

//Перетворення рядків
const strWords = 'А коник без ноги';
//toLowerCase - зазвичай використовується для стандартизації даних: 
//наприклад користувач задав  пошуковий запит, а ми не хочемо робити запит який впливає на верхній чи нижній регістр
// тоді запит буде переводитись в toLowerCase, а потім порівнювати
console.log(strWords.toLowerCase()); //а коник без ноги
console.log(strWords.toUpperCase()); //А КОНИК БЕЗ НОГИ
//Переводить в регістр один елемент
console.log(strWords[0].toLowerCase()); //а

//replace - замінити
//Приймає першим аргументом елемент який потрібно замінити
//а другим аргументом - на що замінити
//Але він замінює тільки перше входження
//Приймає регулярні вирази
console.log(strWords.replace('А', 'Бо')); //Бо коник без ноги
/* Дані методи повертають новий рядок, але початковий не модифікують */

//replaceAll - заміняє всі співпадіння
console.log(strWords.replaceAll('н', 'п')); //А копик без поги

//Аналог replaceAll,тому що це новий метод і підтримуєтьсся не всіма браузерами
//Замість рядка передається регулярний вираз і 'g', щоб 
//знайти всі співпадіння
console.log(strWords.replace(/о/g, 'а')); //А каник без наги

/* 
TRIM/TRIMSTART/TRIMEND
trim - -прибирає відступи спочатку і в кінці
trimStart - прибирає відступ напочатку
trimEnd - прибирає відступ вкінці */

// \n - символ перенесення рядка
//Очищяємо рядок від відступів напочатку і в кінці
const str2 = ' Вася Пупкіна   \n';
console.log(str2.trim()); //Вася Пупкіна (без відступів)


//Перевірка являється елемент числом  чи рядком
console.log(isNaN(Number('fgrr'))); //true
console.log(isNaN(Number('111'))); //false


//Розділення рядка на масив
//Метод split

const userFullName = 'Вася Пупкіна Василівна';
console.log(userFullName.split(' ')); //['Вася', 'Пупкіна', 'Василівна']
//Даний метод допомагає при деструктуруванні, коли потрібно отримати якусь певну частину масиву
const[firstName, familyName, lastName] = userFullName.split(' ');

console.log(firstName); //Вася 
console.log(familyName); //Пупкіна
console.log(lastName); //Василівна

//Об'єднання масиву в рядок
//Метод join
const arr = ['Мій', 'братішка', 'найкащий'];
console.log(arr.join(' '));//Мій братішка найкащий

//Доповнення рядків
//Методи padStart/padEnd/repeat

const film = 'Неймовірні пригоди Джоджо';
//Наповнюємо рядок додатковими символами
//pedStart - приймає максимальну довжину рядка і заповнює його
console.log(film.padStart(50));//                         Неймовірні пригоди Джоджо
//Тепер довжина рядка 50, вся довжина заповнилась пробілами
console.log(film.padStart(50).length); //50
console.log(film.padStart(50, '*')); //*************************Неймовірні пригоди Джоджо

//padEnd
console.log(film.padEnd(50, '*')); //Неймовірні пригоди Джоджо*************************

//repeat - повторення рядка, потрібен коли потрібно мультиплікувати(мультиплицировать; размножение, умножение) рядок на певне число символів 
console.log(film.repeat(2)); //Неймовірні пригоди ДжоджоНеймовірні пригоди Джоджо

//Посимвольний перебір рядка
let str1 = 'Hello';
for (const char of str1) {
    console.log(char); // H, e, 2l, o
}
//Заміна елементу
console.log(str1.replace('H', 'h'));

//Перезапис значення змінної
str1 = 'p' + str1[0];
console.log(str1); //pH

//Побітове НЕ (~)
/* Перетворює число в 32-розрядне ціле, відкидаючи
дробну частину.
Це означає, що значення ~n = -(n+1) */
console.log(~2); //-3
console.log(~1); //-2
console.log(~0); //-1
console.log(~-1); //0

const userName1 = 'Вася Пупкіна';
if (~userName1.indexOf('В')){
    console.log("Совпадение есть"); // працює
  }
/* Зараз такий трюк не використовується, так як він не
працює із всіма числами. Раціональніше викор метод includes*/