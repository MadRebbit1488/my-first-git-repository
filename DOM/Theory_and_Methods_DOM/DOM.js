/* 
Методи:
BOM:
-Navigator
-Location
-History

DOM:
-innerWidth - ширина вікна браузера
-innerHeight - внутрішня висота вікна

Методи:
*Властивості для переходу по дереву DOM:
-document.documentElemen - повертає елемент який є батьком документу  
-document.body - елемент body у документі.
-document.head - head елемент у документі.
-Element.firstChild -  перший дочірний вузол.
-Element.lastChild - останній дочірний вузол.
-Element.childNodes - список дочірніх вузлів елемента
-Element.hasChildNodes() - чи має елемент дочірні елементи.

*Новігація по вузлам:
-Element.previousSibling - попередній вузол у батьківському списку.
-Element.nextSibling - наступний вузол у батьківському списку.
-Element.parentNode - батьківський вузол.

*Новігація по елементам:
-Element.children - список дочірних елементів.
-Element.firstElementChild - перший дочірний елемент.
-Element.lastElementChild - останній дочірний елемент.
-Element.previousElementSibling - попередній елемент у батьківському списку.
-Element.nextElementSibling - наступний елемент у батьківському списку.
-Element.parentElement - батьківський елемент.
-Element.closest() - найближчий батьківський елемент за вказаним CSS селектором.
-Element.matches() - чи задовільняє елемент CSS селектор.
-elemA.contains(elemB) - первіряє чи є елемент нащадком

Зміна/редагування документів:
-Element.innerHTML - внутрішній HTML код елемента.
-Element.outerHTML - HTML код самого елемента і внутрішній.
-Element.textContent - текстовий вміст елемента.
-data - поверне вміст текстового вузла/коментаря 
-nodeValue - схоже з data , має невелику відмінність в специфікації
-nodeType - властивість для визначення типу DOM-вузла
-nodeName -Отримавши DOM-вузол можна дізнатись ім'я його тега 
-tagName - для вузлів елементів описує що це за вузол.

*Створення елементів і вузлів:
-document.createElement() - створює новий HTML елемент.
-document.createTextNode() - створює текстовий вузол.

*Методи вставки:
DOM-вузлів і текствих фрагментів
  -BEFORE() - перед об'єктом
  -AFTER() - після об'єкта
  -PREPEND() - вставляє елемент або текст на початку списку дочірніх елементів.
  -Element.append( app ) - вставляє елемент або текст у кунець списку дочірніх елементів
  -Elemen.replaceWith - замінює об'єкт заданими вузлами або рядками
HTML-елементів
  -Element.insertAdjacentHTML() - вставляє HTML текст у елемент.
  -Element.insertAdjacentText() - вставляє текст у елемент.
  -Element.insertAdjacentElement() - вставляє елемент у задану позицію в елемент
        Значення:
        -beforebegin - вставить HTML безпосередньо перед textElement
        -afterbegin - вставить HTML на початок textElement
        -beforeend - вставить HTML в кінець textElement
        -afterend - вставить HTML пісдя textElement

Застарівші методи:  
  -parentElem.appendChild(node)
  -parentElem.insertBefore(node, nextSibling)
  -parentElem.replaceChild(node, oldChild)
  -parentElem.removeChild(node)  
  -Document.write(html) -  додає HTML на сторінку до заваршення її завантаження.   


  

*Клонування
-Element.cloneNode() - копіює елемент.

*Видалення вузлів
-Element.remove() - видаляє елемент.

*Пошук:
-document.querySelectorAll() - повертає список всіх елементів в документі, які відповідають зазначеним селекторам.
-document.querySelector() - повертає перший елемент в документі який співпадає з вказаним селектором.
-document.getElementById() - повертає перший елемент в документі який співпадає з вказаним id.
-document.getElementsByTagName() - повертає список елементів за вказаним ім'ям.
-document.getElementsByClassName() - повертає список елементів за вказаним класом.
-document.getElementsByName() - повертає список елементів за вказаним ім'ям.

*Атрибути і властивості DOM-елементів
-Element.hasAttribute() - перевіряє чи існує атрибут у елементі.
-Element.getAttribute() - повертає значення атрибуту.
-Element.setAttribute() - задає атрибут елементу.
-Element.removeAttribute() - видаляє атрибут у елементі.
-*elem.attributes - повертає масиво подібний список ( NamedNodeMap ) всіх атрибутів елемента. Тільки для читання
- datasetНестандартні атрибути
-Синхронізація між атрибутами і властивостями
-DOM-типізація
-tagName - показує тег об'єкта
-hidden - приховати/показати елемент

Методи:
*Управління класами
-Element.className - клас елементу.
-Element.classList - , додавати, видаляти класи елемента.
          ! Властивості:
          *add() -додає новий клас
          *remove() - видаляє клас
          *toggle() - переключає клас
          *item() - повертає клас з індексом
          *contains() - перевіряє наявність вказаного класа в елементі
          *toString() - повертає рядок з класами елементу


*Управління стилями
-element.style - відриває доступ до HTML-атрибуту style
-camelCase - використовується для властивості із декількох слів
-Скидання стилів і видалення
-style.cssText - дозволяє записати відразу багато стилів, повний перезапис стилів які до цього були в даному атрибуті
-getComputedStyle(element, [pseudo]) - повертає всі стилі CSS  елементу

*DocumentFragment - спеціальний DOM-вузол, який слугує обгорткою для передачі списку вузлів
 */

//!DOM - об'єктна модель документа
/* Зв'язує JS з верстрою HTML i CSS
Оточення надає свої об'єкти і додаткові ф-ції в додаток до базових можливостей JS. Браузери дають можливісь для управління веб-сторінкою, а Node JS деякі серверні ф-ції

Браузерне оточення:

          - DOM -> Document і інше
Window    - BOM -> navigator, location, history і інше
          - JS -> Object, Array, Function і інше

*Window:
В основі всього лежить об'єкт Window який окрім того що являється глобальним об'єктом , також представляє собою вікно браузера і володіє методами для управління ним

Приклад:
*innerWidth - за допомогою метода можна отримати ширину вікна браузера

const windowWidth = window.innerWidth;
console.log(`Ширина вікна браузера: ${windowWidth}px`); //Ширина вікна браузера: 456px

!BOM:
Browser Object Model(Об'єктна модель браузера)
Це додаткові об'єкти які надаються браузером для того щоб працювати із всим окрім документів
 */
Приклад:
//*Navigator
// За допомогою об'єкта Navigator можна отмувати інфо про браузер і ОС

//Браузер
console.log(navigator.userAgent); //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36

if(navigator.userAgent.includes('FireFox')) {
  console.log('Браузер FireFox')
} else if (navigator.userAgent.includes('Chrome')) {
  console.log('Браузер Chrome') //Браузер Chrome
}
  
//платформа
console.log(navigator.platform); //Win32

//*Location
/* За допомогою даного об'єкта ми можемо отримати поточну одресу, URL або перенаправити браузер на іншу адресу */

//Отримуємо URL
console.log(location.href);  //http://127.0.0.1:5500/DOM/index.html

//Змінюємо URL
location.href = 'https://uk.javascript';


//*History
/* Даний об'єкт дозволяє управляти історіює браузера, пересувати по відвіданим раніше сторінкам */

history.back();
history.forward();

//*Об'єкти які використовуються для комунікації з користувачем: Alert, Prompt, Confirm 
// Вони виводять діалогові вікна в браузер

//!DOM - представляє собою весь вміст HTML сторінки в вигляд об'єктів які можна змінювати
/* 
DOM представляє собою деревовидну структуру сторінки, яка складається із вузлів. Кожен вузол - це об'єкт, який має свої властивості і методи.
Після того як браузер побудував DOM, він його використовує в подальших процесах, кінцевою метою яких є побудова відображення сторінки на екрані
Браузер не працює з HTML-сторінкою напряму, а будує для цього DOM дерево.
Основою  HTML документа являються теги і в відповідності з DOM кожен тег являється об'єктом.
  Вкладені теги являється дочірніми і нащадками свого батьківсього об'єкта. Текст і коментарі також об'єкти*/

/* HTML-документи представлені в браузері у вигляді дерева DOM, теги стають вузлами-об'єктами і формують структуру документа.
Текст стає текстовим вузлом.

Всі операції з DOM починаються з об'єкта document - це основна точка входу в DOM і знього можна отримати доступ до будь якого вузла

Процес переводу HTML-сторінки в DOM  виконує парсет.
DOM не являється статичною стуктурою, його можна змінювати за допомогою JS і відразу бачити зміни на екрані. ДЛЯ цього браузер надає API.
Процес перетворення HTML в DOM і вивід на екран називається CRP(Critical Rendering Path)
Кроки CRP

HTML->HTML parset -> DOM->
                            Render tree->Layout->Paint
CSS->CSS parset->CSSOM->

-Render tree - описує візуальне уявлення DOM
*/

___________________________________________________________
//!Різниця між статичною та живою колекцією
/* Жива колекція при зміні дерева DOM, буде містити в собі актуальну інфо. В той час  як querySelectorAll буде містити інфо на момент коли був викликаний цей пошук*/

//Отримуємо статичну колекцію
const listStatic = document.querySelectorAll('.lesson_item-list');
console.log(listStatic); 
//Отримуємо живу колекцію
const listLive = document.getElementsByClassName('lesson_item-list');
console.log(listLive);
// Жива і статична колекція на початку будуть містити однакову к-ть об'єктів 

//* insertAdjacentHTML
//Створюємо новий HTML-об'єкт
const lessonlist = document.querySelector('.lesson_list');
lessonlist.insertAdjacentHTML(
  'beforeend',
  '<li class="lesson_item-list">Новий пункт</li>'
);
//Після створення нового об'єкта статична колекція не змінилась, а от 'жива' колекція буде містити новий пункт.
//*Жива колекція містить актуальну інфо в DOM-дереві

//* elem.closest(CSS) - пошук предка(найближчий батьківський за вказаним CSS-селектором )
/* Шукає найближчього предка, який відповідає CSS-селектору. Сам елемент також участвує в пошук

Предок елемента - це батько батька і т.д. Разом вони утворюють ланцюжок ієрархії від елемента до вершини.

Іншими словами метод closest піднімається вверх по дереву від елемента поки не знайде батька який відповідає вказаному CSS-селектору. Якщо він відповідає селектору, пошук припиняється. Метод повертає або предка або null
parentElement - повертає тільки безпосередньо батьківський елемент
*/
//Кладемо об'єкт в константу
const elemCloses = document.querySelector('.lesson_item-sub-list');
//Кладемо в константу батько цього об'єкта з класом .lesson_list
const parentList = elemCloses.closest('.lesson_list');
console.log(parentList); // Виведе знайдений об'єкт .lesson_list'
/* Часто використовується для перевірки на існування того чи іншого батька, або для змінення батька конкретного об'єкта*/


//*elem.matches - перевірка
/* Нічього не шукає, а перевіряє чи елемент задовольняє CSS-селектор. І повертає true або false.
Метод зручний коли потрібно перебрати елементи в масиві і вибрати ті які нам потрібні*/
//Отримуємо колекці всіх об'єктів з класа '.lesson_item-list' в константу 
const elemsMatches = document.querySelectorAll('.lesson_item-list'); 
//За допомогою циклу перебираємо знайдені об'єкти
for (let elem of elemsMatches) {
  //За допопмогою умовного галуження перевіряємо використовуючи matches чи існують в об'єкта в даному випадку дані атрибути, клас з певним класом
  if(elem.matches('[class$="lesson_item-lisr_red"]')) {
    console.log('Red');
  } else if(elem.matches('[class$="lesson_item-lisr_blue"]')) {
    console.log('Blue');
  }
}


//*elemA.contains(elemB) - первіряє чи є елемент нащадком
//Поверне true, якщо elemB  знаходиться всередині elemA (elemB нащадок elemA) або коли elemA==elemB
var b=document.getElementById("li2").contains( document.getElementById("ul") );



//*Отримавши об'єкт тим чи іншим шляхом ми можемо використати до нього властивість новігації
//Отримуємо в константу об'єкт з класом .lesson_text
const text = document.querySelector('.lesson_text');
//Отримуємо в константу наступний об'єкт після .lesson_text ха допомогою константи text
const list = text.nextElementSibling;
console.log(list);
/* Всі властивості новігації можна використовувати до об'єктів знайдених за допомогою методів пошуку*/





______________________________________________
//!Новігація по документу
/*Найвищі елементи дерева доступні як властивості об'єкта document це:
-<HTML>
-<HEAD>
-<BODY>
І за допомогою відповідних властивостей можна отримати ці об'єкти в консоль
 */
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement); //<html lang = "en"> <head></head><body></body></html>
console.log(headElement); //<head></head>
console.log(bodyElement); // <body></body>

/* Відповідно отримавши об'єкт BODY в певну константу, можна використовувати цей об'єкт як відправну точку для подальшої новігації*/

//* firstChild і lastChild - Отримуємо перший і останній дочірні вузли(елементи)
const firstChildNode = bodyElement.firstChild; //Повертає перший дочірній вузол або  null якщо елемент не має дочірніх вузлів
const lastChildNode = bodyElement.lastChild; //Останній дочірній вузол або  null

console.log(firstChildNode);
console.log(lastChildNode); // останній дочірній вузол це підключення скрипта
/* Можливо після цього запису буде щє якийсь HTML, але він не буде показаний так як іде після виклику коду, саме тому код JS варто піключати в кінці */

//*childNodes
//Дана колекція містить список всіх дітей даного об'єкта(BODY), включаючи текстові вузли. Повертає колекцію дочірніх вузлів елемента. Повертає об'єкт NodeList
const childNodes = bodyElement.childNodes;
console.log(childNodes); // В виводі буде щось накшталт масиву, але це колекція. яка буде містить список всіх вузлів (текстові вузли, вузли-коментарі і вузли-елементи) об'єкта BODY
//Першим буде іти текстовий вузол - #text -, це такий символ переводу рядка
/* childNodes не масив а колекція - особливий об'єкт що перебирається - псевдомасив
Відмінність від масиву:
-Для перебору колекції можна використовувати for..of
-Методи масиву не будуть працювати так як колекція -  це не масив */
//Перебір колекції
for (let node of childNodes) {
  console.log(node); // покаже всі вузли із колекції
}
//childNodes[0] є те ж саме що і Element.firstChild:

//? Якщо потрібно використати методи масиву, то можна створити справжній масив із колекції використовуючи Array.from
console.log(Array.from(document.body.childNodes).filter);

/* Колекція має деякі особливості
 *'Живі' колекції
  Майже всі DOM колекції живі. Тобто змінна обо константа яка містить колекцію буде відображати поточний стан DOM.
  Якщо зберегти силку  на body.childNodes в константі або змінній і додати/видалити вузли в DOM, то вони з'являться в збереженій колекції автоматично
  Всі методи getElementsBy повертають живу колекцію
  <div>First div</div>
<script>
  let divs = document.getElementsByTagName('div');
  console.log(divs.length); //1
</script>

<div>Second div</div>
<script>
  console.log(divs.length); //2
</script>
  */
/* 
*Тільки для читання 
DOM-колекції і всі новігаційні властивості, доступні тільки для читання. Ми не можемо замінити один дочірній вузол на інший.
Наприклад написавши childNodes[i] = ...
Для змінення DOM потрібні інші методи
querySelectorAll - статична колекція
<div>First div</div>
<script>
  let divs = document.querySelectorAll('div');
  console.log(divs.length); //1
</script>
<div>Second div</div>
<script>
  console.log(divs.length); //1
</script>
*/
  


//*hasChildNodes()
//Спеціальна ф-ція для перевірки наявності дочірніх вузлів
console.log(bodyElement.hasChildNodes()); //виводить true або false








//!Новігація по вузлам
// Звернення до попереднього, наступного вузла об'єкта і безпосередньо до батьківсього об'єкта
//*previousSibling - повертає попередній вузол об'єкта який знаходиться на томже рівні вкладеності або null
const previousSiblingNode = bodyElement.previousSibling;
console.log(previousSiblingNode); // Отримуємо текстовий вузол, який не видимий в самому файлі, але він існує як перевід рядка

//*nextSibling - наступний вузол після поточного або null
const nextSiblingNode = bodyElement.nextSibling;
console.log(nextSiblingNode); //null . Тому що після BODY нічього немає. Так як ми звертаємось до неіснуючього об'єкта ми отримуємо - null
//*parentNode - батьівський вузол
const parentNode = bodyElement.parentNode;
console.log(parentNode); // Отримуємо об'єкт HTML з усім вмістом
/* Новігаційні властивості відносяться до всіх вузлів в документі.
Включно в childNodes знаходяться і текстові вузли і вузли-елементи і вузли-коментарі  */








//!Новігація тільки по елементам
/* Але для більшості задач текстові вузли і вузли-коментарі не потрібні. Використовується маніпуляція вузлами-елементами, котрі являють собою теги і формують структуру сторінки */

//*children
//Колекція яка містить в собі тільки вузли-елементи тільки HTML-теги
//Отримуємо колекцію всіх дочірніх елементів
const bodyChildren  = bodyElement.children;
console.log(bodyChildren);

/* Для кожної новігаційної властивості існують аналоги які повертають саме елементи - HTML-теги
 */

//* firstElementChild - перший дочірній елемент
const firstChild = bodyElement.firstElementChild;
console.log(firstChild); // перший тег в BODY
//firstElementChild є аналогом children[0]:

//* lastElementChild - останній дочірній елемент
const lastChild = bodyElement.lastElementChild;
console.log(lastChild); // скрипт з підключенням JS
//lastElementChild аналог children[Element.children.length-]

//Cусідні і батьківські елементи
//* previousElementSibling - попередній елемент або null якщо зазначений елемент перший в списку
const previousSibling = bodyElement.previousElementSibling;
console.log(previousSibling); // <head></head>

//* nextElementSibling - наступний елемент або null якщо елемент останній в списку
const nextSibling = bodyElement.nextElementSibling;
console.log(nextSibling); //null - тому що нічього після BODY немає

//* parentElement - батьківський елемент
const parentElement = bodyElement.parentElement;
console.log(parentElement); //<html></html> із своїм вмістом
//parentElement повертає батьківський елемент, а parentNode  повертає будьякого батька. Зазвичай ці властивості однакові: вони обидва отримують бутька
console.log(document.documentElement.parentNode); //виведе document
console.log(document.documentElement.parentElement); //виведе null
//Тому що батьком корінного вузла document.documentElement (<html>) являєтся document, але document це не вузол елемент а об'єкт, так що parentNode поверне його, так як він повертає будь якого батька

//Це може бути корисно якщо потрібно пройтись вверх по ланцюжку батьків від elem к <html>, але не до document
while(elem = elem.parentElement){
  console.log(elem);
}

/* Дані властивості новігації корисні коли потрібно отримати об'єкт який знаходиться поруч */






_________________________________________________________
//! ЗМІНЕННЯ ДОКУМЕНТА
//* innerHTML - повертає/задає внутрішній HTML код елементу
/* Дозволяє отримати HTML-вміст елемента у вигляді рдяка
З метою безпеки зазвичай браузер не виконує скрипт який був присвоєний за допомогою innerHTML
Використовується тільки для вузлів-елементів
Отримуємо об'єкт */
const textElement = document.querySelector('.lesson_text');
//Отримуємо вміст об'єкта 'як є' разом  з HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//Перезаписуємо вміст об'єкта
//Звертаємось до об'єкта textElement, пишемо innerHTML знак присвоєння '='
textElement.innerHTML = `Я кохаю свого любого цьомика <3`;

//При цьому стара константа textElementContent яка раніше мала оригінальний вміст, не змінилась. Це дозволяє не повністю змінювати вміст, а дописувати нова

//Дописуємо вміст об'єкта
//${textElementContent} константа яка має оригінальний вміст, а далі дописуємо свій вміст.
//Тут можна вказувати будь які HTML-теги із класами, атрибутами
textElement.innerHTML = 
  `<p>${textElementContent}</p><p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
  console.log(textElement.innerHTML);

  //Якщо innerHTML вставляє в документ тег <script> - він стає частиною HTML але не запускається

  //Можна додати HTML до елемента використовуючи elem.innerHTML+="щє html"
  chatDiv.innerHTML +="<div>Привіт<img scr='smile.gif'/>!</div>"
  chatDiv.innerHTML += "Як справи?";
  //Але фактично на практиці відбувається не додавання а перезаписування 
  /*Тобто innerHTML родить наступне:
      -Видаляє старий вміст
      -На його місце ставить нове значення innerHTML   */

  /*Щє приклад
<p>Параграф</p>
<div>DIV</div>
<script>
  console.log(document.body.innerHTML); // читаємо поточний вміст
  document.body.innerHTML = ' новий BODY'; //змінюємо вміст
</script> */




//*outerHTML - отримання HTML елемента повністю
/* HTML код самого елемента і внутрішній, заміняє елемент повністю в зовнішньому контексті
Повертає/задає HTML код елемента і його дочірніх елементів
З метою безпеки зазвичай браузер не виконує скрипт (код) який був присвоєний за допомогою outerHTML. Деякі браузери не підтримують */
const textElementsContent = textElement.outerHTML;
console.log(textElementsContent);

textElement.outerHTML = `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
console.log(textElement.outerHTML);

// Виводить тег із всім його вмістом
/* <div id="elem">Привіт<b>Світ</b></div>
  <script>
    console.log(elem.outerHTML); //<div id="elem">Привіт<b>Світ</b></div>
  </script> */

/* Зміна елементу
<div >Привіт Світ</div>
  <script>
    let div = document.querySelector('div');
    Заміняємо div.outerHTML на <p>...</p>
    div.outerHTML = '<p>New element</p>';
    Вміст div залишивсі тимже
    console.log(div.outerHTML); //<div>Привіт Світ</div >
  </script> 
  
Хоч зовні значенян і змінилось, стара змінна div залишилась такоюж. Це тому, що outerHTML  не зміінює DOM-елемент, а видаляє його із зовнішнього контексту і вставляє замість нього новий HTML-код.
    -div був видалений із документа
    -Замість нього був вставлений новий HTML  <p>New element</p>
    -В div залишилось старе значення.Новий HTML не збережений нів'якій змінній.
    При роботі з outerHTML потрібно бути обережним, так він не змінює елемент, а створює новий на його місці. Силки на нові елементи можна отримати звернувшись до DOM
  */  




//* textContent - управління текстом елемента
/*  Повертає текст і перетворює в текстові вузли введені в нього теги - що використовується для 'безпечного методу'*/

/* Отримуємо об'єкт
const textElement = document.querySelector('.lesson_text');
Отримуємо вміст об'єкта 'як є' разом  з HTML */
const textElementContent2 = textElement.textContent;
console.log(textElementContent2);

//Отримуємо текст
/* <div id="news">
    <h1>Негайно в номер!</h1>
    <p>Марсіани атакували людство</p>
  </div>
  <script>
    console.log(news.textContent); //Негайно в номер! Марсіани атакували людство
  </script> */

  // Різниця між innerHTML та textContent
  /* <div id="elem1"></div>
  <div id="elem2"></div>
  <script>
    let name = prompt("Введіть ваше ім'я", "<b>Винни-пух!</b>");
    elem1.innerHTML = name; //Винни-пух!
    elem2.textContent = name; //<b>Винни-пух!</b>
  </script> */

//Змінюємо вміст
//Теги перетворились в рядок
textElement.textContent =`<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
console.log(textElement.textContent);
/* Щоб на сайті не з'являвся довільний HTML-код. Присвоєння через textContent - один із способів захиститись від цього */

/* Приклад:
Ми отримуємо дані від користувача очікуючи що там буде текст , але користувач може в поле для введенян записати купу HTML-тегів які при вставкі в документ щось поламають. Саме textContent захищяє від цього, просто переводячи тег в текст */




//*TODO: Методи для текстового вузла 
//*data - поверне вміст текстового вузла/коментаря 
//Отримуємо об'єкт
// const textElement = document.querySelector('.lesson_text');
const getComment = textElement.nextSibling

console.log(getComment); // <!-- Виводиться коментар -->
//Щоб вивести сам текст комента викор властивість data
console.log(getComment.data); //Виводиться коментар

//
/* Привіт
  <!-- Коментар -->
  <script>
    let text = document.body.firstChild;
    console.log(text.data); //Привіт

    let comment = text.nextSibling;
    console.log(comment.data); //Коментар 
  </script> */

//Зміна текстового вузла/коментаря
getComment.data = 'Лабудібудібдаб';
console.log(getComment.data); //Лабудібудібдаб

//*nodeValue - схоже з data , має невелику відмінність в специфікації

/*
*nodeType - властивість для визначення типу DOM-вузла
Його значення неможна змінити, тільки прочитати
Його значенням являється цифра: 
    *elem.nodeType == 1 для вузлів-елементів
    *elem.nodeType == 3 для текстових вузлів
    *elem.nodeType == 9 для об'єктів документа
    * інші значення в специфікації
    Приклад: 
    <script>
      Який тип вузла
      let elem = document.body;
      console.log(elem.nodeType);  1 => елемент

      Його нащадок
      console.log(elem.firstChild.nodeType); 9
    </script>

В сучасних скриптах можна використовувати метод instanceof      */

/* 
* nodeName and tagName
nodeName:Отримавши DOM-вузол можна дізнатись ім'я його тега 
tagName: для вузлів елементів описує що це за вузол.
Тільки для читання
Приклад:
console.log(document.body.nodeName);  BODY
console.log(document.body.tagName);  BODY

Різниця між nodeName i tagName:
  *Властивість tagName є тільки в едементів Element, виводиться в верхньому регістрі
  *Властивість nodeName  використовується для будь яких вузлів Node
        -для елементів воно рівно tagName
        -для інших типів вузлів (текст, комент) воно містить рядок з типом вузла
  Приклад: tagName i nodeName на прикладі об'єкта document і вузла-коментаря
  
  <body>  <!-- коментар -->
    <slript>
    для коментаря
    console.log(document.body.firstChsld.tagName); undefined(не елемент)
    console.log(document.body.firstChild.nodeName); #comment
    для document
    console.log(document.tagName);  undefined(не елемент)
    console.log(document.nodeName);  #document
    </skript>
  </body>

?Для роботи з елементами для використання tagName і nodeName немає різниці*/





___________
//! СТВОРЕННЯ ЕЛЕМЕНТІВ І ВУЗЛІВ
/* Мадифікація DOM - це ключ до ставорення живих сторінок, створення нових елементів на льоту і зміна вже існуючих

Приклад: Показати повідомлення на сторінці  яке буде виглядати кращє ніж alert
<style>
  .alert {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: #3c763d;
    background-color: #dff0d8;
  }
</style>
<div class="alert">
  <strong>Всім привіт!</strong>Ви прочитали важливе повідомленя
</div>

Тепер створимо такийже div з використанням JS

let div = document.createElement('div')
div.className = 'alert';
div.innerHTML = "<strong>Всім привіт!</strong>Ви прочитали важливе повідомленя"

Тепер щоб div з'явився його потрібно вставити десь в document, наприклад document.body

document.body.append(div) */
//DOM-вузол можна створити двомаметодами


//* createElement - cтворення нового елемента з заданим тегом
//Створюємо новий тег
const newElement = document.createElement('div');
// console.log(newElement); //<div></div>
//Наповнюємо елемент контентом
newElement.innerHTML = `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
console.log(newElement);


//* createTextNode - створення нового текстового вузла(рядок який хочемо створити)
const newText = document.createTextNode('Лабудібудабдаб');
console.log(newText);
//Щоб додати елементи до документу використовують метод element.appendChild()








___________________________________________________________
//!МЕТОДИ ВСТАВКИ
//*Вставка DOM-вузлів і текствових фрагментів
/* Створенні об'єкти знаходяться в константах, але не являються частиною документа HTML. 
Щоб це зробити в JS існують різні методи вставки


- Для початку отримуємо об'єкт з яким ми хочемо взаємодіяти
- Створюємо новий елемент(тег)
- Наповнюємо його текстом
- Вставляємо новий елелмент


Весь текст вставляєтьсяя як текст безпечним методом, як це робить elem.textContent. Тому дані методи можуть використовуватись для вствки DOM-вузлів або текстових фрагментів
*/

//Щоб вставити новий елемент:
//*Element.before() - перед об'єктом 
textElement.before(newElement); //Тег з новим наповненням з'явився перед об'єктом


//*Element.after() - після об'єкта
textElement.after(newElement);
//Тег з новим наповненням з'явився після об'єкта

//* Element.prepend() - вставляє елемент або текст на початку списку дочірніх елементів.
//Підтримується не всіма браузерами
textElement.prepend(newElement); 

//*Element.append( app ) - вставляє елемент або текст у кунець списку дочірніх елементів
//Якщо такий елемент вже існує в документі то він видаляється і вставляється заново. Не всі браузери підтримують. Для підтримки усіх браузерів використовують метод Element.appendChild, так як це застарілий метод і зустрічаться в сторому скрипті
textElement.append(newElement);

//*Element.replaceWith - замінює об'єкт заданими вузлами або рядками


/*
Якщо елемент існує то він видаляється і вставляється
Синтаксис запису:
-Звертаємось до об'єкта з яким хочемо взаємодіяти
-Пишемо потрібний метод, в залежності від того куди потрібно вставити елемент
-В () пишемо назву елемента
!<!-- Методи вставки -->
<!-- lesson_list - це наш об'єкт -->

*<!-- before --> або <!-- insertBefore -->
<ul class="lesson_list">
    *<!-- prepend -->
    <li>Пункт №1</li>
    <li>Пункт №2</li>
    <li>Пункт №3</li>
    *<!-- append --> або <!-- appendChild -->
</ul>
*<!-- after --> */

//?Приклад використання методів вставки
/*<ol id="ol">
    <li>0</li>
    <li>1</li>
    <li>2</li>
  </ol>

  <script>
    ol.before('before'); вставить рядок before перед <ol>
    ol.after('after');  вставить рядок after після <ol>

    let liFirst = document.createElement('li');
    liFirst.innerHTML = 'prepend';
    ol.prepend(liFirst);  вставить liFirst  на початок <ol>

    let liLast = document.createElement('li');
    liLast.innerHTML = 'append';
    ol.append(liLast);    вставить liLast в кінець <ol>
  </script> 
  
Новий список буде таким: 
before
<ol id="ol">
  <li>prepend</li>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>append</li>
</ol>
after
  */

____________________________________________________________________
/* 
Дані методи можуть вставляти декілька вузлів і текстових фрагментів за один виклик
<div id="div"></div>
<script>
  div.before("<p>Привіт</p>", document.createElement('hr'))
</script>     
Фінальний HTML буде:
<p>Привет</p> 
<hr>
<div id="div"></div>

Інший приклад*/
//Отримуємо об'єкт
const textElement = document.querySelector('.lesson_text');

//Створення нового елемента(тега)
const newElement = document.createElement('div');
//Наповнюємо новий елемент
newElement.innerHTML = `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;

//Вставка декількох фрагментів відразу
//Вставляється новостворений об'єкт - newElement і текст
textElement.append(newElement, 'Hello');

//Можна вставляти рядок
textElement.append(`<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`);



/* 
*Вставка HTML-елементів 
    Методи: 
        *elem.insertAdjacentHTML(where, html)
        *elem.insertAdjacentText(where, text)
        *elem.insertAdjacentElement(where, elem)
*/
  

//*insertAdjacentHTML(where, html) - вставляє HTML  текст у елемент   
/*
where - вказує куди по відношенню до elem виконується вставка
    Значення мають бути наступні:
    -beforebegin - вставить html безпосередньо перед elem
    -afterbegin - вставить html на початок elem
    -beforeend – вставить html в кінець elem
    -afterend – вставить html безпосередньо після elem.
text -це HTML-рядок який буде вставлено як HTML
Розбирає заданий текст у вигляді HTML і вставляє р-тат елементів і вузлів в дерево DOM у зазначеній позиції. Працює швидше за  innerHTML. 
?Не всі браузери підтримують

Приклад:
<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Привіт</p>');
  div.insertAdjacentHTML('afterend', '<p>Бувай</p>');
</script>
Р-тат:
<p>Привет</p>
<div id="div"></div>
<p>Пока</p>*/

/*Інший приклад 
Отримуємо об'єкт
const textElement = document.querySelector('.lesson_text'); */

//Вставляємо текст, HTML, елемент
textElement.insertAdjacentHTML(
  'afterend', //<- відповідає за те куди саме буде вставлений 2 параметр
  `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`
);



//* insertAdjacentText - вставляє текст у елемент, навіть якшо текст має теги вони будуть вставлені як текст
//* insertAdjacentElement - вставляє елемент в задану позицію в елементі
/* Приклад: показ повідомлення
<style>
  .alert {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: #3c763d;
    background-color: #dff0d8;
  }
</style>
<script>
  document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
    <strong>Всім привіт!</strong> Ви прочитали важливе повідомлення.
  </div>`)
</script> */


/*Інший приклад 
Отримуємо об'єкт
const textElement = document.querySelector('.lesson_text');
Вставляємо текст */
textElement.insertAdjacentText(
  'beforeend',
  `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`
);
//Створення нового елемента(тега)
const newElement = document.createElement('div');
//Наповнюємо новий елемент
newElement.innerHTML = `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
//Вставляємо елемент
textElement.insertAdjacentElement(
  'beforeend',
  newElement
);

/* На практиці часто використовується тільки insertAdjacentHTML. Тому що для елементів і тексту є методи append/prepend/before/after - їх швидше писати, і вони можуть вставлять як вузли так і текст*/

/*
?<-- Методи вставки insertAdjacentHTML-->
<!-- lesson_list - це наш об'єкт -->

*<!-- beforebegin -->
<ul class="lesson_list">
    *<!-- afterbegin -->
    <li>Пункт №1</li>
    <li>Пункт №2</li>
    <li>Пункт №3</li>
    *<!-- beforeend -->
</ul>
*<!-- afterend--> */



/* 
!Застарівші методи вставки/видалення 
?ДЛя ознайомлення, не потрібно для сучасної розробки так як методи append, prepend, before, after, remove, replaceWith більш зручніші
-parentElem.appendChild(node)
-parentElem.insertBefore(node, nextSibling)
-parentElem.replaceChild(node, oldChild)
-parentElem.removeChild(node)

//* Element.appendChild() - вставляє елемент в кінці списку дочірніх елементів(аналог append)

//* Element.insertBefore() - вставляє елемент перед вказаним дочірнім
Синтаксис: insertedElement = Element.insertBefore(newEl, existingEl);
newEl - елемент який потрібно вставити
existingEl  - елемент перед яким необхідно вставити  newEl 

//*Element.replaceChild(node, oldChild)  - заміняє oldChild на node серед дочірніх елементів parentElem

//*Element.removeChild(node) - видяляє node із parentElem 


!Document.write(html) -  додає HTML на сторінку до заваршення її завантаження. Тобто  працює тільки під час завантаження сторінки. 
Виклик даного метода записує html на сторінку прямо тут і зараз. Метод достатньо гнучкий, так як рядок html може бути динамічно згенерована
Синтаксис 
<p> Десь на сторінці...</p>
<script>
  document.write('<b>Привіт із JS</b>');
</script>
<p> Кінець</p>

Даний метод з'явився в ті часи коли не було DOM і стандартів, але досі використовується тому що існують скрипти які підтримують його, хочя в сучасних скриптах зустрічається рідко

Якщо викликати його пізніше, то існуючий вміст документа затреться
<p> Через 1с вміст цієї сторінки буде замінено</p>
<script>
  document.write через 1 с, виклик відбувається після того як сторнка завантажиться
  setTimeout(() => document.write("<b>...Цим.</b>"), 1000)
</script>

З переваг якщо document.write запускається під час читання HTML браузером і щось пише в документі, то браузер сприймає це так наче це було з самого початку частиною звантаженого HTML документа. Тому він працює неймовірно швидко, так як метод пише текст сторінки поки DOM в процесі створення вузлів
Так що для динамічного створення HTML тексту це допоможе
*/




____________________________________________________________________
//* ПЕРЕНЕСЕННЯ ДОКУМЕНТА
/* Можна вставляти не тільки нові вузли, але переносити існуючі.Це робиться за допомогою звичайних методів вставки. Всі методи вставки автоматично видаляють вузли із старих місць */

//Oтримуємо об'єкт
lessonBlock = document.querySelector('.lesson');
//Oтримуємо об'єкт
const title = document.querySelector('h3');

//Переносимо  title в кінець блоку lessonBlock
lessonBlock.append(title); //Тепер заголовок h3 знаходиться всередині об'єкта lesson в кінці


//!Клонування
//* CloneNode - клонування вузлів
/* Якщо потрібен не перенос, а саме копія елелмента . Копіює всі атрибути і їх значення. Також можна клонувати існуючий елемент і змінити такс всередині нього при необхідності. Це може бути швидше і простіше коли в нас є великий елемент
При цьому не копіює події додані за допомогою метода //*addEventListener() 
і призначені через властивість елемента:  Element.подія=function; . 
*elem.cloneNode(true) виклик із true створить глибокий клон елемента із всіма атрибутами і дочірнім вмістом
*elem.cloneNode(false) клон без дочірніх елментів

Приклад: копіювання повідомлення
<div class="alert" id="div">
    <strong>Всім привіт!</strong> Ви прочитали важливе повідомлення.
  </div>

  <script>
    let div2 = div.cloneNode(true); клонування повідомлення
    Зміна клонованого елемента
    div2.querySelector('strong').innerHTML = 'Всім допобачення';
    div.after(div2);
  </script>
  Р-тат:
  Всім привіт! Ви прочитали важливе повідомлення
  Всім допобачення Ви прочитали важливе повідомлення
*/



/*Інший приклад: 
Отримуємо об'єкт який потрібно клонувати
const textElement = document.querySelector('.lesson_text'); */
const cloneTextElement = textElement.cloneNode();
//Глибоку клонування разом з вмістом. ТОчна копія оригінала
//cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
//Вставляємо в lessonBlock клонований об'єкт cloneTextElement
lessonBlock.append(cloneTextElement);


//!Видалення
//* remove - видалення вузлів
/* Видаляє поточний елемент із списку дочірніх своїх батьків. НЕ всі браузери підтримують так  як це відносно новий метод.
ДЛя сумісності браузерів викор //*Element.removeChild().
Приклад:
<script>
  let div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML = '<strong>Всім привіт!</strong> Я швидко видалюсь.';
  document.body.append(div);
  setTimeout(() => div.remove(), 2000)
</script>

Інший приклад:
Отримуємо об'єкт 
const textElement = document.querySelector('.lesson_text'); */
//Видаляємо об'єкт
textElement.remove();

//? Якщо потрібно перемістити елемент в інше місце його не потрібно видаляти, так як методи вставки автоматично видаляють вузли із старих місць 

/* Приклад: змінюємо місцями елементи
<div id="first">One</div>
  <div id="second">Two</div>

  <script>
    бере #second і після нього ставить  #first
    second.after(first);  //Two One 
  </script> */











____________________________________________________________________
//! Пошук довільних елементів
//* elem.querySelectorAll(CSS) - статична колекція
/* Найуніверсальніший метод пошуку, який повертає всі елементи всередині  elem, задовольняючі даний CSS-селектор. Можна використовувати будь який CSS-селектор. Повертає масив елементів за вказаним CSS-селектором*/

//Пошук по елементу класа
const elemsOne = document.querySelectorAll('.lessons_list');
console.log(elemsOne); //Отримуємо колекцію де буде список всіх знайдених об'єктів

//Пошук по селектору тега
const elemstwo = document.querySelectorAll('li');
console.log(elemstwo); //Отримуємо колекцію із списком об'єктів по тегах

//Пошук по змішаному селектору тега і класа
const elemsThree = document.querySelectorAll('li.lessons_item-list');
console.log(elemsThree); //Отримуємо колекцію по конкретному тегу з конкретним класом 

//Пошук по тегу першого рівня вкладеності
const elemsFour = document.querySelectorAll('.lessons_list>li');
console.log(elemsFour); //Будуть знайдені ті теги які являються дочірніми елементами всередині вказаного класу

//Пошук по декільком класам
const elemsFive = document.querySelectorAll('.lessons_list, .lessons_text');
console.log(elemsFive); //Всі вказані об'єкти будуть зібрані в колекцію яка присвоєна константі

//Пошук по вкладеним класам
const elemsSix = document.querySelectorAll('.lessons_list .lessons_text');
console.log(elemsSix); //Шукаємо вкладений клас .lessons_text який знаходиться в класі .lessons_list. Після .lessons_list немає коми

//Пошук по ID
const elemsSeven = document.querySelectorAll('#listItem');
console.log(elemsSeven); //Отримуємо тільки один об'єкт,якщо він існує. так як ID - це унікальний атрибут

//Пошук по атрибуту
const elemsEight = document.querySelectorAll('[data-item]');
console.log(elemsEight); //В колекції будуть тільки ті об'єкти в яких буде даний атрибут

//Пошук по атрибуту із значенням
const elemsNine = document.querySelectorAll('[data-item="85"]'); 
console.log(elemsNine); //В колекції будуть тільки ті об'єкти в яких буде даний атрибут

//Можна отримати конкретний об'єкт вказавши його ключ []
const elemsTen = document.querySelectorAll('li');
console.log(elemsTen[2]); //Виводимо третій об'єкт

//<ul><li>Этот</li><li>тест</li></ul><ul><li>полностью</li><li>пройден</li></ul>
//<li> які являються останніми нащадками в <ul>
let elem = document.querySelectorAll('ul>li:last-child');
for(let el of elem){
  console.log(el.innerHTML);
}

//Цикл який пробіжиться по всім записам в колекції і виведе їх в консоль
for(const item of elem) {
  console.log(item);
}

//Хоч колекція це не масив, але до неї також можна використати forEach
elems.forEach(item => {
  console.log(item);
});

//Змінюємо колів всіх елементів b які знаходяться у елементі p
let mas = document.querySelectorAll('p b');
for( let i = 0; i < mas.length; i++){
  mas[i].style.color = '#fa3df8';
}


//?Псевдокласи також працюють :hover і :active
Приклад: document.querySelectorAll(':hover') //поверне колекцію із поточних елементів під курсором миші

//! Шукати можна не тільки в об'єкті DOCUMENT 
//В константу subList отримуємо колекцію об'єктів у яких є клас .lesson_sub-list
const subList = document.querySelectorAll('.lesson_sub-list');
//Оголошуємо константу subItem і шукаємо теги <li> тільки в середині цього об'єкта subList . [0] - для того щоб взяти перший об'єкт і вже всередині нього шукаємо всі теги <li>
const subItem = subList[0].querySelectorAll('li');
console.log(subItem);

//! За замовчуванням querySelectorAll перевіряє тільки останній елемент без урахування контексту.
/* Тобто якщо ми вибрали .class2 .class3 в контексті класа .class1 , при тому що  .class2 не являєьбся нащадком елемента в якому відбувався пошук .class1, то .class3 всеодно буде знайдений */

//* elen.querySelector(CSS);
//Повертає перший аргумент в середині elem, який відповідає даному CSS-селектору, і зупиниться

//В querySelectorAll щоб отримати перший об'єкт, потрібно спочатку отримати цілу колекцію і вказати ключ [0]
const lessonsList = document.querySelectorAll('.lesson_list')[0];
//Шукає відразу перший об'єкт
const lessonList = document.querySelector('.lesson_list');
console.log(lessonList); // В константу потрапить не колекція а відразу один об'єкт

//* document.getElementById(ID) і elem.getElementsBy
//Використовуються рідко, так як їх замінює querySelectorAll. Але вони мають певні відмінності

    //* document.getElementById(ID)
    /* Якщо в елемента є атрибут "id", то ми можемо отримати його викликом
    document.getElementById(id), де б він не знаходився в документі
    */

    const elem = document.getElementById('listItem');
    console.log(elem); //Отримуємо об'єкт в якого вказаний даний  ID
    /* 
    - ID має бути унікальним
    - Пошук тільки всередині об'єкта document */

    //* Методи пошуку групи getElementsBy
    //?  використовується рідко так як querySelector більш ефективний

        //* elem.getElementsByTagName(tag) - повертає масив елементів за вказаним ім'ям
        //Шукає елементи з даним тегом і повертає їх колекцію.пошук може проводитись як в об'єкті document так і в будь якому іншому об'єкті.
        // Передавши "*" замість тега, можна отримати всіх нащодків
        const elems = document.getElementsByTagName('li');
        console.log(elems);

        //* elem.getElementsByClassName(className) - повертає список елементів за  класом
        //Повертає елементи які мають даний CSS-клас
        const elemsTwo = document.getElementsByClassName('lesson_item-list');
        console.log(elemsTwo); // Отримаємо живу колекцію всіх знайдених об'єктів

        //* document.getElementsByName(name) - повертає список елементів за вказаним ім'ям
        //Повертає елементи з заданим атрибутом name. Дуже рідко використовується. Пошук тільки всередині об'єкта document.
        //Тобто якщо в документі є об'єкт з атрибутом name = "list" і в нього є певне значення "list", саме по цьому значенню можна шукати за допомогю даного методу
        const elemtThree = document.getElementsByName('list');
        console.log(elemsthree); // Отримаємо живу колекцію таких об'єктів

        //? НЕ забувати букву 's'. В методі getElementById вона відсутня бо він повертає 1 елемент

        //! Спроба присвоїти значення колекції, а не елементу в середині неї не спрацює. Потрібно перебрати колекцію в циклі і отримати елемент, а вже потім присвоїти йому значення
        // не спрцює
        document.getElementsByTagName('input').value = 5;
        //Спрацює якщо є input
        document.getElementsByTagName('input')[0].value = 5;











___________
//!Атрибути і властивості DOM-елементів
//Атрибут HTML перетворюється в DOM властивість
/* В різних DOM-елементів можуть бути різні властивості.
Наприклад у тега <a>, є властивість, пов'язана із силками, а у тега <input> - властивість пов'язана із полем введення.  */

//*DOM=властивості
 // Дадаємо нову властивість для document.body
  document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
  };
  console.log(document.body.myData.title);  //Imperator

  //Додаємо метод
  document.body.sayTagName = function(){
    console.log(this.tagName);
  };
  document.body.sayTagName(); //BODY
  //this тут буде document.body

  //Змінюємо вбудовані прототипи і додаємо нові методи для всіх елементів
  Element.prototype.sayHi = function() {
    console.log(`Hello, I'm ${this.tagName}`);
  }
  document.documentElement.sayHi(); //Hello, I'm HTML
  document.body.sayHi(); //Hello, I'm BODY


  //*HTML- атрибути
/*
*Особливості HTML-атрибутів
    - Їхні імена регістронезалежні
    - Їх значення завжди являється рядком  
У HTML тугів можуть бути різні атрибутию Коли браузер парсить HTML щоб створити DOM-об'єкти для тегів, він розпізнає стандартні атрибути і створює DOM-властивості для них. Але цього не відбувається якщо атрибут нестандартний */
<body id="test" something="non-standart" >
  <script>
    console.log(document.body.id); //test
    //нестандартний атрибут не перетворюється в властивість
    console.log(document.body.something); //undefined
  </script>
</body>




//*href - URL адреса зовнішнього посилання.
//link, a - має властивість href
//<a href="...">
const link = document.querySelector('.lesson_link');
console.log(link.href);// Отримуємо послання

//Поле для введення input не має властивості href
const input = document.querySelector('.lesson_input');
console.log(input.href); //undefined

//*value
//Значення для input, select, textarea 
console.log(input.value); // отримуємо значення поля для введенян за замовчуванянм
console.log(link.value); // undefined , не має такої властивості

//Отримуємо список доступних властивостей елемента
console.dir(link); // Виведе в консоль о'бєкт який буде мати список доступних властивостей

/* 
*Нестандартний атрибут можна отримати за допомогою наступних методів:
    * elem.hasAttribute(name) - перевіряє наявність атрибута
    * elem.getAttribute(name) - отримує значення атрибута
    * elem.setAttribute(name, value) - встановлює значення атрибута
    * elem.removeAttribute(name) - видаляє атрибут
    * elem.attributes - повертає масиво подібний список ( NamedNodeMap ) всіх атрибутів елемента. Тільки для читання
    */

//Отримуємо елемент
const lessontext = document.querySelector('.lesson_text');

//Перевіряємо наявність атрибута, повертає true або false
lessontext.hasAttribute('name');
//Отримуємо  значення атрибута за його назвою, якщо атрибут не існує повертає null.
lessontext.getAttribute('name');
//Встановлюємо значення атрибута
lessontext.setAttribute('name', 'value');
//Видаляємо атрибут за вказаною назвою
lessontext.removeAttribute('name');

//Приклад
//Встановлюємо значення атрибута
lessontext.setAttribute('some-attribute', 'some-value');
//Можна додати стилі атрибуту так як це робить cssText
div.setAttribute('style', 'color: red')
//Перевіряємо наявність атрибуту
if(lessontext.hasAttribute('some-attribute')) {
  console.log('some-attribute існує');
}

//Колекція attributes перебирається циклом. В ній всі атрибути елемента(стандартні і нестандартні) в вигляді об'єктів із властивостями name і value

//*Синхронізація між атрибутами і властивостями
/* 
Ми можемо звернутись до тої чи іншої властивості через методи доступа до атрибутів.
Коли стандартний атрибут змінюється, відповідна властивість автоматично оновлюється. Це працює і в зворотньому напрямку(з деякими виключеннями): input.value синхронізується тільки в одну сторону атрибут -> значення, але не в зворотню

  */
  input = document.querySelector('input');
  //атрибут => значенян
  input.setAttribute('value', 'text'); //text
  //властивість => атрибут
  input.value = 'newValue'; //text значення не змінилось
  console.log(input.getAttribute('value'));
  //Тут зміна атрибута value  обновило властивість, але зміна властивості не вплинула на атрибут. Це корисно так як дії користувача можуть призвести до змінення value  і якщо потрібно буде відновити оригінальне значення з HTML воно буде в атрибуті

//Отримуємо елемент
input = document.querySelector('.lesson_input');

input.setAttribute('id', '123');
console.log(input.id); //123

input.id = '321';
console.log(input.getAttribute('id')); //321

//Але
input.setAttribute('value', 'Hello');
console.log(input.value); //Hello
//Змінивши властивість і отримавши атрибут за допомогою getAttribute ми отримуємо старе значення
input.value = "What's up";
console.log(input.getAttribute('value')); //Hello







//* Нестандартні атрибути, dataset
/*
? Інколи нестандартні атрибути використовуються для передачі користувацьких даних з HTML в JS, або щоб помітити  HTML-елементи для JS 
Помічаємо div
<div show-info="name"></div>
<div show-info="age"></div>
<script>
Код знаходить елемент з поміткою і показує запрошену інфо
  let user = {
    name: 'Pete',
    age: 25,
  };

  for(let div of document.querySelectorAll('[show-info]')) {
    Вставляємо відповідну інфо в поле
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]  //Pete 25
  }
</script>
?Приклад читання нестандартного атрибута
<body something="non-standart">
<script>
  console.log(document.body.getAttribute('something')); //non-standart
</script>
</body> 

?Також вони можуть бути використані для стилізації елементів
<style>
  .order[order-state='new'] {
    color: green;
  }
  .order[order-state="pending"] {
    color: blue;
  }
  .order[order-state="canceled"] {
    color: red;
  }
</style>
<div class="order" order-state="new"> A new order</div>
<div class="order" order-state="pending"> A pending order</div>
<div class="order" order-state="canceled"> A canceled order</div>

Атрибутами зручніше управляти, тому тут не використовуються класи типу .order-state-new, .order-state-pending, order-state-canceled
Але з їх використанням можуть з'явитись проблеми, так як несстандартний атрибут може з'явитись в стандарті і мати свій функціонал

Щоб уникнути конфліктв існує атрибут data

?Всі атрибути, які починаються з префікса 'data' зарезервовані для використання. Вони доступні в властивості dataset
Приклад: Якщо у elem є атрибут "data-about" то звурнутись до нього можна як elem.dataset.about
<body data-about="Elephants">
  <script>
    console.log(document.body.dataset.about); /Elephants
  </script>

  Атрибути які складаються із кількох слів , приклад data-order-state, стають властивостями нотації: dataset.orderState.
    <style>
    .order[data-order-state="new"] {
      color: green;
    }
  
    .order[data-order-state="pending"] {
      color: blue;
    }
  </style>
  <div id="order" class="order" data-order-state="new">
    A new order.
  </div>
<script>
  Читання
  console.log(order.dataset.orderState) //new
  Змінення
  order.dataset.orderState = "pending"; //рядок з зеленого стане синім
</script>

Data-атрибути валідні, тому це безпечний спосіб передачі користувацьких даних

Переважно потрібно використовувати DOM-властивості, атрибути використовуються тільки тоді коли DOM-властивості не підходять. Приклад:
  -Потрібен нестандартний атрибут, але якщо він починається з data , то потрібно використовувати dataset
  -Коли потрібно отримати значення яке записано в HTML, так як занчення DOM можу бути іншим     */

//Читаємо значення атрибута
/*  <div data-widget-name="menu">Choose the genre</div>
  <script>
    let elem = document.querySelector('[data-widget-name]');
    console.log(elem.dataset.widgetName); //menu
    Або так
    console.log(elem.getAttribute('data-widget-name')); //menu
  </script>
 */


//Отримуємо елемент
const lessonText = document.querySelector('.lesson_text');

//Отримуємо data-атрибут
console.log(lessonText.dataset.size); // значення атрибуту

//Перезаписуємо data-атрибут
lessonText.dataset.size = '1648';
console.log(lessonText.dataset.size ); //1648

//data-size-value
// Якщо ім'я атрибуту складається з 2 і більше слів його варто записувати в стилі camelCase
console.log(lessonText.dataset.sizeValue);

//*Корисні властивості
link = document.querySelector('.lesson_link');

//* tagName - показує тег об'єкта
//Отримуємо тег елемента
console.log(link.tagName);

//* hidden - приховати/показати елемент
//Технічно він працює як style='display:none'
console.log(link.hidden);
link.hidden = true; // Об'єкт зникне

/* <div>Видимий</div>
  <div hidden>Невидимий</div>
  <div id="elem">Невидимий</div>
  <script>
    elem.hidden = true;
  </script> */

  //Мигаючий елемент
  /* <div id="elem">Мигаючий елемент</div>
  <script>
    setInterval(() => elem.hidden = !elem.hidden, 100)
  </script> */


//*DOM-властивості типізовані
/* Не всі DOM -властивості являються рядковим типом:
      *input.checked (для чекбоксів) має логічний тип
      <input id="input" type="checkbox" checked>checkbox
      <script>
        console.log(input.getAttribute('checked')); // значення атрибута порожній рядок
        console.log(input.checked); //значення властивості: true
      </script>

      *Атрибут style - рядок, але властивість style - об'єкт
      <div id="div" style="color: red;font-size:120%;">Hello</div>

      <script>
        console.log(div.getAttribute('style')); // рядок color: red;font-size:120%;
        console.log(div.style); //об'єкт CSSStyleDeclaration
        console.log(div.style.color); //red
      </script>

      Але більшість властивостей всеж таки рядкового типу
      При цьому деякі із них можуть відрізнятись від атрибутів. Наприклад
      DOM-властивість href завжди містить повний URL, навіть якщо атрибут містить відноний URL або просто #hash

      <a id="a" href="#hello">link</a>
      <script>
        Атрибут
        console.log(a.getAttribute('href')); //#hello
        Властивість
        console.log(a.href); //Повний url http://127.0.0.1:5500/index.html#hello
      </script>
*/






____________________________________________________________________
//! Стилі і класи
/*Існує два способи задання стилю для елемента:
1. Створити клас в CSS і використати його:   <div class="...">
2. Писати стилі безпосередньо в атрибуті style: <div style="...">

Використання style приємлемо якщо динамічно вичасляються координати елемента і потрібно встановити їх із JS*/


//* УПРАВЛІННЯ КЛАСАМИ

//* className - повертає/задає атрибут class елементу
//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Отримуємо імена всіх класів даного об'єкта
const elementClassNames = element.className;
console.log(elementClassNames);
//Перезаписує всі імена класа
element.className = 'red'; 


//* classList - об'єкт з методами для додавання/видалення одного класа
//Повертає об'єкт DOMTokenList  який містить властивості і методи для роботи з атрибутом class  у елементі. Дозволяє отримати назву класу і додати/видалити класи елемента
/* //! Властивості:
*elem.classList.add() -додає новий клас
*elem.classList.remove() - видаляє клас
*elem.classList.toggle() - додасть клас якщо його немає, інакше видалить
*elem.classList.item() - повертає клас з індексом
*elem.classList.contains() - перевіряє наявність вказаного класа в елементі, повертає true/false
*elem.classList.toString() - повертає рядок з класами елементу
Приклад6
<body class="main page">
<script>
  console.log(document.body.className)  //main page
  document.body.classList.add('article')
  console.log(document.body.className)  //main page article
</script> 
 */
//Інший приклад:
//Додаємо клас не перезаписуюси старий
element.classList.add('active');
//Видаляэмо клас
element.classList.remove('active');
//Додати клас якщо його немає, якщо є видалити
element.classList.toggle('active');
//Перевірка наявності класа, повертає true або false
element.classList.contains('active');

//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Додаємо клас
element.classList.add('active');
//Перевіряємо наявність класу
if(element.classList.contains('active')) {
  console.log('У element є клас active');
}
//classList можна перебрати методом for..of
for(let className of element.classList){
  console.log(className); //Виводить всі класи які є у об'єкта
}



//*УПРАВЛІННЯ СТИЛЯМИ

//* element.style - відриває доступ до HTML-атрибуту style
//Установка стиля elem.style.width="100px" прайює так само як наявнясть в атрибуті style рядка width:100px
/*  Інший приклад:
<script>
  document.body.style.margin = '20px';
  console.log(document.body.style.margin);  //20px
  console.log(document.body.style.marginTop);  //20px
  console.log(document.body.style.marginLeft);  //20px
</script>
Браузер властивості style.marginLeft і style.marginTop  розпаковує із властивості style.margin */

//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Задаємо стиль за допомогою CSS властивості
element.style.color = 'red';

//* camelCase - використовується для властивості із декількох слів
/* background-color => elem.style.backgroundColor;
border-left-width => elem.style.borderLeftWidth
margin-bottom => element.style.marginBottom = '30px';
z-index => element.style.zIndex = '10';
Кожна властивість пишеться окремо
document.body.style.backgroundColor = prompt('background color?', 'green')

Дефіз означає заголовну букву
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';*/

//Отримання значення властивості
//Тільки якщо воно записано в атрибуті style
console.log(element.style.marginBottom);

//Скидання стилю за допомогою порожнього рядка
element.style.marginBottom ='';
//*Скидання стилів і видалення
/* Використовується коли потрібно додати властивість стилю, а пізніше прибрати.
Приклад: щоб приховати елемент задаємо elem.style.display = "none"
Щоб його видалити і повернути до початкового стану замість delete elem.style.display можна присвоїти йому порожній рядок elem.style.display = "".
<script>
document.body.style.display = 'none'
setTimeout(() => document.body.style.display = "", 1000)
</script>  
Якщо встановити в style.display порожній рядок, то браузер використає CSS-класи і вбудовані стилі так наче властивості style.display взагалі немає.   */

/* 
 * style.cssText - дозволяє записати відразу багато стилів, повний перезапис стилів які до цього були в даному атрибуті
Не можна встановити список стилів ось так  div.style="color: red; width: 100px", так як div.style - об'єкт і доступний тільки для читання. Рідко використовується так як таке присвоєння видаляє всі існуючі стилі: тобто не додає а замінює їх. Але його можна використати для нових елементів, коли точно відомо що там немає що видаляти
Приклад: 
<div id="div">Button</div>
  <script>
  Спеціальний прапор для астилів : "important"
    div.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
    `;
    console.log(div.style.cssText);
  </script>

?Теж саме можна зробити через div.setAttribute('style', 'color: red...')*/
//Інший приклад: 
//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
element.style.cssText = `
  margin-bottom: 30px;
  color: red;
  `;


//* getComputedStyle(element, [pseudo]) - повертає всі стилі CSS  елементу. Використовується щоб отримати поточне значення тої чи іншої властивості, тобто дає змогу дізнатись розмір, відступи, колір елемента
/* Наприклад отримати поточну ширину щоб додати/відняти до неї щось і якось змінити
element - елемент значення якого потрібно отримати
pseudo - вказує при потребі стиль псевдо-елемента, порожній рядок або відсутність аргумента азначають сам едемент
Працює тільки для читання
Повертає об'єкт  CSSStyleDeclaration який містить значення всіх властивостей CSS вказаного елементаю Повертає стилі CSS які вказані безпосередньо у елементі style="", вказані в стилях
Властивість style оперується тільки занченням атрибута style, без урахуванян CSS-каскада. ТОму використовуючи властивість elem.style ми не можемо нічього прочитати, наприклад побачити відступи

<head>
<style> body{color: red; margin: 5px}</style>
</head>
<bod>
  RED TEXT 
  <script>
    console.log(document.body.style.color); //порожньо
    let computedStyle = getComputedStyle(document.body)
    console.log(computedStyle.color); //rgb(255, 0, 0)
  </script>
  
  
Вирахуване (computed) і завершене (resolved) значення
Є дві концепції в CSS:
1. Сomputed значення - це те, яке отримано після використання всіх CSS-правил і CSS-наслідувань: height:1em або font-size:125%.
2. Resolved значення - яке безпосередньо використовувалось до елемента. Браузер бере вирахуване значення і робить всі одиниці виміру фіксованими  і абсолютними : height:20px або font-size:16px . Значення 1em або 125% являються відносними
getComputedStyle  повертає кінцеве значення властивості для геометрії воно в пікселях
Для правильного отримання значення потпібно вказати точну властивість: paddingLeft, marginTop, borderTopWidth
При звернення до скорочень правильний результат не гарантується padding, margin, border так як згенерованого стандарта для таких випадків немає
*/


//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Отримуємо значення властивості тільки якщо воно записано в атрибуті style
console.log(element.style.fontSize); // Поверне порожній рядок якщо  fontSize відсутній в об'єкті
//Стиль елемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);
//Стиль псевдоелемента
const elementBeforeStyle = getComputedStyle(element, '::before');
console.log(elementBeforeStyle.backgroundColor);
//Щоб отримати конкретне значення потрібно писати точну повну властивість
//Отримуємо точне значення
console.log(elementStyle.paddingLeft);
//Отримуємо не передбачуваний запис, так як записана загальна властивість padding
console.log(elementStyle.padding);
//Тільки для читання, ми не можемо переписати властивість
elementStyle.paddingLeft = '50px'; // Помилка

//
//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Стиль елемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);
//Отримуємо число
const paddingLeft = parseInt(elementStyle.paddingLeft)
console.log(paddingLeft); // Виводить цифри без значенью Замість 20px буде просто 20
//Потрібно вказувати одиниці виміру. Даний приклад нічього не виведе
element.style.marginLeft = 20;

/* В JS можна управляти класами і стилями об'єкта.
Управління класами пріорітетніший варіант в порівнянні із стилями
Маніпулювати властивістю style варто лише в тому випадку, якщо класи допомогти не можуть. Наприклад при зміні координатів об'єкта на ходу



Відвідані силки зафарбовуються за допомогою псевдокласа  :visited але getComputedStyle  не дає доступу до цієї інформації, щоб довільна сторінка не могла визначити чи відвідував користувач силку перевіривши стилі
JS не бачить стилі які використовуються за допомогою :visited, до тогож в CSS в якості безпеки є обмеження яка забороняє використовувати до :visited CSS-стилі які змінюють геометрію елемента. Це гарант того шо у  злаї сторінки не буде обхідного шляху перевірити була сторінка відвідана чи ні, щоб не порушити конфіденційність*/












____________________________________________________________________
/* 
!DocumentFragment - спеціальний DOM-вузол, який слугує обгорткою для передачі списку вузлів
До нього можна додавати інші вузли, але якщо вставити його кудись, він зникає і замість нього вставляється його вміст
Використовується більше в інштх областях, наприклад для елемента  template
Приклад: getListContent  генерує фрагмент з еелментами <li> які пізніше вставляється в <ul>

<ul id="ul"></ul>

  <script>
    function getListContent () {
      let fragment = new DocumentFragment();

      for(let i=1; i<=3; i++ ){
        let li = document.createElement('li');
        li.append(i);
        fragment.append(li)
      }
      return fragment;
    }

    Тут обгорта з <li> DocumentFragment додається до ul 
    ul.append(getListContent())
  </script>
  Але DocumentFragment зникає і структура буде
  <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

Тут наскільки я розумію в ф-ції оголошується змінна якій присвоюється обгортка DocumentFragment. Потім за допомогою циклу створюється три <li> із списком 1 2 3  і виставляються один за одним, потім загортаються в обгортку fragment.append(li) яку потім повертає ф-ція return fragment;
І вставляється в  <ul>

?DocumentFragment рідко використовується так як можна просто повернути масив вузлів

Приклад з масивом:
<ul id="ul"></ul>

  <script>
    function getListContent () {
      let result =[];

      for(let i=1; i<=3; i++ ){
        let li = document.createElement('li');
        li.append(i);
        result.push(li);
      }
      return result;
    }
    ul.append(...getListContent())
  </script>

  Потрібно обов'язково додати оператор "..." інакше виводом будуть не числа а об'єкт -> [object HTMLLIElement],[object HTMLLIElement],[object HTMLLIElement]    */