//Ф-ції першого класу
/* 
Ф-ції першого класу можна використовувати як змінну:
const a = (b) => b++;
Передавати в інші ф-ції:
Використовувати як аргумент іншої ф-ції
function g(a) { // "g" ф-ція вищого порядку якщо  "a" це ф-ція
  return a; //Повертати із ф-ції
}
*/

/* Ф-ції вищого порядку - це ті які приймають інші ф-ції:
function g(a){}
або їх повертають:
function f (){
  return a;
}
Вищий порядок означає, що ми або приймає іншу ф-цію або повертаємо
 */

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function power (a, b) {
  return a**b;
}
//Ф-ція вищого порядку
//fn - ф-ція яка буде виконувати калькуляцію над двома числами
//Ф-ція яка передається в середині іншої ф-ції, називають callback function
//Ф-ція calculate дозволяє абстрагуватись від конкретної реалізації конкретної ф-ції і сказати, що ми хочемо виконати розразунок над "a" і "b" за допомогою якоїсь ф-ції "fn"
function calculate (a, b, fn) {
  console.log(fn.name); // Щоб розуміти яка  ф-ція викликається, можна звернутись до її властивості через .name
  const res = fn (a, b);
  return res;
}

let res = calculate (3, 5, add);
console.log(res); //  add 8

res = calculate (3, 5, subtract);
console.log(res); //subtract  -2

res = calculate (3, 5, power);
console.log(res); //power  243

___ 
function a (num, b) {
  return b(num);
}
console.log(a(1, (n) => n+5 )); //6
___
function tax (percent) {
  return function (sum) {
    return percent * sum;
  }
}

const taxUser = tax(0.13);
console.log(taxUser(1000)); //130
___
let cube = x => y => z => x * y *z;
console.log(cube(2)(2)(2)); //8
___
let sq = x => y => z => x + z + y;
console.log(sq(2)(2)(2)); // 6

___________________________________________________________________________
//Повернення однієї ф-ції із іншої. Замикання
//Оголошена ф-ція яка передає один аргумент, вона нічього не робить окрім того, що повертає нову ф-цію. В рамках нової ф-ції потрібно число яке буде підноситись в ступінь. І в р-таті цієї ф-ції повертається число в потрібному ступені
function power (pow) {
  return function (num) {
    return num ** pow;
  }
}


//Запис у вигляді стрілкової ф-ції
//pow- аргумент першої ф-ції,  num - аргумент другої ф-ції, і так як немає тіла  відбувається відразу повернення значення num ** pow
// let power = pow  => num => num ** pow;

//powerOfTwo - ф-ція
//pow - ступінь
const powerOfTwo = power (2); //Підносить до квадрата
console.log(powerOfTwo(5)); //25

const powerOfThree = power(3); //Підносить до куба
console.log(powerOfThree(5)); //125

//Можна зробити коротший запис
//Виводимо в 5 ступінь
//power(5) це ф-ція яка викликається з аргументом 4
//power (pow) - 5 , function (num) - 4
console.log(power(5)(4)); //1024

