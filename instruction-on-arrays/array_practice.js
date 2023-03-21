//Задача
/* Дано список задач
const tasks = ['Задача 1'];
Зробити ф-ції:
-Додавання задачі в кінець
-Видалення задачі по назві
-Перенесення задачі на початок списка по назві
Завжди змінюємо вихідний масив */

const tasks = ['Задача 1'];
//Ф-ція додавання задачі приймає в якості аргумента нову задачу tasks
function add (task) {
   tasks.push(task);
}
//Ф-ція модифікує вихідний масив

function remove(task){
  //Знаходимо індекс елемента який будемо видаляти
    const index = tasks.indexOf(task);
    if(index === -1){
      return; // Завдяки return ф-ція не модифікується якщо потрібний елемент масиву не знайдено
    }
  //Видаляємо за допомогою метода splice який модифікує вихідний масив  
    return tasks.splice(index, 1); // 1 вказує на те, що видаляється один елемент . return повертає tasks якщо він знайдений , в іншому випадку undefined
}

//Щоб приорітизувати задачу потрібно прибрати її із сторого місця і додати в початок
function prioritize (task) {
    const result = remove(task); //Видаляємо task
    if(!result){
      return;
    }
    tasks.unshift(result[0]); //Додаємо задачу на початку
  /*   const index = tasks.indexOf(task); //Отримуємо індекс задачі
    if(index === -1){
      return;
    }
    const oldTask = tasks[index];   //Зберігаємо стару задачю з індексом в змінну
    tasks.splice(index, 1); //Видаляємо елемент */
}

add ('Задача 2');
add ('Задача 3');
console.log(tasks); //Array(3) [ "Задача 1", "Задача 2", "Задача 3" ]
remove ('Задача 2');
console.log(tasks); //Array [ "Задача 1", "Задача 3" ]
prioritize('Задача 3');
console.log(tasks); //Array [ "Задача 3", "Задача 1" ]
 
//Такий метод написання ф-ція порушує принцип DRY



_________________________________________________________________________
/* Написати ф-цію congratsIfMoreThan100() яка аргументом приймає масив даних(користувачів) і виводить на екран за допомогою ф-ції alert() привітання, якщо користувачів більше 100. */

const usersArr = [
  {name: 'user1', age: 20},
  {name: 'user2', age: 30},
  {name: 'user3', age: 20}
];

function congratsIfMoreThan100(arr) {
  if(arr.length > 2){
    alert('H!');
    alert(arr.length);
  }else {
    alert('g');
  }
}

congratsIfMoreThan100(usersArr);
//Ф-ція має один аргумент, мосив . І перевіряє чи масив який їй прийде немає більше елементів





