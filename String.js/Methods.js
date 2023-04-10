//Розглянемо стандартні методи для роботи з рядками

const userName = 'Вася Пупкіна';
//Отримуємо першу букву  імені, щоб написати скорочення
//Це можна зробити звернувшись до рядка як до масиву
console.log(userName);
console.log(userName[0]); // В
//В даному випадку рядок буде поводити себе як масив
//таким чином модна побуквенно отримати весь рядок
/* const userName = 'Вася Пупкін'[0]; // В
 можна даний метод використовувати безпосередньо в
  самій змінній */

//Метод charAt
//Працює аналогічно
console.log(userName.charAt(1)); //а

//Можна дізнатись довжину рядка, так як образно це масив 
//букв
console.log(userName.length); //11
/* Отриману довжину можна якась обробляти в випадку
коли це необхідно */

//Пошук по рядку
//indexOf - повертає перше співпадіння індекса 
console.log(userName.indexOf('а')); //1
//Необов'язково шукати одну букву
console.log(userName.indexOf('уп')); //6
// lastIndexOf - повертає останнє співпадіння 
console.log(userName.lastIndexOf('а')); //11
// Includes
console.log(userName.includes('а')); // true

//Вивід частин рядка
//SLICE - обрізає рядок
//Масив обрізався далі від 4 індексу 
console.log(userName.slice(4));// Пупкіна
console.log(userName.slice(5, 8)); //Пуп