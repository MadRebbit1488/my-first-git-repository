
//Рендеринг?
//PointerEvent ? - детальна інфо про родію яка відбулась
//KeyboardEvent / keydown

/*  
DOM(Document Object Model) - це об'єктне уявлення вихідного HTML-кода документа
Завдяки йому ми можемо звертатись до  HTML елементам в JS

Завдяки DOM ньому існують фреймворки такі як: REACT, ANGULAR, VUE.
І ми можемо вживляти в сторінку необхідні елементи і маніпулювати їх значенням

DOM i API не частини JS, вони вбудовані в браузер і ми взаємодіємо із 
ними безпосередньо із JS

DOM має таку структуру:

Document  - Верхній рівень
HTML
    Head
        Meta(charset...)
        Meta(http...)
        Meta(name...)
        Title           - Text
        Script
    Body  
        Img  

В глобально скоупі є Document і об'єкт Window  
Document там знаходиться для взаємодії з IPA DOM-tree в браузері.
Далі іде корінний HTML елемент який який має мову тегів. Він має два великих вузла: Head і Body

ДЛя того щоб взаємодіяти з HTML-деревом потрібно звертатись до корінного об'єкта Document і від нього вже використовуються різноманітні методи: Вибір по ідентифікатору, класу ...
*/

/* 
При написанні CSS ми можемо вказати якийсь елемент(вибрати) через вказання CSS-селекторів:
-Клас .class
-ID   #id
-ДЛя конкретного елемента , без крапки button
*/


//Вибір елемента по CSS-селектору
//* querySelector - дозволяє вибрати якийсь елемент дерева за допомогою селектора
console.log(document.querySelector('.'));

//Отримуємо вміст об'єкту document
addEventListener('load', () => {
console.log(document.head);
}); 

const panelText = document.querySelector('.panel').innerHTML;
console.log(panelText);  // I love POPA

document.querySelector('.input').value = 'Text'; // в полі вводу на сторінці з'являється зазначений текст

_______________________________________________________________
//! Події - це сигнал від браузера про те, що щось відбулось



//!Обробка натискання мишею
//*onclick - звязує в HTML натискання на кнопку з ф-цією яка описана в скрипті
//*innerText - дозволяє задавати або отримувати вміст елемента і його нащадків. Не повертає вміст прихованих елементів
//Додавання обробки подій
//addEventListener приймає два параметра: 1 що за обробник, функція в якій будуть відбуватись події
//Обробка подій на клік
document.querySelector('.button').addEventListener('click',function(){
  //Отримуємо текст інпут
const input = document.querySelector('.input').value;
    if(!input){
    return;
    }
    //Вивід тексту. Звернення до класу panel,innerText рівний input
document.querySelector('.panel').innerText = input;
  //console.log(input); // отримуємо дані із поля вводу
  //Очищення поля вводу після натискання
document.querySelector('.input').value = '';
});

//Скорочена версія обробки подій на клік. Ф-нція викликається через HTML атрибутом onclick з вказаною ф-цією
function changeClick() {
    const input = document.querySelector('.input').value;
    if(!input){
        return;
    }
document.querySelector('.panel').innerText = input;
document.querySelector('.input').value = '';
}
/* Замість того щоб кожного разу викликати властивість яка спеціалізується на кліках, можна використовувати методи подій для виклику ф-ції із JS*/





//! Обробка подій клавіатури
/* Щоб прив'язатись до клавіші не залежно від того велика вона чи маленька, то потрібно прив'язуватись до code: Key, якщо різниця є - то до key:'буква'*/

//По 'Enter' потрібно робити сабміт форми
function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input) return;
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}

//Обробка клавіші 'Enter'
document.querySelector('.input').addEventListener('keydown', (e)=>{
    console.log(e)
    if(e.code == 'Enter'){
        submitForm()
    }
});


//Або подію можна прив'язати в HTML
<input class="input" onkeydown="inputChange(event)"></input>

function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input) return;
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}

function inputChange(){
    if(event.code == 'Enter'){
        submitForm();
    }
}


//!Стилі і класи

//*Робота через стилі
document.querySelector('.notification').style.display = 'block'
//Даний метод незручний тим, що потрібно вручну редагувати кожну властивість. Тому зазвичай кращє працювати не через стилі, а через класи
function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input) return;
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').style.display = 'block'
}

function inputChange(){
    if(event.code == 'Enter'){
        submitForm();
    }
}

//*Робота через класи
//За допомогою атрибуту style ми отримуємо доступ до всіх стилів елемента
//Те що написано в стилях має пріорітет над тим що написано в класі

//classList має набори методів, які дозволяють ним управляти
function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input) return;
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    //console.log(document.querySelector('.notification').classList) //DOMTokenList ['notification', value: 'notification']
    document.querySelector('.notification').classList.remove('notification_hidden');
    document.querySelector('.notification').classList.add('notification_active')
}

function inputChange(){
    if(event.code == 'Enter'){
        submitForm();
    }
}



//!Атрибути
//Можна напряму отримати доступ до атрибутів HTML елементів
//Атрибут це додаткова властивість яка присутня на кожномму HTM-елементі:class, onclick, id , src

function submitForm(){
    const input = document.querySelector('.input').value;
    if(!input) return;
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    //Отримуємо список класів
    document.querySelector('.notification').getAttribute('class'); //notification notification_hidden
    //Встановлюємо атрибутів
    document.querySelector('.notification').setAttribute('class', 'notification');
    //Встановлюємо свій атрибут
    document.querySelector('.notification').setAttribute('key', 1);
    //В реакті по ключам опиділяється зміна елемента
    //Атрибут завжди рдякового типу. Тму якщо потрібно отримати ідентифікатор, то варто це зробити за допомогою ф-ції типу
    document.querySelector('.notification').setAttribute('user-is', 1);
    console.log(Number(document.querySelector('.notification').getAttribute('user-is', 1))); //1
}



//Шаблонізатор Jinja
//!Динамічне додавання HTML
//Експериментуємо з div
<div class="test"></div>

const newElem = document.createElement('button');
newElem.setAttribute('user-id', 1);
newElem.classList.add('.button');
document.querySelector('.test').appendChild(newElem);

//Стало
{/* <div class="test">
    </div><button user-id="1" class="button"></button>
</div> */}

//Додаємо контент
const paneltext = 'Панель';
const panelClass = 'button'
const newElem = document.createElement('div');
newElem.setAttribute('user-id', 1);
newElem.classList.add('panel');
// newElem.innerText= 'Кнопка';
newElem.innerHTML = `<button class="${panelClass}">${paneltext}</button>`
document.querySelector('.test').appendChild(newElem);




//!local storage - локальне сховищє
/* Зберігає дані в браузері, при зміні браузера дані втрачаються. Підходить для авторизаційних токенів
Так як є DOM IPA так само є і LS IPA
localStorage знаходиться на верхньому рівні так само як і document 
Має обмежений набір методів */

//Кладемо значення
localStorage.setItem('token', 'deedne');
localStorage.setItem('token1', 1);
localStorage.setItem('token2', true)
//Отримуємо занчення з localStorage
console.log(localStorage.getItem('token')); //deedne
//Булеве значення стає рядком
let token2 =localStorage.getItem('token2', true);
console.log(typeof token2); //string
//Все в localStorage зберігається в вигляді рядка, тому об'єкти потрібно перетворювати в рядок перш ніж туди зберігати
//Видалення
localStorage.removeItem('token1')
//Очищяє Storage
localStorage.clear();


//! JSON - JavaScript Object Notation
/*
Це верхньорівневий об'єкт до якого можна звернутись
Має два методи:
    *parse - парсить якийсь JSON об'єкт, перетворюючи його в об'єкт
    *stringify - перетворює об'єкт в рядок
В JSON на відміну від об'єктів не можна ставити висячю кому, не можна використовувати одинарны лапки
Приклад JSON
*/
{
    "key": "string",
    "num": 5,
    "bool": false,
    "arr": ["s", "d"],
    "obj": {
        "innerKey": "3"
    }
}

//Щоб створити або прочитати JSON потірбно використовувати parse і передаємо валідеий рядок в вигляді JSON
const obj =  JSON.parse('{"a": 1}');
console.log(obj);  //{a: 1} Object
console.log(obj.a);  //1

//Можна передавати повноцінні об'єкти
const str = JSON.stringify(obj);
console.log(str);  //{"a":1} рядок

//JSON.stringify бере об'єкт і перетворює його в рядок, а потім класти в local storage