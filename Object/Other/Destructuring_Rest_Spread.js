//Деструктуризація i rest / SPREAD

//*Деструктуризація
//Масив
const arr = [1, 2, 3];
const [z, y, x] = arr;
console.log(y); //2

//Об'єкт
let user = {
  name: 'Pypa',
  age: 40,
  city: 'Zalypa',
};
const {city, name} = user;
console.log(name); // Pypa
console.log(city); // Zalypa
//За допомогою деструктуризації зручно витягувати тільки потрібні властивості 


//*REST (решта) оператор {...}
//*Або синтаксис залишкових параметрів - створює масив даних з залишкових елементів. Використовується коли потрібно непотрібні властивості закинути в інший об'єкт
//Приклад Udemy
const {age, ...userWithoutAge} = user;
console.log(userWithoutAge); //{name: 'Pypa', city: 'Zalypa'}

//Вкладання в об'єкт додаткових даних
const additionalData = {
  skills: ['Кушунька', 'Спатуська'],
  creditCard: '6248-1368-1349-4976'
};
//Потрібно в основний об'єкт вкласти ці дані
//Звичайний спосіб, робить нові дані вкладеним об'єктом
user.additionalData = additionalData;
console.log(user); //{name: 'Pypa', age: 40, city: 'Zalypa', additionalData: {…}}
// 
user.skills = additionalData.skills;
console.log(user); //{name: 'Pypa', age: 40, city: 'Zalypa', skills: ['Кушунька', 'Спатуська']}



/*
*SPREAD(поширювати) - Дозволяє розширити доступні для ітерації елементи(масиви, рядки) 

Приклад Udemy
Додавання більшої к-ті властивостей, з використанням ...spread оператора*/
user = {
  ...user,
  ...additionalData,
}
console.log(user); //{name: 'Pypa', age: 40, city: 'Zalypa', skills: Array(2), creditCard: '6248-1368-1349-4976'}
/* '...' вказує на те, що потрібно взяти всі властивості із user і покластив user. Аналогічно із additionalData, кладе всі новоотримані властивості в  user*/

/* Константа захищяє від змін лише саму змінну,а не її вміст. Тому можна додавати окремі властивості, але неможна перезаписати , як було в прикладі з оператором  SPREAD
Так можна:
user.test = 'dfevreb';
Не можна:
user = {
  ...user,
  ...lknojfo,
}
*/

//*Заміна apply
/* Зазвичай використовують Function.prototype.apply в випадках, коли хочуть використовувати елементи масива в якасті аргумента ф-ції */
//Без SPREAD
function myFunction(x, y, z) {
  console.log(x, y, z); //0 1 2
}
const args = [0, 1, 2];
myFunction.apply(null, args);
/* null означає, що внутрішній контекст або this не залежить від жодного об'єкта . Тобто ф-ція буде викликана з глобальним контекстом і посилатись на глобальний об'єкт (наприклад, window у веб-середовищі браузера або global у середовищі Node.js)*/

//Із SPREAD SYNTAX
function myFunction1(x, y, z) {
  console.log(x, y, z); //0 1 2
}
const args1 = [0, 1, 2];
myFunction1(...args1);

________________________________________________________________
//*REST

function sum(...theArgs) {
  let total = 0;
  for(const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 1, 1, 5)); //8
/* Якщо останній оргумент ф-ції має префікс '...', він автоматично стає масивом елементів від 0 до theArgs.length-1  

///
!Можуть бути деструктуровані(в масивах)
Ф-ція приймає залишковим параметром деструктуровані елементи масиву і сумує їх*/
function des(...[a, b, c]) {
  return a + b + c;
}
console.log(des(1)); //NaN (b i c =  undefined)
console.log(des(1, 1, 1)); //3
console.log(des(1, 1, 1, 1)); //3 (4 параметр не деструктурований)

//
function  myFunc(a, b, ...another) {
  console.log('a =', a); //a = 1
  console.log('b =', b); //b = 2
  console.log('another = ', another); //another =  (3) [3, 3.1, 3.2], може залишитись порожнім масивом якщо аргумент не був переданий
}
myFunc(1, 2, 3, 3.1, 3.2);

//
//Залишкові параметри уножуються на перший параметр і повертають масив
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(elem) {
    return multiplier * elem;
  });
}

const arrr = multiply(2, 1, 2, 3);
console.log(arrr); //[2, 4, 6]

//
//Методи масивів можуть бути використані на залишкових параметрах, але не на об'єкті 
//Масив
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort();
  return sortedArgs;
}
console.log(sortRestArgs(5, 8, 3, 7)); //[3, 5, 7, 8]
//Об'єкт
function sortArg() {
  let sortedArgs = arguments.sort();
  return sortedArgs;
}
console.log(sortArg(5, 6, 8, 7)); //TypeError
//Щоб використовувати методи масивів на об'єкті, потрібно перетворювати його в справжній масив
function sortArguments() {
  let args = Array.from(arguments);
  let sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 6, 8, 7));  //[5, 6, 7, 8]