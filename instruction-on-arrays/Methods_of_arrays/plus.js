//Перевірка Array.isArray()
// Масиви не являються окремим типом даних, вони основані на об'єктах

let obj = {};
let arr = [];

console.log(typeof obj); // object
console.log(typeof arr); // object

//Щоб дізнатись де масив, а де ні існує перевірка Array.isArray()
//Синтаксис:
if (Array.isArray(arr)) {
  console.log('Це масив!');
} else {
  console.log('Це не масив!');
}
//В () вказуємо змінну якій присвоєно масив і якщо це дійсно він повернеться true,якщо ні, то повернеться false