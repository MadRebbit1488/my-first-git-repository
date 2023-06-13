// Обробка кнопки почати гру
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
// отримуємо time-list
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'rgb(235, 201, 12)', '#c20c85', '#e43a06', '#113ed3', '#239746'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Показує наступний екран
  screens[0].classList.add('up');
});

// Додаємо до timeList за допомогою addEventListener подію click і отримуємо event
timeList.addEventListener('click', event => {
  // contains перевіряє чи є в метода певний клас.Якщо у класа є time-btn це означає що це кнопка
  if (event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame()
  }
});

board.addEventListener('click', event => {
  // Обробляємо клік по кружку
  if (event.target.classList.contains('circle')){
    score++;
    // Прибираємо кружок після кліка
    event.target.remove();
    // Щоб з'явився новий кружок
    createRandomCircle();
  }
});

//DEBUG
// startGame();

function startGame() {
  // Задаємо таймер. Ф-ція setInterval через заданий проміжок часу буде виконувати якусь ф-цію
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime () {
  // Це означає що час вийшов 
  if (time === 0) {
    finishGame()
  } else {
    // Зменшує час кожної секунди
    let current = --time;
    if (current < 10) {
    // Додає щє один 0 до числа якщо воно менше 10, щоб мати вигляд 00:09, а не 00:9
    current =`0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  // Прибираємо час по завершенню шри
  // Або так
  timeEl.parentNode.remove();
  // Або так
  // timeEl.parentNode.classList.add('hide');
  // Додаємо заголовок закінчення гри
  board.innerHTML = `<h1>Рахунок: <span class ="primary">${score}</span></h1>`
}

// Додає рандомні кружки на полі і обробляє їх
function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect();
  // console.log(fff); //DOMRect
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  // параметр який відповідає за розмішення по горизонталі
  circle.style.left = `${x}px`;
  // Додаємо рандомний колір
  setColor(circle);

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);

}


function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}



function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
} 

/* Домашка:
-Додати рандомні кольори кружечкам  */

