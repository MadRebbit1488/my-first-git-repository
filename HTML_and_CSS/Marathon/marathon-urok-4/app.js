// Отримуємо елемент по id "board"
const board = document.querySelector('#board');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'rgb(235, 201, 12)', '#c20c85', '#e43a06', '#113ed3', '#239746'];
// Генеруємо к-ть квадратів програмним управлінням
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++ ) {
  const square = document.createElement('div');
  // Робимо квадрат
  square.classList.add('square');

  // Додаємо першу подію до кожного квадрата mouseover, яка викликається коли миша наводиться на певний квадрат
  square.addEventListener('mouseover',setColor);

  //Подія скидання кольору
  square.addEventListener('mouseleave', removeColor);


// Додаємо square в HTML тобто в board
// За допопогою метода append додаємо квадрат
  board.append(square);
}

function setColor (event) {
  // Отримуємо елемент від event
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  // Додаємо об'єм кольорам
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  // Шоб елементи не залишали після себе слід, їх потрібно видалити
  element.style.boxShadow = `0 0 2px #000`
}

// Ф-ція випадкового вибору кольору
function getRandomColor () {
  // Метод рандомності Math.random, звертаємось до індексів масиву
  // Math.floor округлює в меншу сторону
  return colors[Math.floor(Math.random() * colors.length)];
}