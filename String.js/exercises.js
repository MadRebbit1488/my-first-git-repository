/* 
Задача №1
Витягнути ім'я і прізвищє в окремі змінні */
const fullUserName = 'Вася aka Terminator Пупкін';

/* Потрібно отримати ім'я, для цього викор метод slice.
Ми знаємо,щ що ім'я знаходиться спочатку, тому беремо
нульовий індекс. Але ми не знаємо де воно закінчується,
тільки те що після нього іде пропуск .
Тому другим аргументом виступає fullUserName.indexOf[' '],
який шукає перший індекс пробілу . Знайшовши індекс пробілу
можна отримати ім'я */
const userName = fullUserName
.slice(0, fullUserName.indexOf(' '));
console.log(userName); //Вася

const userSurname = fullUserName
.slice(fullUserName
    .lastIndexOf(' ') + 1 , fullUserName.length);
console.log(userSurname); //Пупкін
// + 1 потрібен для того, щоб виводити прізвищє без пробіла

________________________________________________________________
//Задача №2
/* Перевірити чи являється це номером телефону  */
//Вірні
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56';

//Не вірні
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber (num) {
    //Очищнння від лишніх відступів
    num = num.trim();
    //Замінити +7 на 8, якщо цього не зробити, то воно не помітиться
    num = num.replace('+7', '8');
    //Якщо номер починається не з 8, то потрібно явно повернути false
    if (!num.startsWith('8')){
        return false;
    }
    //Прибираємо лишні дужки, відступи і дефіси
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    //Тепер рядок очищєний і має мати ось такий вигляд '89103235356'
    //Потрібно провести додаткову перевірку на довжину
    if (num.length != 11){
        return false;
    }
    //Перевірка на наявність тільки чисел
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}
console.log(isPhoneNumber(num1)); //true
console.log(isPhoneNumber(num1Error)); //false
console.log(isPhoneNumber(num3)); //true
console.log(isPhoneNumber(num3Error)); //false
//Щоб код працював коректно, спочатку потрібно прибрати лишні елементи,
//а потім зробити перевірки на довжину, збіг початку і підкінець на наявність букв

//На практиці дану задачю варто вирішувати через регулярні вирази

________________________________________________________________
//Задача №3
/* Маскування карти.
Потрібно замаскувати все, окрім останніх 4-х символів */

//Моє рішення, по суті те саме, але я не знала довжину 
const card = '2432834503458353';

 const maskedCard = card
 .slice(card.length -4).padStart(card.length, '*');
console.log(card.length); //16
console.log(maskedCard.length); //16
console.log(maskedCard); //************8353
/*slice виводить видалені елементи, вони перезаписали
 змінну card, і потім за допомогою padStart, цей р-тат 
 замінився'*'
  */
//Правильна відповідь
console.log(card.slice(-4).padStart(16, '*'));//************8353

/* Алгоритм Лу́на (англ. Luhn algorithm) — алгоритм 
вычисления контрольной цифры номера пластиковой карты 
в соответствии со стандартом ISO/IEC 7812 */
________________________________________________________________
//Задача №4
let str = 'How are you?';
console.log(str.split(' ')[1]); //are
______________________________________
//Задача №5
//Зробіть перший символ заголовним
//Напишіть ф-цію ucFirst(str), яка повертає рядок str з заголовною першою літерою
//Мій варіант
function ucFirst(str) {
  return str.replace('d', 'D');
}
console.log(ucFirst('dio')); //Dio

//Інші віріанти
//Перестворення рядка на основі існуючього
let str4 = 'dio';
let newStr = str4[0].toUpperCase() + str4.slice(1);
console.log(newStr); //Dio

//
function ucFirst(str) {
  if(!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('dio')); //Dio

/* if(!str) return str;
if(!str) - це умова, яка первіряє чи str має false. Якщо таке значення є, тобто null, undefined, false, 0, NaN або порожній рядок, то він ввожається неправдивим.
return str - вказує на повернення значення  str з ф-ції. Якщо str має false значення, то він повернеться з ф-ції без змін  */
________________________________________________________________
//Задача №6
//Перевірка на спам
/* Напишіть ф-цію  checkSpam(str), яка повертає true, якщо str містить 
'viagra' або 'XXX' , а інакше false. Ф-ція має бути нечутливою до регістру*/

function checkSpam(str) {
 let lowerStr = str.toLowerCase(); //Переводить входження в нижній регістр
 return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now')); //true
console.log(checkSpam('free xxxxx')); //true
console.log(checkSpam("innocent rabbit")); //false
________________________________________________________________
//Задача №7
/* Створіть ф-цію truncate(str, maxlength),яка первіряє довжину рядка str 
і якщо вона перевершує  maxlength, заміняє кінець str на "…", так щоб її довжина стала рівною maxlength.
Р-татом ф-ції має бути той же рядок, якщо зменшення не потрібно*/

function truncate(str, maxlength) {
  // if(str.length > maxlength) {
  //   return str.replace(str.slice(maxlength), '...');
  // } else {
  //   return str;
  // }

  return (str.length > maxlength) ?
  str.slice(0, maxlength -1) + '...' : str;
}
console.log(truncate('Ось, що мені хотілось би сказати на цю тему:', 20)); //Ось, що мені хотілос...
console.log(truncate('Всім привіт!', 20)); //Всім привіт!
________________________________________________________________
//Задача №8
//Вивід числа
/* Є вартість у вигляді рядка "$120". Тобто спочатку іде знак валюти, а потім число.
Створіть ф-цію  extractCurrencyValue(str), яка буде із такого рядка виділяти числове значення і повертати його*/

function extractCurrencyValue(str){
return +str.slice(1);
}
/*+str.slice(1);
Виклик методу slice вірізає підрядок з рядка, починаючи з заданого індексу і повертає його як новий рядок.
'+' перетворює отримане значення в число  */
console.log(extractCurrencyValue('$120') === 120); //true
________________________________________________________________
//Задача №9