//Порівняння forEach i for
/* forEach - повнястю проходиться по масиву елементів, мінус в тому що ітерацію не можна зупинити і елементи ітеруються докінця, можуть виникнути проблеми з асинхроністю
for - проходиться по всіх елементах масиву, але можливо зупинити ітерацію, або прорустити шматок коду. Немає проблем з асинхроністю. Зустрічається частіше за forEach 
 */

//Задача. Потрібно вивести бали за кожен раунд гри
const score = [5, 10, 0, 15];

//Як це зробити методом for
for (const el of score) {
  console.log('Раунд: ' + el); //Раунд: 5, Раунд: 10 і т.д
}
/* Додатково потрібно щє вивести номер раунду і для цього потрібно не тільки ітеруватись по елементам, але і знати їх індекс. Для цього можна використати метод for..in або щє одну фічю метод enties():
Метод enties() - це метод масиву який повертає масив, де першим елементом являється індекс а другим сам елемент */

for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`); //Раунд 1: 5  => Раунд 4: 15
}



//ітерація методом forEach
//Більш короткий запис, де не потрібно класти змінну в ф-цію, а просто її оголосити і відразу використовувати
score.forEach((el, i) => {
  console.log(`Раунд ${i + 1}: ${el}`); //Раунд 1: 5  => Раунд 4: 15
});
/* score.forEach для кожного елементу масиву виконує ф-цію
(5, 0) => { виконується тіло ф-ції}
Воно виконалось, переходимо до другого елементу
(10, 1) => { виконується тіло ф-ції}
(0, 2) => { виконується тіло ф-ції}
(15, 3) => { виконується тіло ф-ції}
Таким чином виконується callback ф-ція для кожного із елементів
Відмінністю від for, є те що ітерацію не можна зупинити, тому ітеруються всі елементи.
Тому forEach зручно виконувати коли непотрібно нічього переривати

Приклад для того щоб обозначити ф-цію вищого порядку
const iterator = (el) => {
  console.log(`Раунд: ${el}`); //Раунд: 5 => Раунд: 15
}
score.forEach(iterator); */