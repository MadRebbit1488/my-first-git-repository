
//Задача 1
//*Приховати елемент при натисканні кнопки
/* Потрібно додати JS до кнопки button, щоб при натисканні едемент <div id="text"> зникав
Моє рішення:
<input type="button" id="hider" value="Натисни мене, щоб сховати текст">
<div id="text">Text</div>
<script>
  hider.addEventListener('click', function(){
    const elem = document.querySelector('#text');
    elem.hidden = true;
  });
</script>
Рішення з підручника
<input type="button" id="hider" value="Натисни мене, щоб сховати текст">
<div id="text">Text</div>
<script>
  document.getElementById('hider').onclick = function(){
  document.getElementById('text').hidden = true;
  }
</script>       */



___________________________________________________________________________
//Задача 2
//*Сховати себе
/* Потрібно створити кнопку, яка буде приховувати себе при натиснені
Моє рішення
<input type="button" id="hider" value="Кнопка">
<script>
  document.getElementById('hider').onclick = function(){
  document.getElementById('hider').hidden = true; 
  }
</script>
Рішення з підпучника
<input type="button" onclick="this.hidden=true" value="Кнопка">
*/




___________________________________________________________________________
//Задача 3
//*Потрібно пересунути м'яч по полю
/* М'яч має пересуватись при клікі на поле 
Рішення:
Спочатку потрібно вибрати метод позиціонування м'яча. Не варто використовувати position:fixed, оскільки прокрутка сторінки буде переміщювати м'яч з поля.
Правильніше використати position:absolute, і щоб зробити позиціонування надійнішим, зробити поле  (field)  позиціонованим
Так мяч буде позиціонований відносно поля

<style>
    #field {
      width: 200px;
      height: 150px;
      border: 10px solid black;
      background-color: #00FF00;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    #ball{
      position: absolute;
      left: 0;   по відношенню до найближчього розміщеного предка
      top: 0;
      width: 40px;
      height: 40px;
      transition: all 1s;  CSS-анімація для значень left/top, робить пересування м'яча плавним
    }
  </style>


Потрібно назначитт коректне значення ball.style.left/top. Так як вони містять координати відносно поля
У нас є значення event.clientX/clientY - координати натискання миші відносно вікна браузера. Щоб отримати значення left для мяча після натискання мишки відносно поля, ми повинні із координат натискання миші вирахувати координати лівого края поля і ширину межі
let left = event.clientX - fieldCoords.left - field.clientLeft;
Значення ball.style.left означає лівий край елемента(м'яча). І якщо назначити такий left для м'яча, тоді його ліва межа, а не центра, буде під курсором миші
Потрібно здвинути м'яч на половину  його висоти вверх і половину його ширини в ліво, щоб центр м'яча точно співпадав з точкою натискання миші
В р-таті значення для left буде таким
let left =  event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2;
Вертикальна коордиднати буде вираховуватись по тійже логіці.
Варто пам'ятати, що ширина і висота м'яча повинна бути відома в той момент, коли ми отримуємо значення ball.offsetWidth. Це значення може задоаватись HTML або CSS


<div id="field">
  <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  . . . .
</div>
<script>
field.onclick = function (event) {
  //Координати м'яча відносно вікна браузера
  let fieldCoords = this.getBoundingClientRect();
  //М'яч має абсолютне позиціонування (position:absolute), поле відносне (position:relative). Таким чином, координати м'яча розраховуються відносно внутрішнього, верхнього лівого кута
  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };
  //Заборона виходити за верхньо межу поля
  if (ballCoords.top < 0) ballCoords.top = 0;
  //Заборона переходити за ліву межу поля
  if (ballCoords.left < 0) ballCoords.left = 0;
  //Заборона переходити за праву межу поля
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  //Заборона переходити за нижню межу поля
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}
</script>
*/





___________________________________________________________________________
//Задача 4
//*Створити розгортаєме меню
/* Створити меню яке при натисканні відкриється або закриється
Початкова розмітка:
  ▶ ▼ Сладости (нажми меня)!
  <ul>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>
?HTML/CSS
ДЛя початку потрібно створити розмітку HTML/CSS меню.
Меню - це окремий графічний компонент на сторінці, так що його потрібно винести в окремий DOM-елемент.
Для заголовку кращє використовувати <span>, так як <div> як блочний елемент має приховану властивість display:block, а значить має ширину 100%.
Таким чином, якщо задати обробник подій onclick, то він буде спрацьовувати по кліку по всі ширині поля.
Тег <span>  - це рядковий елемент, за замовчуванням має властивість display: inline, який займає рівно стільки місця, скільки займає сам текст
?Перемикання меню
Перемикання меню повинно змінювати стрілку і приховувати або показувати список елементів меню.
Це все опрацьовується засобами CSS. За допомогою JS ми будемо відмічяти поточний стан меню, додаючи або видаляючи клас .open без якого меню буде зачинено
<style>
  .menu ul{
    margin: 0;
    list-style: none;
    padding-left: 20px;
    display: none;
  }
  .menu .title {
      font-size: 18px;
      cursor: pointer;
  }
  .menu .title::before{
    content:'▶ ';
    font-size: 80%;
    color: green;
  }
  .menu.open .title::before{
    content:'▼ ';
  }
  .menu.menu.open ul{
    display: block;
  }
</style>
<div id="sweeties" class="menu">
  <span class="title"> Солодощі (натисни мене)!</span>
  <ul>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>
</div>
<script>
  let menuElem = document.getElementById('sweeties');
  let titleElem = menuElem.querySelector('.title');

  titleElem.onclick = function(){
    menuElem.classList.toggle('open');
  }
</script>     */


___________________________________________________________________________
//Задача 5
//*Додати кнопку закриття
/* Є список повідомлень. За допомогою JS для кожного повідомлення потрібно додати в верхній правий кут кнопку закриття.
Щоб додати кнопку закриття можна використовувати або position:absolute(і зробити плитку (pane) position:relative) або float:right. Перевага варіанта з float:right в тому, що кнопка закриття ніколи не перекриє текст, але варіант position:absolute дає більше свободи для дій

Для кожної плитки код буде виглядати ось так:
pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');

Елемент <button> стає pane.firstChild, таким чино можна додати в нього обробник подій:
pane.firstChild.onclick = () => pane.remove();

Стилі :
<style>
  body {
  margin: 10px auto;
  width: 470px;
}
h3 {
  margin: 0;
  padding-bottom: .3em;
  padding-right: 20px;
  font-size: 1.1em;
}
p {
  margin: 0;
  padding: 0 0 .5em;
}
.pane {
  background: #edf5e1;
  padding: 10px 20px 10px;
  border-top: solid 2px #c4df9b;
  position: relative;
}
.remove-button {
  position: absolute;
  font-size: 110%;
  top: 0;
  color: darkred;
  right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
Скрипт/розмітка:
<div>
  <div class="pane">
    <h3>Кобилка</h3>
  </div>
  <div class="pane">
    <h3>Осел</h3>
  </div>
  <div class="pane">
    <h3>Кіт</h3>
  </div>
</div>
<script>
  let panes = document.querySelectorAll('.pane');
  for(let pane of panes){
    pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
    Кнопка стає першим нащядком плитки(pane)
    pane.firstChild.onclick = () => pane.remove();
  }
</script>     */



___________________________________________________________________________
//Задача 6
//*Карусель
/*Потрібно створити карусель - стрічку зображень, яку можна гортати вліво-право натисненням на стрілку.
До неї можна додати анімацію, динамічне підвантаження і інше
Розробка структури  HTML/CSS складає 90% рішення

Стрічка зображень має бути представлена як список ul/li з картинками <img>
Потрібно розмістити стрічку всередині <div> фіксованого розміру, так щоб в один момент була видно тільки потірбна частина списку

Щоб зробити список горизонтальним, потрібно використати CSS-властивість display: inline-block для <li>.

Для тега <img> також потрібно налаштувати display, оскільки за замовчуванням він  inline. У всіх елементах типу inline резервується додаткове місце під хвости символів. І щоб його прибрати, потрібно прописати  display:block.

Для прокрутки будемо рухати <ul>. Це можна зробити по різному, наприклад назначенням CSS-властивості transform: translateX() ( кращє для виробництва) або margin-left

У зовнішнього <div> фіксована ширина, тому кращє зображення обрізати.
Вся карусель - це самостійний графічний компонент на сторінці, таким чином його кращє загорнути в окремий <div class="carousel"> і вже модифікувати стилі всередині.

Стилі:

<style>
  body {
  padding: 10px;
}

.carousel {
  position: relative;
  width: 398px;
  padding: 10px 40px;
  border: 1px solid #CCC;
  border-radius: 15px;
  background: #eee;
}

.carousel img {
  width: 130px;
  height: 130px;
делаем этот элемент блочным, чтобы убрать лишнее пространство вокруг картинок 
  display: block;
}

.arrow {
  position: absolute;
  top: 60px;
  padding: 0;
  background: #ddd;
  border-radius: 15px;
  border: 1px solid gray;
  font-size: 24px;
  line-height: 24px;
  color: #444;
  display: block;
}

.arrow:focus {
  outline: none;
}

.arrow:hover {
  background: #ccc;
  cursor: pointer;
}

.prev {
  left: 7px;
}

.next {
  right: 7px;
}

.gallery {
  width: 390px;
  overflow: hidden;
}

.gallery ul {
  height: 130px;
  width: 9999px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: margin-left 250ms;
  удаляем пустое пространство между элементами li, у которых установлен inline-block 
  http://davidwalsh.name/remove-whitespace-inline-block 
  font-size: 0;
}

.gallery li {
  display: inline-block;
}
</style>


Розмітка/скрипт
<body >
<div id="carousel" class="carousel">
  <button class="arrow prev">⇦</button>
  <div class="gallery">
    <ul>
      <li><img src="https://ru.js.cx/carousel/1.png"></li>
      <li><img src="https://ru.js.cx/carousel/2.png"></li>
      <li><img src="https://ru.js.cx/carousel/3.png"></li>
      <li><img src="https://ru.js.cx/carousel/4.png"></li>
      <li><img src="https://ru.js.cx/carousel/5.png"></li>
      <li><img src="https://ru.js.cx/carousel/6.png"></li>
      <li><img src="https://ru.js.cx/carousel/7.png"></li>
      <li><img src="https://ru.js.cx/carousel/8.png"></li>
      <li><img src="https://ru.js.cx/carousel/9.png"></li>
      <li><img src="https://ru.js.cx/carousel/10.png"></li>
    </ul>
  </div>
  <button class="arrow next">⇨</button>
</div>

<script>
  //Помічяє зображення для зрцчності розробки
  let i = 1;
  for (let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  }

  //Конфігурація
  let width = 130; // ширина картинки
  let count = 3; //Видима к-ть зображень

  let list = carousel.querySelector('ul');
  let listElem = carousel.querySelectorAll('li');

  let position = 0; //Положення стрічки прокрутки

  carousel.querySelector('.prev').onclick =
    function () {
      //Здвиг вліво
      position += width * count;
      //Останнє пересування вліво може бути не на 3, а на 2 або 1 елемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

  carousel.querySelector('.next').onclick = 
    function(){
      //Здвиг вправо
      position -= width * count;
      //Останнє пересування вправо може бути не на 3, а на 2 або 1 елемент
      position = Math.max(position, -width * (listElem.length - count));
      list.style.marginLeft = position + 'px';
    };
</script>
*/





___________________________________________________________________________
//Задача 7
{/* <style>
    form {
  background-color: green;
  position: relative;
  width: 150px;
  height: 150px;
  text-align: center;
  cursor: pointer;
}

div {
  background-color: blue;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
}

p {
  background-color: red;
  position: absolute;
  top: 25px;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0;
}

body {
  line-height: 25px;
  font-size: 16px;
}
  </style> 


Клік покаже обидва: і <code>event.target</code>, і <code>this</code> для порівняння:
  <form id="form">FORM 
    <div>DIV 
      <p>P</p>
    </div>
  </form>
<script>
  form.onclick = function(event){
    event.target.style.backgroundColor = 'yellow';
  
    setTimeout(()=>{
      console.log('target = ' + event.target.tagName + ', this = ' + this.tagName);
      event.target.style.backgroundColor = '';
    }, 300);
  }
</script>
*/}




___________________________________________________________________________
//Задача 8
//*Приховання повідомлення за допомогою делегування
/* Даний список повідомлень з кнопками для видалення  [x]. Потрібно кнопки змісити працювати
Має бути лиш один обробник на елементі-контейнера для всього

  <style>
    body {
  margin: 10px auto;
  width: 470px;
}
h3 {
  margin: 0;
  padding-bottom: .3em;
  padding-right: 20px;
  font-size: 1.1em;
}
p {
  margin: 0;
  padding: 0 0 .5em;
}
.pane {
  background: #edf5e1;
  padding: 10px 20px 10px;
  border-top: solid 2px #c4df9b;
  position: relative;
}
.remove-button {
  position: absolute;
  font-size: 110%;
  top: 0;
  color: darkred;
  right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
}
  </style>

  <div id="container">
  <div class="pane">
    <h3>Лошадь</h3>
    <p>Домашняя лошадь - животное семейства непарнокопытных.</p>
    <button class="remove-button">[x]</button>
  </div>
  <div class="pane">
    <h3>Осёл</h3>
    <p>Домашний осёл или ишак — одомашненный подвид дикого осла.</p>
    <button class="remove-button">[x]</button>
  </div>
  <div class="pane">
    <h3>Кошка</h3>
    <p>Кошка, или домашняя кошка (лат. Félis silvéstris cátus), — домашнее животное, одно из наиболее популярных.
    </p>
    <button class="remove-button">[x]</button>
  </div>
</div>

<script>
    container.onclick = function (event) {
        if (event.target.className != 'remove-button') return;
        let pane = event.target.closest('.pane');
        pane.remove();
      };
</script>     */



___________________________________________________________________________
//Задача 9
//*Дерево яке розкривається
/* Потрібно остворити дерево, яке по кліку на заголовок приховує/показує нащядків 
Вимоги: 
-Використовувати тільки один обробник подій(делегування)
-Клік поза текстом заголовку нічього не має робити

<ul class="tree" id="tree">
  <li>Животные
    <ul>
      <li>Млекопитающие
        <ul>
          <li>Коровы</li>
          <li>Ослы</li>
          <li>Собаки</li>
          <li>Тигры</li>
        </ul>
      </li>
      <li>Другие
        <ul>
          <li>Змеи</li>
          <li>Птицы</li>
          <li>Ящерицы</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Рыбы
    <ul>
      <li>Аквариумные
        <ul>
          <li>Гуппи</li>
          <li>Скалярии</li>
        </ul>
      </li>
      <li>Морские
        <ul>
          <li>Морская форель</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<script>
  //Поміщяємо всі текстові вузли в елемент <span>, він займає тільки те місце  яке необхідно для тексту
  for(let li of tree.querySelectorAll('li')){
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // Поміститт текстовий вузол в середину <span>
  }
  //Ловимо кліки повсьому дереву
  tree.onclick = function(event){
    if(event.target.tagName != 'SPAN') return;
    

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if(!childrenContainer) return; //Немає дітей

    childrenContainer.hidden = !childrenContainer.hidden;
  }
</script>       */



___________________________________________________________________________//Задача 10
//*Сортування таблтці
/* При клікі на лелемент <th> рядки таблиці мають сортуватись по відповідному стовбцю
Кожен елемент <th>  має атрибут data-type
Перший стовбець містить числа, другий - рядки. Ф-ція сортування має це враховувати. Сортування має підтримувати тільки типи  "string"  "number"

<style>
    table{
      border-collapse: collapse;
    }
    th, td{
      border: 1px solid black;
      padding: 4px;
    }
    th{
      cursor: pointer;
    }
    th:hover{
      background: yellow;
    }
</style>
<table id="grid">
    <thead>
      <tr>
        <th data-type="number">Возраст</th>
        <th data-type="string">Имя</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>Ворона</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Півень</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Жук</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Миша</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Кабан</td>
      </tr>
    </tbody>
</table>

<script>
    grid.onclick = function (e) {
        if (e.target.tagName != 'TH') return;

        let th = e.target;
        // если ячейка TH, тогда сортировать cellIndex - это номер ячейки th: 0 для первого столбца 1 для второго и т.д.
        sortGrid(th.cellIndex, th.dataset.type);
      };
      function sortGrid(colNum, type) {
        let tbody = grid.querySelector('tbody');
        let rowsArray = Array.from(tbody.rows);
        // compare(a, b) сравнивает две строки, нужен для сортировки
        let compare;
        switch (type) {
          case 'number':
            compare = function (rowA, rowB) {
              return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
          case 'string':
            compare = function (rowA, rowB) {
              return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
        }
        // сортировка
        rowsArray.sort(compare);

        tbody.append(...rowsArray);
      }
</script>
*/



___________________________________________________________________________
//Задача 11
//*Чьому не працює return false?
/* 
script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>
<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

1.  <a id="href" href="https://w3.org" onclick="return handler()">Силка на w3.org</a>

2.   <script>
    function handler(event) {
        alert("...");
        event.preventDefault()
      }
  </script>
  <a id="href" href="https://w3.org" onclick=" handler(event)">Силка на w3.org</a>
*/



___________________________________________________________________________
//Задача 12
//*Зловити перехід по посиланню
/* Потрібно зробити так, щоб при клікі на силку всередині елемента id="contents" користувачю виводилось питання про те, чи дійсно він хочє покинути сторінку, і якщо не хочє, то перервати перехід по посиланню.

Деталі: 
- Вміст #contents може бути завантажено динамічно і присвоєно за допомогою innerHTML. Так що знайти всі силки і поставити на них обробник неможна. Використовується делегування
- Вміст може мати вкладені теги, в тому числі і в середині посилань:     <a href=".."><i>...</i></a>.

Це задача на делегування.
В реалі мижна перехопити подію і створити AJAX-запит до сервера, який збереже інфо про те, по якому посиланню перейшов користувач.Або завантажити вміст і відобразити його прямо на сторінці(якщо це допустимо)

Для цього потрібно зловити подію contents.onclick і використати ф-цію confirm щоб задати питання користувачю. Хорошою ідеєю буде використання link.getAttribute('href') замість link.href для посилань.

HTML:
<fieldset id="contents">
  <legend>#contents</legend>
  <p>
    Як щодо того щоб почитати 
    <a href="https://uk.wikipedia.org" >Вікіпедію</a>
    або відвідати  <a href="https://w3.org"><i>W3.org</i></a>
  </p>
</fieldset>

Моє рішення: Я вражена, воно якось працює
  <script>
    contents.onclick = function(event){
      let confirmation = confirm('Підтвердіть дію на сторінці')
    
      let targer = event.target;
      targer.getAttribute('href');
      if(confirmation !== true) {
        return false
      };
    }
  </script>

Рішення з підручника:
  <script>
    contents.onclick = function(event){
      function handleLink(href){
        let isLeaving = confirm(`Leave for ${href}?`);
        if(!isLeaving) return false;
      }
      let target = event.target.closest('a');
      if(target && contents.contains(target)){
        return handleLink(target.getAttribute('href'));
      }
    };
  </script>
  Як це працює:
    -Визначається ф-ція handleLink яка приймає параметр href. У ф-ції створюється підтверджуюче вікно яке показує попередження з запитом  підтвердження про перехід на сторінку з URL href. 
    - За допомогою closest('a') шукається найближчий батьківський елемент типу "a" для елемента на якому відбувся клік (event.target).
    - Якщо знайдений елемент target існує і знаходиться всередині елемента з  id "contents" викликається ф-ція handleLink  з атрибутом href  елемента target
*/




___________________________________________________________________________
//Задача 13
//* Галерея зображень
/* Потрібно створити галерею зображень, в якій основне зображення змінюється при клікі на зменшений варіант. Потрібно використати делегування

Рішення в тому, щоб добавити обробник на контейнер #thumbs і відстлідковувати кліки на посиланнях. Якщо клік відбувається по посиланню <a>, тоді змінюємо атрибут src  елемента #largeImg на href  зменшеного зображення
Стилі:
 <style>
    body {
  margin: 0;
  padding: 0;
  font: 75%/120% sans-serif;
}
#largeImg {
  border: solid 1px #ccc;
  width: 540px;
  height: 600px;
  padding: 5px;
}
#thumbs a {
  border: solid 1px #ccc;
  width: 99px;
  height: 100px;
  padding: 3px;
  margin: 2px;
  float: left;
}
#thumbs a:hover {
  border-color: #FF9900;
}
#thumbs li {
  list-style: none;
}
#thumbs {
  margin: 0;
  padding: 0;
}

img{
  width: 100px;
  height: 100px;
}
  </style>

Розмітка:
 <p><img id="largeImg" src="https://i.pinimg.com/564x/54/55/87/545587f3d844627d5fe9ebdff720d918.jpg" alt="Large image" ></p>

  <ul id="thumbs">
    <li>
      <a href="https://i.pinimg.com/564x/2f/7b/09/2f7b095200f090ac547feb2d40baa8ea.jpg" title="Image 2"><img
          src="https://i.pinimg.com/564x/2f/7b/09/2f7b095200f090ac547feb2d40baa8ea.jpg" ></a>
    </li>
    <li>
      <a href="https://i.pinimg.com/564x/9f/c8/01/9fc801b1b3172a1482aad52aeef4721e.jpg" title="Image 3"><img
          src="https://i.pinimg.com/564x/9f/c8/01/9fc801b1b3172a1482aad52aeef4721e.jpg"></a>
    </li>
    <li>
      <a href="https://i.pinimg.com/564x/4b/96/07/4b9607db7edeb5b834365cb76d1b1519.jpg" title="Image 4"><img
          src="https://i.pinimg.com/564x/4b/96/07/4b9607db7edeb5b834365cb76d1b1519.jpg"></a>
    </li>
    <li>
      <a href="https://pm1.aminoapps.com/6448/0b5ca88387060e573cde640d8d3c2da9daa9000e_hq.jpg" title="Image 5"><img
          src="https://pm1.aminoapps.com/6448/0b5ca88387060e573cde640d8d3c2da9daa9000e_hq.jpg"></a>
    </li>
    <li>
      <a href="https://i.pinimg.com/564x/bc/fd/fe/bcfdfe98a7053d8aac8025d719a14b69.jpg" title="Image 6"><img
          src="https://i.pinimg.com/564x/bc/fd/fe/bcfdfe98a7053d8aac8025d719a14b69.jpg"></a>
    </li>
  </ul>

Рішення:
  <script>
    thumbs.onclick = function(event){
      let thumbnail = event.target.closest('a');
      if (!thumbnail) return;

      showTrumbail(thumbnail.href, thumbnail.title);
      event.preventDefault();
    }

    function showTrumbail(href, title){
      largeImg.src = href;
      largeImg.alt = title;
    }
  </script>

  1.На елементі з  id "thumbs" встановлюється обробник.
  2. Визначається ф-ція showTrumbail яка параметрами приймає URL(href)  зображення і назву(title ).
  3. Ф-ція встановлює значення властивостей:
        -src = href тобто URL 
        -alt = title
  4. В обробнику подій для елем thumbs спочатку встановлюється метод closest('a'), щоб знайти найближчий батьківський елемент типу "a", посилання елемента на якому відбувся клік
  5. Якщо елем thumbnail не знайдено, виконання коду припинається
  6. Якщо елем thumbnail було знайдено, виклткається ф-ція showThumbnail  з параметрами thumbnail.href і thumbnail.title
  7. Виклик event.preventDefault() запобігає стандартній поведінці кліку на посилання
*/









___________________________________________________________________________
//Задача 14