//Цикли WHILE і DO..While

/* 
while -поки
Будь який вираз або змінна можуть бути умовою цилку, а не тільки порівняння: умова while вираховується і перетворюється в логічне значення.
Наприклад: while(і) - короткий запис while(і!=0)
Має ширше значення, може перевіряти нестандартні умови кінця циклу */

// Поки i < 5 буде виконуватись все, що вказано всередині блоку {}
let i = 1; //Початкова умова
while (i < 5) { //Умова зупинки
  console.log(`Вивід - ${i}`); ////Вивід - 1,Вивід - 2,Вивід - 3,Вивід - 4
  i++; // Крок
}

//Коли "b" буде рівне 0, умова стане не істинною і цикл зупиниться
let b = 3;
while (b) {
    console.log(`Вивід - ` +b); //Вивід - 3, Вивід - 2, Вивід - 1
    b--;
}


//Виводимо числа з масиву < 5
//Запис через for
const arr = [1, 4, 8, 7];
for (let i = 0; i < arr.length; i++){
  if (arr[i] > 5){
    break;
  }
  console.log(arr[i]); //1, 4
}

// Запис через while
//Якщо масив не буде мати елементів > 5 може виникнути проблема,тому варто додати щє одну умову i < arr.length
//Запис простіший за цикл for, тому що умови  i < arr.length і if (arr[i] > 5) обєднані
let a = 0;
while (arr[a] <= 5 && a < arr.length) {
  console.log(arr[a]); //1, 4
  a++;
}

___________________________________________________________________________
//Конструкція DO..WHILE
/* Перевірка відбувається після виконання коду, тобто спочатку виконуєтьсвя тіло, а потім перевіряється умова і поки значення буде true, цикл буде виконуватись знову і знову.
Підходить для випадків коли потрібно виконати тіло циклу хочя б один раз, навіть якщо умова не істинна
Буде працювати поки виконується умова, в даному випадку j < 0 */
let j = 0;
do {
    console.log(j);
    j++
} while (j < 0) //0

//
let c = 0;
do {
    console.log(`Вивід: `+c); // Вивід: 0, Вивід: 1, Вивід: 2
    c++;
} while (c < 3);

___ 
