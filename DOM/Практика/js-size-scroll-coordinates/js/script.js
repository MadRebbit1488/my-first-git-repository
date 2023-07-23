
//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
Узнать ширину полосы прокрутки

// Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы

// Задача №3.
Получите координаты любых трех элементов на странице
*/




__________________________
//!Ширина/висота вікна браузера
//*clientWidth / clientHeight - доступна ширина і висота вікна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElement);
console.log(mainElementWidth);
console.log(mainElementHeight);

/* Доступна ширина/висота - це область доступна для роботи, від края браузера до смуги прокрутки якщо вона є  */

//Ширина/висота браузера розом з смугою прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);


//!Ширина/висота документа - включаючи прокручену частину
let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth,
);

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
);
console.log(scrollWidth);
console.log(scrollHeight);



//!Отримання к-ті прокручених пікселів, тільки для читання
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);  // прокручено на 891px
console.log(windowScrollLeft); // прокручено на 0px




//!Управління прокруткою сторінки
//*scrollBy(x, y) - прокручує сторінку відносно її поточного положення
function setScrollBy(){
	window.scrollBy(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}
//При клікі на кнопку сторінка прокрутиться вниз на 50px і при кожному прокручуванні додажться щє 50px


//*scrollTo(pageX, pageY) - прокручує сторінку на абсолютні координати (pageX, pageY), теж саме, що і window.scroll()


//Далі 50px рухатись не буде
function setScrollTo(){
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions(){
	window.scrollTo({
		top: 500,
		left: 0,
		behavior: 'smooth' //відповідає за тип прокрутки
    //smooth - плавний тип прокрутки
    //instant - не плавний тип прокрутки
		//або auto; за замовчуванням auto
	});
}
//Не працює в Safari




//*elem.scrollIntoView(top) - виклик даного метада прокручує сторінку, щоб елемент опинився зверху. 
/* 
*top = true(за замовчуванням) сторінка буде прокручена щоб elem з'явився в верхній частині вікна. Верхній край елемента суміщений з верхньою частиною вікна
*top = false - сторінка буде прокручена щоб elem з'явився знизу. Нижній край елемента буде суміщений з нижнім краєм вікна*/
//true
function setScrollIntoView(top){
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top){
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView({
    //"start", "center", "and" або "nearest". За замовчуванням "center"
    block: "center",
    //"start", "center", "and" або "nearest". За замовчуванням "nearest"
    inline: "nearest",
    //"auto" або "smooth". За замовчуванням "auto"
    behavior: "smooth"
  });
}
//Опції не працюють в Safari


//*Заборона прокрутки
function setEnableDisableScroll(){
  //document.body.style.overflow = "hidden";
  document.body.classList.toggle('scroll-lock');
}
/*Можна зупинити прокрутку за допомогою  document.body.style.overflow = "hidden"; 
Або створити класс для body і потім в CSS  по цьому класу додати параметр overflow: hidden;  
JS
		document.body.classList.toggle('scroll-lock');
CSS
		body.scroll-lock {
			overflow: hidden;
		} */








 //!РОЗМІР І ПРОКРУТКА ЕЛЕМЕНТА
//*Метрики елементів на сторінці


//*offsetParent / offsetLeft / offsetTop - позиція об'єкта
const block = document.querySelector('.lesson__block');
const elementOffsetParent = block.offsetParent;
console.log(elementOffsetParent);



//*offsetParent / offsetLeft / offsetTop
//Отримуємо позицію об'єкта відносно предка
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;
console.log(elementOffsetLeft, elementOffsetTop);




//*offsetWidth / offsetHeight - загальні розміри елемента
//Отримуємо розмір об'єкта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;
console.log(elementOffsetWidth, elementOffsetHeight);

//Загальна ширина і висота об'єкта


//*clientTop / clientLeft - відступи внутрішньої частини елемента від зовнішньої, разом із смугою прокрутки
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;
console.log(elementClientTop, elementOffsetHeight);



//*clientWidth / clientHeight - розмір об'єкта без рамок і смуги прокрутки
const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;
console.log(elementClientWidth, elementClientHeight);



//*scrollWidth / scrollHeight - розміри об'єкта який включає в себе прокручену(котру не видно) частину. В іншому працює як clientWidth / clientHeight 
const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;
console.log(elementScrollWidth, elementScrollHeight);



//*scrollLeft / scrollTop - розмір прокрученої області
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;
console.log(elementScrollLeft, elementScrollTop);
/* Працює не тільки для читання, тому можна задати прокручену частину */
block.scrollTop = 150;




//* scrollBy / scrollTo / scrollIntoView - дані методи прокрутки працюють не лише для вікна браузера але і для об'єктна на сторінці у якого є смуга прокрутки

function setElementScrollBy(){
  block.scrollBy({
    top: 20,
    left: 0,
    behavior: "smooth"
  })
}




//!КООРДИНАТИ 
//*getBoundingClientRect
const item = document.querySelector('.lesson__item');
//Отримуємо координати відносно вікна браузера
const getItemCoords = item.getBoundingClientRect();
console.log(getItemCoords);
//В об'єкті DOMRect існують додаткові метрики (окрім width/height/left/top) такі як bottom, right . Це значення суми, якщо скласти top+height=bottom
//Так як зднавчення виводяться в вигляді об'єкта, то можна отримати в константу конкретну координату
const getItemCoordsLeft = item.getBoundingClientRect().left;
console.log(getItemCoordsLeft);

const getItemTopCoord = item.getBoundingClientRect().top;
console.log(getItemTopCoord);

const getItemTopDocumentCoord = getItemCoords + window.pageYOffset;
console.log(getItemTopDocumentCoord);  //[object DOMRect]0 відносно об'єкта буде мати незмінне положення




//*document.elementFromPoint(x, y)  - отримання об'єкта по координатам
const elem = document.elementFromPoint(100, 100);
console.log(elem);  //<h3>Урок №14</h3>
//Дізнаємось який об'єкт знаходиться по заданим координатам
//Але отримуваний об'єкт може відрізнятись в залежності від того де знаходиться scroll, тому що координати відносно вікна браузера


















//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


/*
// Размеры окна браузера
// clientWidth и clientHeight

// Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
*/
//---------------------------------

/*
// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
*/

//---------------------------------

/*
// Получить кол-во прокрученных пикселей
// Только для чтения
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

//---------------------------------
// Управление прокруткой страницы 

/*
// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

function setScrollBy() {
window.scrollBy(0, 50);
const windowScrollTop = window.pageYOffset;
console.log(windowScrollTop);
}
*/

//------

/*
// Метод scrollTo(pageX, pageY) прокручивает страницу
// на абсолютные координаты(pageX, pageY).
// тоже самое что и window.scroll()

function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/

//------

/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/
/*
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
// Опции не работают в Safari
*/


//-------

/*
// Запретить прокрутку
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}
*/
/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/

//========================================================================================================================================================

// Метрики элементов на странице

// Получаем объект
//const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент
// относительно которого позицианирован наш объект
//const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который
удовлетворяет следующим условиям:

1. Является CSS-позиционированным
	(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

//console.log(elementOffsetParent);

/*
Cитуации, в которых offsetParent равно null:
1. Для скрытых элементов
	(с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/


/*
// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
*/


//========================================================================================================================================================

// Общие размеры объекта
// offsetWidth и offsetHeight
/*
// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);
*/
// Метрики для не показываемых элементов равны нулю.

//========================================================================================================================================================

/*
// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);
*/

//========================================================================================================================================================

/*
// Размеры объекта без
// рамок и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443
*/

//========================================================================================================================================================

/*
// Размеры объекта включающие в себя
// прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);
*/

//========================================================================================================================================================

/*
// Размеры прокрученной области
// scrollLeft и scrollTop

block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);
*/

//========================================================================================================================================================

/*
// Методы управления прокруткой
// scrollBy, scrollTo и scrollIntoView
// работают и для объекта

function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: "smooth"
	})
}*/

//========================================================================================================================================================


// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
	(как position: fixed, отсчёт идёт от верхнего левого угла окна.)
	Принято обозначать clientX/clientY.
2. Относительно документа.
	(как position: absolute относительно <body>, отсчёт идёт от
	верхнего левого угла документа.)
	Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются такими же.

*/

//========================================================================================================================================================


/*
// Координаты относительно окна браузера
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);
*/

//========================================================================================================================================================


/*
// Координаты относительно документа
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);
*/

//========================================================================================================================================================

/*
// Получение объекта по координатам
// document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);
console.log(elem);
*/

//========================================================================================================================================================
//========================================================================================================================================================