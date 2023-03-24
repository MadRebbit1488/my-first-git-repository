//Пошук в масиві
//Методи indexOf/lastIndexOf/includes
//Аналоги строкових методів

/* 1.arr.indexOf(item, from) шукає item, починаючи з індекса from, і повертає індекс, на якому був знайдений шукаємий елемент, в іншому випадку -1 
2.arr.lastIndexOf(item, from) - те ж саме, але шукає справа на ліво.
3.arr.includes(item, from) - шукає item, починаючи з індекса from, і повертає true, якщо пошук успішний. 
 */

let arrRaid = ['Дора', 'дора', 'помідора'];

//indexOf
console.log(arrRaid.indexOf('Дора')); //0
console.log(arrRaid.indexOf('Дора', 2)); // -1

//includes
console.log(arrRaid.includes('Дора')); // true
console.log(arrRaid.includes('Дора', 2)); // false

//
//indexOf
//використовується щоб отримати конкретний індекс

//Є користувач у якого багато ролей
const roles = ['user', 'admin', 'manager'];
//І нам потрібно пропустити користувача якщо в нього є  роль, наприклад адмін
const elIndex = roles.indexOf('admin');
console.log(elIndex);  //1 , повертає індекс на якому знаходиться елемент
//indexOf перебирає масив, знаходить перше входження і повертає його індекс. 
//Якщо індекс не знайшовся indexOf завжди буде негативним -1
const elIndex2 = roles.indexOf('superuser');
console.log(elIndex2); // -1
//Можна записати перевірку, але такий синтаксис використовується дуже рідкл
if(roles.indexOf('admin') >= 0){
  console.log('Доступ надано');
}
//Це працює, тому що ми отримуємо індекс і якщо він існує то може бути 0, 1, 2 і т.д тобто будь-яке число від 0 і більше. Якщо його немає, то буде -1
if(roles.indexOf('superuser') >= 0){
  console.log('Доступ надано'); // -1
}

//
//includes
//Повертає true або false
//Простіший метод перевірки
console.log(roles.includes('admin')); // true
console.log(roles.includes('superuser')); //false
//Такий синтаксис використовується частіше, по причині простого, інтуїтивного запису. Використовується для перевірки значення елемента
if(roles.includes('admin')){
   console.log('Доступ надано');
} 

__________________________________________________________________________________________________________
//Пошук в масиві
//find і findIndex
//Пошук в масиві об'єктів з певною умовою і повертають перший трапившийся елемент(find) , або його індекс(findIndex), який задовольнить умову

/* Синтаксис:
let result = arr.find(function(item, index, array) {
  якщо true - повертається поточний елемент і перебір припиняється
  якщо всі ітерації виявились хибними, повертається undefined
});
 */

let arrFind = [
  {name:'pypurka', age:14},
  {name:'pizhma', age:19},
  {name:'dinorik', age:'Не скажу'},
]
//Звертаємось до змінної якій присвоєний масив об'єктів .find (ф-ція яка виконується для кожного елементу масива(item - елемент масиву, index - ключ/позиція, array - весь масив ))
let resultOne = arrFind.find(function(item, index, array){
  return item.name === 'dinorik';
  return item.age === 14;
});
//Теж саме за допомогою стрілкової ф-ції
// let resultOne = arrFind.find(item => item.name ==='dinorik'); // Object { name: "dinorik", age: "Не скажу" }
console.log(resultOne); // Object { name: "dinorik", age: "Не скажу" }

//findIndex
let resultTwo = arrFind.findIndex(item => item.age === 14);
console.log(resultTwo); // 0

let resultThree = arrFind.findIndex(item => item.name === 'pizhma');
console.log(resultThree); // 1
__________________________________________________________________________________________________________
//Пошук в масиві

// filter
//Шукає всі елементи, на яких ф-ція-колбек поверне true.Схожий на метод find, але не припиняє свою роботу в той момент коли задоволена задана умова. А продовжує її і повертає новий масив із всіх елементів які задовольняють вказану умову
/*Синтаксис:
 let result = arr.filter(function(item, index, array){
  якщо true - елемент додається до р-тату, і перебір продовжується
  якщо нічього не знайдено, повертається порожній масив
}); */

 let arrFilter = [
  { name: 'pypurka', age: 18 },
  { name: 'pyp', age: 23 },
  { name: 'raksakorikorfalapatoriys', age: 'Дофіга' },
]

// let resultFilter = arrFilter.filter(function(item, index, array) {
//   return item.age >= 18;
// });
//Коротший запис стрілковою ф-цією
let resultFilter = arrFilter.filter(item => item.age === 18);
console.log(resultFilter);  //Object { name: "pypurka", age: 18 }

//Фільтрація малих значень
function num (value) {
  return value >= 100;
}

let filterArr = [12, 6, 13, 135, 148, 119, 7].filter(num);
console.log(filterArr); //Array(3) [ 135, 148, 119 ]
//всі числа які не задовольняли умову ф-ції num будуть видалені з масиву 


//Пошук простих чисел в масиві
//Я не розумію як це працює (((
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime (num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); //Array(6) [ 2, 3, 5, 7, 11, 13  */
__________________________________________________________________________________________________________