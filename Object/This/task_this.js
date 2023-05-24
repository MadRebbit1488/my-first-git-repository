//Задача №1
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
____________________________________________________________
//Задача №2
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
____________________________________________________________
//Задача №3
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
____________________________________________________________
//Задача №4
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

____________________________________________________________
//Задача №5
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

____________________________________________________________
//Задача №6
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
____________________________________________________________
//Задача №7
/* 
Створити ф-цію користувача. яка бере за основу userInfo і за разунок замикання створює новий об'єкт, з яким можна працювати як user1().increse(100) */

const userInfo = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  }
}
function user() {
  const userObj = {
    balance: 0,
    operations: 0,
    increse(sum) {
      this.balance += sum;
      this.operations++;
    }
  };  
  //щоб створити замикання потрібно повернути нову ф-цію
  return function () {
    return userObj;
  }
}
//Таким чином кожного разу при виклику user ми повертаємо анонімну ф-цію і ми можемо на ній кожного разу звертатись до об'єкта який знаходиться в замиканні
const user11 = user();
//Отримуємо всі властивості об'єкта який лежить в замиканніuser1().increse(100);
user11().increse(100);
console.log(user11()); //{balance: 200, operations: 2, increse: ƒ}

const user2 = user();
user2().increse(10);
console.log(user2()); //{balance: 10, operations: 1, increse: ƒ}
/* const userObj = userInfo  якщо зробити ось так, то ми буде просто змінювати один і тойже баланс по силкі в heap
Тому потрібно використовувати не силку, а новий об'єкт */
____________________________________________________________
//Задача №8
//Меже бути присутня на співбесіді
/* Написати ф-цію bind
Приклад роботи:
*/

function bind(contex, func) {
  return function(...args) { // отримуємо масив за допомогою spread оператора
    func.apply(contex, args); //1 -  контекст, 2 - масив параметрів
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
  name: 'Pypa',
  age: 22,
  job: 'Frontend',
};

const person2 = {
  name: 'Lypa',
  age: 19,
  job: 'SMM',
};

bind(person1, logPerson)(); //Person: Pypa, 22, Frontend
bind(person2, logPerson)(); //Person: Lypa, 19, SMM
____________________________________________________________


//Задача №9


//Задача №10