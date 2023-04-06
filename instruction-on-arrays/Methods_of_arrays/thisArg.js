//Необов'язковий параметр thisArg

/* Майже всі методи, за винятком sort, приймають необов'язковий параметр thisArg. 
Повний синтаксис^
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
Значення параметра thisArg стає this для func. */

//Використовуємо метод об'єкта army як фільтр і thisArg  передає йому контекст
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30},
];

//Знайти користувачів, для яких army.canJoin поверне true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
console.log(soldiers); //Array [ {age: 20}, {age: 23} ]
/* Якщо просто використовувати users.filter(army.canJoin), то виклик army.canJoin був би в режимі окремої ф-ції, з this=undefined. Це призвело б до помилки
Викли users.filter(army.canJoin, army) можна замінити на 
users.filter(user => army.canJoin(user)), який робить теж саме */