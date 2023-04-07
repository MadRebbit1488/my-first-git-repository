//isFinite (кінцевий)
/* Глобальна ф-ція, яка оприділяє чи являється передане значення останнім числом. При потребі параметр перетворюється спочатку в число.
Синтаксис: isFinite(testValue)
-testValue - аргумент для перевірки чи являється значення кінцевим числом

Це ф-ція верхнього рівня і вона не пов'язана ні з одним об'єктом.
Її можна використовувати там, де потрібно визначити, чи являється аргумент останнім числом. Вона досліджує число в своєму параметрі. Якщо аргумент являється NaN, позитивною чи негативною нескінченістю, метод поверне false, інакше - true.
*/

//Приклади:
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); //false

isFinite(0); // true
isFinite(2e64); // true

isFinite('0'); // true, але булоб false, якщо викор більш надійніший варіант Number.isFinite("0")

//Приклад коду
function div (x) {
  if (isFinite(1000/x)) {
    return 'Число не нескінченне';
  }
  return 'Число нескінченне';
}

console.log(div(0)); //Число нескінченне
console.log(div(1)); //Число не нескінченне