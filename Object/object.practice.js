//Задача №1
/* Ф-ція makeUser  повертає об'єкт. Яким буде р-тат при звернені до властивочті ref ? */
function makeUser () {
  return {
    name: 'John',
    ref: this,
  };
}

  let user = makeUser();
  console.log(user.ref.name); // <empty string>
  //this в makeUser рівно undefined, тому що воно викликається як ф-ція, а не через крапковий синтаксис як метод
  //
  function makeUser () {
  return {
    name: 'Pypa',
    ref () {
      return this;
    }
  };
}
let user1 = makeUser();
console.log(user1.ref().name); //Pypa
//Тепер працює, тому що user.ref() - метод. І значенням this стає об'єкт перед крапкою

  _____________________________________________________________________
//Задача №2
//Сорторування користвувачів по віку
const users = [
  {name: 'Вася', age: 30 },
  {name: 'Катя', age: 18 },
  {name: 'Аня', age: 40 },
  {name: 'Петя', age: 25 },
];
console.log(users.sort((a, b) => a.age - b.age));
_____________________________________________________________________
//Задача №3
/* Перетворення користувачів до вигляду 
{fullName: 'Вася Пупкін', skillNum: 2 }*/

const users1 = [
  {
    name: 'Женя',
    surname: 'Жменя',
    age: 30,
    skills: ['Розробка', 'DevOps']
  },
  {
    name: 'Лупа',
    surname: 'Залупкіна',
    age: 18,
    skills: 'Кушунька',
  },
];

const userData = users1.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});
console.log(userData); //{fullName: 'Женя Жменя', skillNum: 2} , {fullName: 'Лупа Залупкіна', skillNum: 8}
_____________________________________________________________________
//Задача №4
/* Реалізувати методи збільшення і зменшення балансу, при якому кожна операція зберігається в масив operations в вигляді 
{reason: 'Оплата податків', sum: -100}.
Повертає true, якщо успішно і false, якщо невистачає балансу.
Також реалузувати метод введення числа операція по гаманцю. 
 */

const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason: reason,
      sum: sum,
    })
    return true;
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log('Недостатньо балансу');
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      reason: reason,
      sum: -sum,
    })
    return true;
  },
  getOperationLength: function () {
    return this.operations.length
  }
};
console.log(wallet.increase(1000, 'ЗП')); //true
console.log(wallet.getOperationLength()); //1
console.log(wallet.decrease(2000, 'Покупка укулєлє')); //Недостатньо балансу false
console.log(wallet.getOperationLength()); //1
console.log(wallet.decrease(500, 'Покупка м\'яска')); //true
console.log(wallet.getOperationLength()); //2
console.log(wallet.balance); //500
console.log(wallet.operations); // {reason: 'ЗП', sum: 1000}, {reason: "Покупка м'яска", sum: -500
_____________________________________________________________________
//Задача №5
//Склад зберігання товарів
/* Зробити об'єкт склад з методами додавання на склад, пошук по складу товара і розрахунок ваги */

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find(g => g.id == id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood) {
      console.log('Такий товар вже є на складі');
      return;
    }
    this.goods.push(good);
  },
  getWeightKg: function (kg) {
    //reduce приймає acc і поточний елелемент(el)
    return this.goods.reduce((acc, el) => 
      //Якщо є властивість kg, ми додаємо його до acc, якщо немає додаємо просто 0.
      acc += el.weight?.kg ? el.weight.kg : 0, 0);
  },
};

//Товари
const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford'
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
}

const paper = {
  id: 3,
  color: 'red',
}


warehouse.addGood(car);
warehouse.addGood(car); //Такий товар вже є на складі
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods); //[{id: 1, weight: {kg: 100}, brand: 'Ford'},{id: 2, weight: {kg: 2}}, {id: 3, color: 'red'} ]
//Шукаємо товар
let findedItem = warehouse.findGoodById(6); 
console.log(findedItem); //undefined
findedItem = warehouse.findGoodById(1); 
console.log(findedItem); //{id: 1, weight: {…}, brand: 'Ford'}
//Рахуємо вогу
const w = warehouse.getWeightKg();
console.log(w); //1002
_____________________________________________________________________
//Тести
let obj = {
  a: {
      b: 1
  }  
};
console.log(obj.a['b']); //1
//
let arr = [
    { name: 'Вася' },
    { name: 'Петя' },
];
console.log(arr.map(e => e.name).reduce((acc, e) => acc += e[0], '')); //ВП
//
let a = {
    b: 1,
    add: function(num) {
        this.b += num
    }
}
a.add(2);
console.log(a.b); //3
//
a = {
    b: 1,
    add: function(num) {
        a.num += this.b
    }
}
a.add(2);
console.log(a.num); //NaN
//
 a = 'a';
a = { a };
console.log(a.a); //a
//
obj = {
  a: {
      b: {
          d: 1
      }
  },
};
console.log(obj.a?.c.d); //caught TypeError: 
_____________________________________________________________________
//Задача №6
/* 
-Створити порожній об'єкт
-Додати влстивість name  із значенням Pizhma 
-Додати властивість surname  із значенням Typa
-Змінити значення властивості name на Pypa
-Видалити властивість name із об'єкта */

let objExercise1 = {};
objExercise1.name = 'Pizhma';
objExercise1.surname = 'Typania';
objExercise1.name = 'Pypa'
delete objExercise1.name;

console.log(objExercise1); // {}
console.log(objExercise1); //{name: 'Pizhma'}
console.log(objExercise1); //{name: 'Pizhma', surname: 'Typania'}
console.log(objExercise1); //{name: 'Pypa', surname: 'Typania'}
console.log(objExercise1); //{surname: 'Typania'}
_____________________________________________________________________
//Задача №7
//Перевірка на порожнечю
//Напишіть ф-цію isEmpty(obj), яка повертає true, якщо у об'єкта немає властивості, інакше false
function isEmpty (obj) {
  for (let key in obj ) {
    //Якщо тіло циклу почне виконуватись, значить в об'єкті є властивість
    return false;
  } 
  return true;  
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); //false
___________________________________________________________________
//Задача №8
//Зміна константи
const userConst = {
  name: 'Pypa',
};
userConst.name = 'Lypa';
console.log(userConst.name) //Lypa
_____________________________________________________________________
//Задача №9
//Сума властивостей об'єкта
//Потрібно написати код для суми всіх зарплат і зберегти р-тат в змінну sum

let salaries = {
  Pypa: 100,
  Lypa: 160,
  Dypa: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum); //390
_____________________________________________________________________
//Задача №10
//Умноження числових властивостей на 2
//Створ ф-цію multiplyNumeric(obj), яка множить всі числові властивості об'єкта на 2

function multiplyNumeric (obj) {
 for (let key in obj) {
   if(typeof obj[key] == 'number'){
    obj[key] *= 2;
   }
 }
}

let menu = {
  width: 200,
  height: 300,
  title: 'Menu'
};
multiplyNumeric(menu);
console.log(menu); //{width: 400, height: 600, title: 'Menu'
___________________________________________________________________
//Задача №11
//Напишіть ф-цію яка перевіряє являється елемент саме простим об'єктом, а не масивом чи null 
const isPlainObject = (el) => typeof el === 'object' 
&& !Array.isArray(el) 
&& el !== null;

let obje = {
  a: 5,
};
let arra = [1, 2, 3];

console.log(isPlainObject(obje)); //true
console.log(isPlainObject(arra)); //false
console.log(isPlainObject(null)); //false
___________________________________________________________________
//Задача №12
//MakePairs
/* Напишіть ф-цію, яка повертає вкладений масив типу 
[[key, value], [key, value]] */

//1.
const makePairs = (object) => Object.entries(object);

//2.
const makePairs2 = (object) => 
Object.keys(object).map((el) => [el, object[el]]);

//3.
const makePairs3 = (object) => {
  const result = [];

  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      result.push([prop, object[prop]]);
    }
  }
  return result;
};

const data = {a: 1, b: 2};
console.log(makePairs(data)); //[['a', 1], ['b', 2]]
console.log(makePairs2(data)); //[['a', 1], ['b', 2]]
console.log(makePairs3(data)); //[['a', 1], ['b', 2]]
___________________________________________________________________
//Задача №13
//Калькулятор
/* створ об'єкт calculator з 3 методами:
-read() - читати. Запитує два значення і зберігає їх як властивості об'єкта
-sum() - сумувати. Повертає суму збережених значень
-mul() - умножити. Перемножує збережені значення і повертає р-тат */

let calculator = {
  sum () {
    return this.a + this.b;
  },
  mul () {
    return this.a * this.b;
  },
  read () {
    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');
  }   
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
___________________________________________________________________
//Задача №14
//Ланцюн викликів
/* Є об'єкт  ladder (сходи), який дозволяє підійматись і спускатись */
let ladder = {
  step: 0,
  up () {
    this.step++;
    //Дописуємо
    return this;
  },
  down () {
    this.step--;
    //Дописуємо
    return this;v
  },
  showStep: function () { // показує поточну сходинку
    console.log(this.step);
    //Дописуємо
    return this;
  }
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); //1
// ladder.down();
// ladder.showStep(); //0

//Потрібно змінити код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюгу. Для цього потрібно дописати  return this;  такий підхід широко використувається в бібліотеках JS
ladder.up().up().down().showStep().down().showStep();  //1, 0
___________________________________________________________________
//Задача №15
//Дві ф-ції - один об'єкт
//Чи можливо створити ф-ції А і В, щоб new A() == new B() ?
let object = {};
function A () {
  return object;
}
function B () {
  return object;
}
console.log(new A() == new B()); //true
/* Можливо, так як ф-ція повертає об'єкт, то new поверне його замість this.
Таким чином вони можуть повертати один і тойже зовнішній оприділений об'єкт */___________________________________________________________________
//Задача №16
//Створіть калькулятор за допомогою конструктора new Calculator
/* Створіть ф-цію - конструктор Calculator, яка створює об'єкт з трьома методами:
- read() - запитує два значення за допомогою prompt і зберігає значення в властивостях об'єкта
- sum() - повертає суму цих властивостей
- mul() - повертає перемножені значення цих властивостей*/

function Calculator () {
  this.read = function () {
   this.a = +prompt('a?', '') 
   this.b = +prompt('b?', '');
  }
  this.sum = function () {
    return this.a + this.b ;
  } 
  this.mul = function () {
    return this.a * this.b ;
  } 
  
}

let calculator1 = new Calculator();
calculator1.read();
// Візбмемо число 5
console.log('Sum = ' + calculator1.sum()); //Sum = 10
console.log('Mul = ' + calculator1.mul()); //Mul = 25
___________________________________________________________________
//Задача №17
//Створити new Accumulator
/* Створіть ф-цію конструктор  Accumulator(startingValue).
Об'єкт який вона створює повинен уміти:
- Зберігати поточне значення у властивості value. Початкове значення встановлюється в оргументі конструктора startingValue
- Метод read() повинен використовувати prompt для считування нового числа і додавати його до  value
Властивість value має предстваляти собою суму всіх введених чисел, з урахуванням початкового значення startingValue*/
function Accumulator (startingValue) { 
  this.value = startingValue;

  this.read = function () {
    this.value +=  +prompt('Скільки потрібно додати ?');
  };
}
let accumulator = new Accumulator(1);
//Додає введене користувачем значення до поточного значення
accumulator.read(); 
accumulator.read();
//Сума введених значень
console.log(accumulator.value); //11
___________________________________________________________________
//Задача №18
/* 
Доповними об'єкт методами для отримання імені:
  - компанії
  - сео
  - співробітника
  Кращє робити методи на рівні співробітників
  */
const company = {
  name: 'OOO JOJO',
  
  employees: [
    {
      name: 'Эйсидиси',
      getName: function () {
        return this.name;
  },
    }
  ],

  ceo: {
    name: 'Карс',
    //контекст this не втрачається, так як nameCEO метод даного об'єкта ceo. Не принципово що об'єкт має батьківський об'єкт, головне що метод викликається саме для ceo
    getName: function () {
    return this.name;
    }
  },
  getName: function () {
    return this.name;
  },
  //моє рішення
  /* nameEmployees: function () {
    const employeesNames = company.employees.map(function(employees){
      console.log(this.name)
    }, company.employees[0]);
  } */
};

console.log(company.getName()); //OOO JOJO
console.log(company.ceo.getName()); // Карс
console.log(company.employees.map(employees => employees.getName())); //['Эйсидиси']
___________________________________________________________________
//Задача №19
/* Створіть об'єкт користувача з паролем.
За допомогою ф-ції нищє видаліть пароль зробив ф-цію скидання пароля */
function removePassword(reset) { //ф-ція скидання пароля
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

const userResetPassword = {
  name: 'Popa',
  password: 'GhkYbmg5LHU'
};

//Вказуємо на аргумент this і дефолтний аргумент, так як ми хочемо скинути пароль, true
const resetUserPassword = removePassword.bind(userResetPassword, true);
resetUserPassword();
console.log(userResetPassword); //{name: 'Popa', password: undefined}
___________________________________________________________________
//Задача №20
___________________________________________________________________