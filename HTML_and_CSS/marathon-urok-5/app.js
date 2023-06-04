// Обробка кнопки почати гру
const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Показує наступний екран
  screens[0].classList.add('up');
});