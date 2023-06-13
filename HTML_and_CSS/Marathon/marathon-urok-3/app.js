// Є інтерактив, який при натисканні на кнопки має змінювати слайди

const upBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');

// Перед тим як задавати події, задаємо правильне положення градієнта і картинки для того щоб це все поєднувалось

/*Метод querySelector виконується в об'єкті document і призначений для пошуку першого елемента, який відповідає вказаному CSS селекторую. У даному випадку метод шукає елелмент з класом 'sidebar' , після чього повертає посилання на цей елемент. Після чього його можна використовувати для маніпуляцій: зміна стилів, властивостей, додавання подій*/

// Оперуємо стилями об'єкта sidebar
const sidebar = document.querySelector('.sidebar');

//
const container = document.querySelector('.container');

// разуємо скільки в нас слайдів, звернувшись до блоку "main-slide"
const mainSlide = document.querySelector('.main-slide');

// Отримуємо к-ть div в блоці main-slide для того щоб отримати саме число - .length
const slidesCount = mainSlide.querySelectorAll('div').length;

// Змінна яка слідкує який слайд активний
let activeSlideIndex = 0;

// тепер значення vh треба прорахувати, на випадок якшо картинок виявиться більше
// Віднімаємо одиницю, тому що в нас вже є один слайд
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click' , () => {
  changeSlide('up');
});

downBtn.addEventListener('click' , () => {
  changeSlide('down');
});

// Додаємо управлянні слайдером на клавіатурі
document.addEventListener('keydown', event => {
  // console.log(event.key);
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
});

// Як параметр передеається напрямок по якому робиться клік
function changeSlide (direction) {
  if (direction === 'up') {
    // Якщо натискається кнопка вверх, потрібно додати 1 до активного слайду. Але к-ть слайдів обмежена(slidesCount - ось йе к-ть слайдів) тому потрібно зробити щє одну перевірку
    activeSlideIndex++
    /* Індекси в даномувипадку ідуть від 0 до 3, а slidesCount = 4, Тобто коли індекс = 4, він вихоить за рамки і його потрібно обнулити */
    if(activeSlideIndex === slidesCount) {
      // Скидання
      activeSlideIndex =0;
    }
    // Ф-ціонал для кнопки вниз
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount -1;
    }
  }

 
  // Анімуємо
  // - впливає на напрямок по якому буде   підійматись чи опускатись слайд
  // Для того щоб перемкнути картинку, потрібно за допомогою властивості translateY на розмір екрану

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

