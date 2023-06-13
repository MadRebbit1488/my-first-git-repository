//Задача 1 
//Отимати в змінну елемент з атрибутом data-say-hi і прочитати значення цього атрибуту
<div data-say-hi="yes">Привіт!</div>

//Задача 2
//Отримати в змінну елемент з текстом Йончі
<ul>
  <li>Корчи</li>
  <li>Йончі</li>
</ul>

//Задача 3
//Отримати в змінну колекцію елементів за класом like
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>

//Задача 4
//Куди додався <li>Текст</li> ?
//JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
  'beforeend',
  <li>Текст</li>
);
//HTML
<ul>
  <li>Пункт №1</li>
  <li>Пункт №2</li>
</ul>