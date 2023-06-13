/* 
Методи:
BOM:
-Navigator
-Location
-History

DOM:
-innerWidth - ширина вікна браузера

Методи:
*Властивості для переходу по дереву DOM:
-document.documentElemen - повертає елемент який є батьком документу  
-document.body - елемент body у документі.
-document.head - head елемент у документі.
-Element.firstChild -  перший дочірний вузол.
-Element.lastChild - останній дочірний вузол.
-Element.childNodes - список дочірніх вузлів елемента
-Element.hasChildNodes() - чи має елемент дочірні елементи.

Новігація по вузлам:
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

Зміна/редагування документів:
-Element.innerHTML - внутрішній HTML код елемента.
-Element.outerHTML - HTML код самого елемента і внутрішній.
-Element.textContent - текстовий вміст елемента.
-data - поверне вміст текстового вузла/коментаря 

*Створення елементів і вузлів:
-document.createElement() - створює новий HTML елемент.
-document.createTextNode() - створює текстовий вузол.

*Методи вставки:
-BEFORE() - перед об'єктом
-Element.insertBefore() - вставляє елемент перед вказаним дочірнім
-AFTER() - після об'єкта
-PREPEND() - вставляє елемент або текст на початку списку дочірніх елементів.
-Element.append( app ) - вставляє елемент або текст у кунець списку дочірніх елементів
-Element.appendChild() - вставляє елемент в кінці списку дочірніх елементів(аналог append) 

-Element.insertAdjacentHTML() - вставляє HTML текст у елемент.
-Element.insertAdjacentText() - вставляє текст у елемент.
-Element.insertAdjacentElement() - вставляє елемент у задану позицію в елемент

-beforebegin - вставить HTML безпосередньо перед textElement
-afterbegin - вставить HTML на початок textElement
-beforeend - вставить HTML в кінець textElement
-afterend - вставить HTML пісдя textElement

-Element.cloneNode() - копіює елемент.
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
- datasetНестандартні атрибути
-Синхронізація між атрибутами і властивостями
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
-style.cssText - дозволяє записати відразу багато стилів, повний перезапис стилів які до цього були в даному атрибуті
-getComputedStyle(element, [pseudo]) - повертає всі стилі CSS  елементу
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


//*matches - перевірка
/* Нічього не шукає, а перевіряє чи елемент задовольняє CSS-селектор. І повертає true або false*/
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

//*Отримавши об'єкт тим чи іншим шляхом ми можемо використати до нього властивість новігації
//Отримуємо в константу об'єкт з класом .lesson_text
const text = document.querySelector('.lesson_text');
//Отримуємо в константу наступний об'єкт після .lesson_text ха допомогою константи text
const list = text.nextElementSibling;
console.log(list);
/* Всі властивості новігації можна використовувати до об'єктів знайдених за допомогою методів пошуку*/
___________________________________________________________
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

/* Колекція має деякі особливості
 *'Живі' колекції
  Майже всі DOM колекції живі. Тобто змінна обо константа яка містить колекцію буде відображати поточний стан DOM.
  Якщо зберегти силку  на body.childNodes в константі або змінній і додати/видалити вузли в DOM, то вони з'являться в збереженій колекції автоматично
  */
/* 
*Тільки для читання 
DOM-колекції і всі новігаційні властивості, доступні тільки для читання. Ми не можемо замінити один дочірній вузол на інший.
Наприклад написавши childNodes[i] = ...
Для змінення DOM потрібні інші методи
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

//Колекція дочірніх вузлів отримується за допомогою childNodes

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

/* Дані властивості новігації корисні коли потрібно отримати об'єкт який знаходиться поруч */
_________________________________________________________
//! ЗМІНЕННЯ ДОКУМЕНТА
//* innerHTML - повертає/задає внутрішній HTML код елементу
//З метою безпеки зазвичай браузер не виконує скрипт який був присвоєний за допомогою innerHTML
//Отримуємо об'єкт
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

//*outerHTML - отримання об'єкта повністю
// HTML код самого елемента і внутрішній
//Повертає/задає HTML код елемента і його дочірніх елементів
//З метою безпеки зазвичай браузер не виконує скрипт (код) який був присвоєний за допомогою outerHTML. Деякі браузери не підтримують
const textElementsContent = textElement.outerHTML;
console.log(textElementsContent);

textElement.outerHTML = `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
console.log(textElement.outerHTML);

//* textContent -управління текстом елемента
/* Задає/повертає внутрішній текст елемента. Подібний до innerHTML так як повертає вміст всіх елементів, а також вміст прихованих елементів включаючи  <script> і <style> . Це робить введення тексту безпечним  */

/* Отримуємо об'єкт
const textElement = document.querySelector('.lesson_text');
Отримуємо вміст об'єкта 'як є' разом  з HTML */
const textElementContent2 = textElement.textContent;
console.log(textElementContent2);

//Змінюємо вміст
//Теги перетворились в рядок
textElement.textContent =`<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`;
console.log(textElement.textContent);
/* Щоб на сайті не з'являвся довільний HTML-код. Присвоєння через textContent - один із способів захиститись від цього */

/* Приклад:
Ми отримуємо дані від користувача очікуючи що там буде текст , але користувач може в поле для введенян записати купу HTML-тегів які при вставкі в документ щось поламають. Саме textContent захищяє від цього, просто переводячи тег в текст */


//*data - поверне вміст текстового вузла/коментаря 
//Отримуємо об'єкт
// const textElement = document.querySelector('.lesson_text');
const getComment = textElement.nextSibling

console.log(getComment); // <!-- Виводиться коментар -->
//Щоб вивести сам текст комента викор властивість data
console.log(getComment.data); //Виводиться коментар

//Зміна текстового вузла/коментаря
getComment.data = 'Лабудібудібдаб';
console.log(getComment.data); //Лабудібудібдаб

___________
//! СТВОРЕННЯ ЕЛЕМЕНТІВ І ВУЗЛІВ
//* createElement - cтворення нового елемента(тега)
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
/* Створенні об'єкти знаходяться в константах, але не являються частиною документа HTML. 
Щоб це зробити в JS існують різні методи вставки*/

/* 
- Для початку отримуємо об'єкт з яким ми хочемо взаємодіяти
- Створюємо новий елемент(тег)
- Наповнюємо його текстом
-  Вставляємо новий елелмент
*/

//Щоб вставити новий елемент:
//*BEFORE() - перед об'єктом 
textElement.before(newElement); //Тег з новим наповненням з'явився перед об'єктом

//* Element.insertBefore() - вставляє елемент перед вказаним дочірнім
//Синтаксис: insertedElement = Element.insertBefore(newEl, existingEl);
//newEl - елемент який потрібно вставити
//existingEl  - елемент перед яким необхідно вставити  newEl

//*AFTER() - після об'єкта
textElement.after(newElement);
//Тег з новим наповненням з'явився після об'єкта

//* PREPEND() - вставляє елемент або текст на початку списку дочірніх елементів.
//Підтримується не всіма браузерами
textElement.prepend(newElement); 

//*Element.append( app ) - вставляє елемент або текст у кунець списку дочірніх елементів
//Якщо такий елемент вже існує в документі то він видаляється і вставляється заново. Не всі браузери підтримують. Для підтримки усіх браузерів використовують метод Element.appendChild.
textElement.append(newElement);

//* Element.appendChild() - вставляє елемент в кінці списку дочірніх елементів(аналог append)
//Якщо елемент існує то він видаляється і вставляється
/* Синтаксис запису:
-Звертаємось до об'єкта з яким хочемо взаємодіяти
-Пишемо потрібний метод, в залежності від того куди потрібно вставити елемент
-В () пишемо назву елемента*/

/*
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

____________________________________________________________________
/* За допомогою будь якого із цих методів можна вставляти декілька фрагментів */

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

/*Рядки вставляються безпечним методом, як це робить textContent. Разом ці методи можуть використовуватись тільки для вставки DOM-вузлів або безпечної вставки текстових фрагментів
 */


//*insertAdjacentHTML(position, text) - вставляє HTML  текст у елемент
//position - рядок який містить позицію вставки тексту
//text - рядок з HTML  текстом який потрібно вставити
/* Розбирає заданий текст у вигляді HTML і вставляє р-тат елементів і вузлів в дерево DOM у зазначеній позиції. Працює швидше за  innerHTML. Не всі браузери підтримують*/

//Отримуємо об'єкт
//const textElement = document.querySelector('.lesson_text');

//Вставляємо текст, HTML, елемент
textElement.insertAdjacentHTML(
  'afterend', //<- відповідає за те куди саме буде вставлений 2 параметр
  `<p>Якийсь текст <span class = "yellow">Якийсь жовтий текст</span>манєнький текст</p>`
);

//beforebegin - вставить HTML безпосередньо перед textElement
//afterbegin - вставить HTML на початок textElement
//beforeend - вставить HTML в кінець textElement
//afterend - вставить HTML пісдя textElement


//* insertAdjacentText - вставляє текст у елемент, навіть якшо текст має теги вони будуть вставлені як текст
//* insertAdjacentElement - вставляє елемент в задану позицію в елементі

//Отримуємо об'єкт
//const textElement = document.querySelector('.lesson_text');

//Вставляємо текст
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
!<!-- Методи вставки insertAdjacentHTML-->
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


____________________________________________________________________
//* ПЕРЕНЕСЕННЯ ДОКУМЕНТА
/* Можна вставляти не тільки нові вузли, але переносити існуючі.Це робиться за допомогою звичайних методів вставки. Всі методи вставки автоматично видаляють вузли із старих місць */

//Oтримуємо об'єкт
 lessonBlock = document.querySelector('.lesson');
//Oтримуємо об'єкт
const title = document.querySelector('h3');

//Переносимо  title в кінець блоку lessonBlock
lessonBlock.append(title); //Тепер заголовок h3 знаходиться всередині об'єкта lesson в кінці

//* CloneNode - клонування вузлів
//Якщо потрібен не перенос, а саме копія елелмента. Копіює всі атрибути і їх значення. При цьому не копіює події додані за допомогою метода //*addEventListener() 
// і призначені через властивість елемента:  Element.подія=function; .

//Отримуємо об'єкт який потрібно клонувати
//const textElement = document.querySelector('.lesson_text');
//Клонування без дочірніх елементів, тобто без вмісту. Якщо  в () прописати  true, то це буде глибоке клонування
const cloneTextElement = textElement.cloneNode();
//Глибоку клонування разом з вмістом. ТОчна копія оригінала
//cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
//Вставляємо в lessonBlock клонований об'єкт cloneTextElement
lessonBlock.append(cloneTextElement);

//* remove - видалення вузлів
//Видаляє поточний елемент із списку дочірніх своїх батьків. НЕ всі браузери підтримують.
//ДЛя сумісності браузерів викор //*Element.removeChild().
//Отримуємо об'єкт 
//const textElement = document.querySelector('.lesson_text');

//Видаляємо об'єкт
textElement.remove();
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

//! Шукати можна не тільки в об'єкті DOCUMENT 
//В константу subList отримуємо колекцію об'єктів у яких є клас .lesson_sub-list
const subList = document.querySelectorAll('.lesson_sub-list');
//Оголошуємо константу subItem і шукаємо теги <li> тільки в середині цього об'єкта subList . [0] - для того щоб взяти перший об'єкт і вже всередині нього шукаємо всі теги <li>
const subItem = subList[0].querySelectorAll('li');
console.log(subItem);

//! За замовчуванням querySelectorAll перевіряє тільки останній елемент без урахування контексту.
/* Тобто якщо ми вибрали .class2 .class3 в контексті класа .class1 , при тому що  .class2 не являєьбся нащадком елемента в якому відбувався пошук .class1, то .class3 всеодно буде знайдений */

//* elen.querySelector(CSS);
//Повертає перший аргумент в середині elem, який відповідає даному CSS-селектору

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

        //* elem.getElementsByTagName(tag) - повертає масив елементів за вказаним ім'ям
        //Шукає елементи з даним тегом і повертає їх колекцію.пошук може проводитись як в об'єкті document так і в будь якому іншому об'єкті.
        // Передавши "*" замість тега, можна отримати всіх нащодків
        const elems = document.getElementsByTagName('li');
        console.log(elems);

        //* getElementsByClassName(className) - повертає список елементів за  класом
        //Повертає елементи які мають даний CSS-клас
        const elemsTwo = document.getElementsByClassName('lesson_item-list');
        console.log(elemsTwo); // Отримаємо живу колекцію всіх знайдених об'єктів

        //* document.getElementsByName(name) - повертає список елементів за вказаним ім'ям
        //Повертає елементи з заданим атрибутом name. Дуже рідко використовується. Пошук тільки всередині об'єкта document.
        //Тобто якщо в документі є об'єкт з атрибутом name = "list" і в нього є певне значення "list", от саме по цьому значенню можна шукати за допомогю даного методу
        const elemtThree = document.getElementsByName('list');
        console.log(elemsthree); // Отримаємо живу колекцію таких об'єктів
___________


//!Атрибути і властивості DOM-елементів
/* В різних DOM-елементів можуть бути різні властивості.
Наприклад у тега <a>, є властивість, пов'язана із силками, а у тега <input> - властивість пов'язана із полем введення.

В HTML у тегів можуть бути атрибути. Коли браузер парсить HTML, щоб створити DOM-об'єкти для тегів, він розрізняє стандартні атрибути і створює DOM-властивості для них

Кожен DOM-вузол належить відповідному вбудованому класу
 */

//*href - URL адреса зовнішнього посилання.
//link - має властивість href
const link = document.querySelector('.lesson_link');
console.log(link.href);// Отримуємо послання

//Поле для введення input не має властивості href
const input = document.querySelector('.lesson_input');
console.log(input.href); //undefined

//*value
//input має властивість value
console.log(input.value); // отримуємо значення поля для введенян за замовчуванянм
console.log(link.value); // undefined , не має такої властивості

//Отримуємо список доступних властивостей елемента
console.dir(link); // Виведе в консоль о'бєкт який буде мати список доступних властивостей

//*Довільні атрибути

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
//Перевіряємо наявність атрибуту
if(lessontext.hasAttribute('some-attribute')) {
  console.log('some-attribute існує');
}

//*Синхронізація між атрибутами і властивостями

/* 
Ми можемо звернутись до тої чи іншої властивості через методи доступа до атрибутів.
Коли стандартний атрибут змінюється, відповідна властивість автоматично обновляється.
Це працює і в зворотньому напрямку(з деякими виключеннями)  */

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
/* Всі атрибути, які починаються з префікса 'data' зарезервовані для використання. Вони доступні в властивості dataset*/

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
console.log(link.hidden);
link.hidden = true; // Об'єкт зникне

____________________________________________________________________
//! Стилі і класи
//* Управління класами 

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
*add() -додає новий клас
*remove() - видаляє клас
*toggle() - переключає клас
*item() - повертає клас з індексом
*contains() - перевіряє наявність вказаного класа в елементі
*toString() - повертає рядок з класами елементу
 */
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

//*Управління стилями

//* element.style - відриває доступ до HTML-атрибуту style

//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');
//Задаємо стиль за допомогою CSS властивості
element.style.color = 'red';

//* camelCase - використовується для властивості із декількох слів
//margin-bottom
element.style.marginBottom = '30px';
//z-index
element.style.zIndex = '10';
//Кожна властивість пишеться окремо

//Отримання значення властивості
//Тільки якщо воно записано в атрибуті style
console.log(element.style.marginBottom);

//Скидання стилю за допомогою порожнього рядка
element.style.marginBottom ='';

//* style.cssText - дозволяє записати відразу багато стилів, повний перезапис стилів які до цього були в даному атрибуті
//Отримуємо елемент
const element = document.querySelector('.lesson_item-list_red');

element.style.cssText = `
  margin-bottom: 30px;
  color: red;
  `;

  //* getComputedStyle(element, [pseudo]) - повертає всі стилі CSS  елементу. Використовується щоб отримати поточне значення тої чи іншої властивості
  //Наприклад отримати поточну ширину щоб додати/відняти до неї щось і якось змінити
//Працює тільки для читання
//Повертає об'єкт  CSSStyleDeclaration який містить значення всіх властивостей CSS вказаного елементаю Повертає стилі CSS які вказані безпосередньо у елементі style="", вказані в стилях
//element - елемент DOM
//pseudo - псевдо-елемент

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

Маніпулювати властивістю style варто лише в тому випадку, якщо класи допомогти не можуть. Наприклад при зміні координатів об'єкта на ходу*/

