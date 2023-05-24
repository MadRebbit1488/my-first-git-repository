/* Методи:
- call / apply (самотстійне управління this) 
- BIND*/
/*
Використовується для доступу до інфо в середині об'єкта. 
Методи посилаються на об'єкт через this
Значення this- це об'єкт перед крапкою, який викор для виклику метода.
Не фіксований, його значення вираховується в момент виклику метода і не залежить від того де був оголошений цей метод, а від того який об'єкт викликає його. Це збільшує гнучкість, так як ф-ція може бути повторно використана в якості метода у різних об'єктів
*/
//Приклад:
let user = {
  name: 'John',
  age:30,

  sayHi () {
    //this - це поточний об'єкт
    console.log(this.name); //аналогічно user.name
    console.log(this.age); //аналогічно user.age
  } 
};
user.sayHi(); // John, 30
/* 
Під час виконання коду user.sayHi() значенням this буде являтись user (силка на об'єкт user ) .

Метод this доцільніше використовувати, тому що якщо потрібно буде скопіювати силку на об'єкт user в інщу змінну, admin = user і перезаписати змінну user чимось іншим, тоді буде доступ до неправильного об'єкта при виклику метода із admin
*/

//this можна використовувати в ф-ціях, навіть якщо це не метод об'єкта, але this не має значення поки ф-ція не буде викликана
//Приклад: одна і таж ф-ція назначена двум об'єктам і має різне значення this при виклиці

let user3 = {name: "John"};
let admin = { name: "Admin" };

function sayHi () {
  console.log(this.name);
}
//викор одну і туж ф-цію в двох об'єктах
user3.f = sayHi;
admin.f = sayHi;
//this всередині ф-ції- це об'єкт перед крапкою
user3.f(); // John
admin.f(); //  Admin
admin['f'](); // Admin (немає різниці між крапкою і дужками для доступу до об'єкта)
// Якщо ф-цію викликати синтаксисом метода obj.method(), то підчас виклику "f", this – це obj


/* 
Стрілкові ф-ції не мають свого this . Якщо ми посилаємось на this всередині такої ф-ції, то воно береться із зовнішньої нормальної ф-ції
*/
let user4 = {
  firstName: 'Ilya',
  sayHi () {
    let arrow = () => console.log(this.firstName);
    arrow(); //Наскільки я розумію, це виклик ф-ції
  }  
}
user4.sayHi(); // Ilya
/* Дана особливість корисна коли потрібно мати окреме this, взяте із контексту*/


//Виклик без об'єкта: this == undefined
function sayHello () {
  console.log(this);
}
console.log(sayHello());  //undefined
/* Якщо всередині ф-ції використовується this, то вона очікує що буде викликана в контексті якогось об'єкта. 
Інакше в суровому режимі це викличе помилку. В несуровому режимі значенням this буде глобальний об'єкт */

_____________________________________________
/* This - це змінна, яка створюється для кожного контексту виконання. Вона вказує на власника цієї ф-ції
this не статичний і визначається тільки при виклику ф-ції в залежності від того, як вона викликана. Викликали, отримали this і тоді ми розуміємо хто це 
Яким буває this в залежності від місця звернення:
- Звертаючтсь в методі об'єкта, this завжди буде вказувати на цей метод. Те саме актуальне для класів
- function - в рамках ф-ції this буде неоприділений(undefined), тому що ми не розуміємо який тут this
- arrow func - this буде вказувати на батьківсткий scope. Так як стрілкові ф-ції не мають свого this
- event listener - вказує на DOM дерево до якого вони прикріплені

Приклад використання this*/

//В верхньому рівні приймає значення вікна
console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//this == window тобто всьому вікну в якому виконується програма

//ф-ція додавання числа
//Є this і він undefined
function addNum (num1, num2) {
  console.log(this); //undefined
  return num1 + num2;
} 

//не this цієї ф-ції, бере його зовні
const addNum2 = (num1, num2) => {
  console.log(this); //Window {window: Window, se... location: Location, …}
  return num1 + num2;
} 
addNum();
addNum2(); 

//this в ф-ції вказує на об'єкт
//this став об'єктом не через те що ф-цію знаходиться до нього, а тому що ф-ція викликана в цьому об'єкті 
const user1 = {
  name: 'Pypa',
  surname: 'Pypkina',
  getFullName: function () {
    console.log(this);
    return this.name + ' ' + this.surname;
  }
}
user1.getFullName(); //{name: 'Pypa', surname: 'Pypkina', getFullName: getFullName() name: "Pypa"surname: "Pypkina"}

//Створюємо нового користувача
const user2 = {
  name: 'Pipa',
  surname: 'Pipkina',
};
user2.getFullName = user.getFullName; //копіюємо метод
user2.getFullName(); //name: 'Pipa', surname: 'Pipkina', getFullName: ƒ ()name: "Pipa",surname: "Pipkina"}
/* При виклику getFullName у user2, this тепер у user2 , а не в user1
this приймає своє значення тільки тоді коли ми викликаємо метод в run time
*/

//Витягуємо метод із об'єкта
//Беремо метод getFullName і перекидаємо в константу. Тепер константа getFullName містить ф-цію  яка виводить console.log(this);
const getFullName = user2.getFullName;
//Викликаємо
getFullName(); //undefined i TypeError
//undefined тому що метод стає звичайною ф-цією 
//TypeError тому що в this немає ні імені ні прізвищя, тобто ніяких значень

_____________________________________________
//Контекст в методах
//Повердінка звичайних і стрілкових ф-ції в контексті об'єкта

const usEr = {
  firstName: 'Pepa',
  lastName: 'Pigles',
  age: 24,
  //Метод який виводить якусь інфо
  getUserInfo: function () { // нічього не приймає просто працює із this
    console.log(this); //firstName: 'Pepa', surname: 'Pigles', age: 24, getUserInfo: ƒ, getUserInfoArrow: ƒ} приймає об'єкт
    console.log(`${this.firstName}  ${this.lastName}`);
    
    //Ф-ція canDrink знаходиться всередині звичайної ф-ції яка має this і сама ф-ція canDrink не відноситься нідоякого об'єкта і її this == undefined.ТОму ми маємо помилку доступу до властивості age
    function canDrinks () {
        if (this.age >= 18) {
            console.log("Mojna");
          } else {
              console.log("Ne Mojna");
            }
          }
          canDrinks();  //TypeError
        
    //Щоб вивести інфо потрібно використати стрілкову ф-цію
    //Як тільки ми виористаємо стрілкову ф-ції всередині звичайної ф-ції, вона бере контекст із зовнішнього лексичного оточення, яким являється ф-ція getUserInfo яка має свій this який посилається на об'єкт. І це працює. Тому доступ до this.age буде коректиним і розрахунок буде правильним
    //Тому якщо потрібно використати ф-цію всередині метода і не втратити контекст this, то найкращє використати arrow func
    const canDrink = () => {
      if (this.age >= 18) {
        console.log("Mojna");
      } else {
        console.log("Ne Mojna");
      }
    }
    canDrink(); //Mojna
  },

  //стрілковий метд
  //В стрілкових ф-цій немає this, тому вона бере його із лексичного оточення. А об'єкт знаходиться в глобальному контексті
  getUserInfoArrow:  ()  => {
    console.log(this); //Window {window: Window, self: Window...
    console.log(`${this.firstName}  ${this.lastName}`);
  }
}
usEr.getUserInfo(); //Pepa  Pigles
usEr.getUserInfoArrow(); //undefined undefined

//Якщо написати просто name, JS виведе тільки один undefined, так як name це зарезервована застрівша властивість, яка зараз нічього не означає . Це старе ім'я оточення або чьогось такого яке було присутнє в мові

_____________________________________________

//Управління THIS

//EOL(and hands object literal) для методів
const b = 1;
const a = {
  b,
  getB: function () {
    return this.b;
  },
  //скорочена версія getB
  //Замість того щоб обозначати getB як властивість з ф-цією, ми кажемо що getBAlt це і властивість і назва яка приймає метод і обозначення того що далі піде ця ф-ція
  getBAlt () {
    return this.b;
  }
}
console.log(a.getB()); //1
console.log(a.getBAlt()); //1




