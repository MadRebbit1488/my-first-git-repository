
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