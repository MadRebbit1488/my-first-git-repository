//Задача 1 
//Отимати в змінну елемент з атрибутом data-say-hi і прочитати значення цього атрибуту
{/* <div data-say-hi="yes">Привіт!</div> */}

//Задача 2
//Отримати в змінну елемент з текстом Йончі
{/* <ul>
  <li>Корчи</li>
  <li>Йончі</li>
</ul> */}

//Задача 3
//Отримати в змінну колекцію елементів за класом like
{/* <div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div> */}

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



//Задача 5
/* Зробити зовнішні силки оранжевими змінюючи властивість style
Знаходимо вісі зовнішні силки
Варіант 1
Використовуюючи document.querySelectorAll('a') а потім відфільтровуємо непотрібне
<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  let links = document.querySelectorAll('a')
  for(let link of links) {
    let href = link.getAttribute('href')
    if(!href) continue;                   немає атрибута
    if(!href.includes('://')) continue;   немає протокола 
    if(href.startsWith('http://internal.com/test')) continue;     внітрішня силка
    link.style.color = 'orange'
  }
</script>

Використовується link.getAttribute('href') а ек link.href тому що потрібне саме значення з HTML

Варіант 2 
Додається перевірка на селектор

<script>
Знаходимо всі силки, атрибут href у яких містить :// і прицьому href  не починається на http://internal.com
  let selector = 'a[href*="://"]:not([href^="http://intrnal.com"])';
  let links = document.querySelectorAll(selector);
  links.forEach(link => link.style.color = 'orange')
</script> */



//Задача 6
/* createTextNode vs innerHTML vs textContent
Є порожній DOM-елемент elem і рядок text. Які методи із 3 працюють однаково?
1.elem.append(document.createTextNode(text))
2.elem.innerHTML = text
3.elem.textContent = text

<div id="elem1"></div>
  <div id="elem2"></div>
  <div id="elem3"></div>

  <script>
    let text = '<b>Текст</b>'
    elem1.append(document.createTextNode(text))         <b>Текст</b>
    elem2.innerHTML = text
    elem2.textContent = text                            <b>Текст</b>
  </script>
*/




//Задача 7
/* Створіть ф-цію clear(elem) яка видаляє весь вміст із  elem

<ol id="elem">
    <li>Hello</li>
    <li>Word</li>
  </ol>

  Мій варіант
  <script>
    function clear(elem){
      let clearLi = document.getElementById('elem');
      clearLi.remove();
    }
    clear(elem)
  </script>
  
  Простіший варіант
    function clear(elem){
      elem.innerHTML = ''
    }
    clear(elem)

    
  Щє варіант
  function clear(elem){
    while(elem.firstChild){
      elem.firstChild.remove();
    }
  }
  clear(elem)*/








  ______________________________________________
  //Задача 8
  /* Виклик table.remove() видаляє таблицю з документа, але залишається текст "aaa". Так відбувається тому що в середині <table> не можуе бути тексту, так як в відповідності до специфікації допускаються тільки табличні теги і браузер показує "aaa" до <table>. Тому при видалені таблиці текст залишається

  <table id="table">
    aaa
    <tr>
      <td>Тест</td>
    </tr>
  </table>

  <script>
    console.log(table)      виводить  ідентифікатор таблиці
    table.remove()
  </script> */


  ______________________________________________
   //Задача 9
/*Напишіть інтерфейс для створення списку
Для кожного пункту:
1. Запитуйте вміст пункту у користувача за допомогою prompt
2. Створюйте елемент <li> і додавайте його до <ul>
3. Продовжуйте до тих пір, поки користувач не відмінить ввід(натисненням клавіші Esc або введе порожній рядок )

Всі елементи мають створюватись динамічно. Якщо користувач вводить HTML теги вони мають оброболятись як текст
<h1>Створити список</h1>
<script>
    let ul = document.createElement('ul');
    document.body.append(ul);

    while(true){
      let data = prompt('Введфть текст для списка', '')

      if(!data){
        break;
      }
      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }
  </script>       */



______________________________________________
//Задача 10
/* Створення дерева із об'єктів
Потрбіно написати ф-цію  createTree яка створить вкладений список ul/li із об'єктів

1. Рішення з innerHTML
<div id="container"></div>
  <script>
    let data = {
        "Рыбы": {
          "форель": {},
          "лосось": {}
        },
        "Деревья": {
          "Огромные": {
            "секвойя": {},
            "дуб": {}
          },
          "Цветковые": {
            "яблоня": {},
            "магнолия": {}
          }
        }
      };
      function createTree (container, obj) {
        container.innerHTML = createTreeText(obj);
      }
      function createTreeText(obj) { окрема рекурсивна ф-ція
        let li ='';
        let ul;
        for(let key in obj) {
          li += '<li>' + key + createTreeText(obj[key]) + '</li>';
        }
        if(li){
          ul = '<ul>' + li + '</ul>';
        }
        return ul || '';
      }
    createTree(container, data);
  </script>


  2. Рішення через DOM

  function createTree (container, obj) {
        container.append(createTreeDom(obj));
      }

      function createTreeDom(obj) {
        Якщо немає дочірніх елементів, то виклик повертає undefined і елемент  <ul>  не буде створено
        if(!Object.keys(obj).length) return;
        let ul = document.createElement('ul');

        for(let key in obj) {
          let li = document.createElement('li');
          li.innerHTML = key;

          let childrenUL = createTreeDom(obj[key]);
          if(childrenUL) {
            li.append(childrenUL);
          }
          ul.append(li);
        }
        return ul;
      }
      
      let container = document.getElementById('container')
      createTree(container, data);    */


______________________________________________
//Задача 11
/* Вивід спису потомків дерева. Є дерево організоване в вигляді вкладених списків  ul/li
Потрібно написати код який додасть кожному елементу списка <li> к-сть вкладених в нього елементів. Шоб додати текст до кожного <li> можна змінити текстовий вузол data

<ul>
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
    let lis = document.getElementsByTagName('li');
    for(let li of lis) {
      Отримуємо к-ть всіх  <li> нижче цього  <li>
      let descendantsCount = li.getElementsByTagName('li').length;
      if(!descendantsCount) continue;
      додаємо безпосередно до текстового вузла
      li.firstChild.data += ' [' + descendantsCount + ']';
    }
*/

______________________________________________
//Задача 12
/* Створити колендар у вигляді таблиці
Потрібно написати ф-цію createCalendar(elem, year, month). Виклик ф-ції повинен створювати календар для заданого місяця month в році year  і вставити його в elem. 
Календар має бути таблицею де тиждень - <tr>, а день - <td>. В таблиці має бути заголовок з назвою днів тижня, кожен день - <th>, першим днем тижня має бути понеділок.

Рішення:
Потрібно згенерувати таблицю в вигляді рядка "<table>...</table>" а потім присвоїти в innerHTML
Алгоритм:
- Створити заголовок тиблиці з <th> з іменами днів тижня
- Створити об'єт дати d = new Date(year, month-1). Це перший день місяця (з урахуванянм того що місяць в JS починається з 0)
- Ячейки першого рядка порожні віж початку і до дня тижня d.getDay(), з якого починається місяць. Заповним <td></td>.
- Збільшити день в d: d.setDate(d.getDate()+1). Якщо d.getMonth() ще не в наступному місяці, то доодамо нову ячейку <td> в календар. Якщо це неділя, то додамо новий рядок «</tr><tr>»
- Якщо місяць закінчився, але рядок таблиці щє не заповнений, додамо до нього порожні <td>, щоб зробити в колендарі гарні порожні квадрати

<head>
  <style>
    table {
      border-collapse: collapse;
    }
  
    td,
    th {
      border: 1px solid black;
      padding: 3px;
      text-align: center;
    }
  
    th {
      font-weight: bold;
      background-color: #E6E6E6;
    }
  </style>
</head>
<script>
  function createCalendar(elem, year, month) {
    let mon = month - 1; //Місяці ідуть від 0 до 11
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    Відступи для першого рядка з понеділка да першого дня місяця
    for(let i=0; i<getDay(d); i++){
      table+='<td></td>'
    }
    <td> ячейуки
    while(d.getMonth()==mon){
      table += '<td>' + d.getDate() + '</td>';
      if(getDay(d) % 7 == 6){
        table += '</tr><tr>';
      }
      d.setDate(d.getDate()+1);
    }
    Додати порожню ячейку якщо це потрібно 30 31 * * *
    if(getDay(d) !=0){
      for(let i=getDay(d); i<7; i++){
        table += '<td></td>';
      }
    }
    Закрити таблицю
    table += '</tr></table>';
    elem.innerHTML = table;
  }

  function getDay(date){ Отримуємо номер дня тижня
    let day = date.getDay();
    if(day == 0) day = 7;  робить неділю (0) останнім днем
    return day -1;
  }
  createCalendar(calendar, 2012, 9)
</script>     */




______________________________________________
//Задача 13
//Кольоровий годинник з використанням setInterval
/* JS має тільки оновлювати час в елементах
<head>
  <style>
    .hour{
      color: red;
    }
    .min{
      color: green;
    }
    .sec{
      color: blue;
    }
  </style>
</head>
<body>
  <div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>
  <script>
    let timerId;
    function update(){
      let clock = document.getElementById('clock');
      let date = new Date();  //кожного разу отримуємо поточну дату
      let hours = date.getHours();
      if(hours<10) hours = '0' + hours
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if(minutes<10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if(seconds<10) seconds + '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart(){
      Встановлювати новий інтервал тільки в тому випадку, якщо годинник зупинений. В іншому випадку потрібно було б приписати силку timerID на інтервал виконання і ніколи б більше не змогли зупинити годинник
      if(!timerId){
        timerId = setInterval(update, 1000);
      }
      update();
    }
    function clockStop(){
      clearInterval(timerId);
      timerId = null;
    }
    </script>
  <input type="button" onclick="clockStart()" value="Старт">
  <input type="button" onclick="clockStop()" value="Стоп">
</body>
*/


______________________________________________
//Задача 14
/* Вставити HTML в список 
Потрібно написати код для вставки <li>2</li><li>3</li> сід 2 <li>:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>

Рішення:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>

<script>
  let li = document.getElementsByTagName('li');
  one.insertAdjacentHTML('afterend','<li>2</li><li>3</li>')
</script>     */


______________________________________________
//Задача 15
/* Сортування таблиць, потрібно написати код для сортуавнян по стовбцю "name"

<table id="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Smith</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Pete</td>
      <td>Brown</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Ann</td>
      <td>Lee</td>
      <td>5</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

<script>
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows)
</script>       */ 

______________________________________________
//Задача 16
//Створити увідомлення
/* Потрібно написати ф-цію showNotification(options), яка створює увідомлення:  <div class="notification"> з заданим вмістом. Увідомлення повинно автоматично зникнути через 1.5 секунди

<style>
  .notification {
  position: fixed;
  z-index: 1000;
  padding: 5px;
  border: 1px solid black;
  font-size: 20px;
  background: white;
  text-align: center;
  }
  .Welcome {
    background: #b80000;
    color: yellow;
  }
</style>

<h2>Увідомлення знаходидться справа</h2>
  <p>Багато тексту</p>
  <script>
    function showNotification({ top = 0, right = 0, className, html }){
      let notification = document.createElement('div');
      notification.className = "notification";

      if(className){
        notification.classList.add(className);
      }
      notification.style.top = top + 'px';
      notification.style.right = right + 'px';
      notification.innerHTML = html;
      document.body.append(notification);
      setTimeout(() => notification.romove(), 500);
    }
    Показує увідомлення з текстом "Hello" в правій верхній частині вікна
    let i = 1;
    setInterval(() => {
      showNotification({
      top: 10, 
      right: 10, 
      html: 'Hello ' + i++,   HTML увідомлення
      className: 'Welcome'   додатковий необов'язковий клас для div
      });
    }, 500)
  </script>



*/