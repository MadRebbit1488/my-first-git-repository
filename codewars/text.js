
//Задача 
//Зразок тесту

//Задача 1 
//Рішення
function solution(str){
  return str.split('').reverse().join('');
}
//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  



//Задача 2
function smash (words) {
  return words.join(' ');
};
__
const smash = words => words.join(' ');
//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("smash", () =>  {

  it ("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it ("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });
    
  it ("Multiple words should be separated by spaces.", () =>  {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});


//Задача 3
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
  });
});



//Задача 4
/* Ви були в таборі з друзями далеко від дому, але коли прийшов час повертатися, ви розумієте, що ваше пальне закінчується, а найближча заправка знаходиться 50за милі! Ви знаєте, що в середньому ваш автомобіль проходить близько 25миль на галон. Залишилися 2галони.Враховуючи ці фактори, напишіть функцію, яка повідомляє вам, чи можна дістатися до насоса чи ні. */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const distancePossible = mpg * fuelLeft; // відстань, яку можна проїхати з залишком пального
  return distanceToPump <= distancePossible;
};
___
zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};
___
zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
//Зразок тесту
const assert = require("chai").assert;

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});

//Задача 5
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
  } 
  return arr;
};
___
const reverseSeq = length => Array.from({length}, () => length--)
___

//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});

//Задача 6
/* Напишіть програму, яка знаходить суму кожного числа від 1 до num. Число завжди буде додатним цілим числом, більшим за 0.
Наприклад (Input -> Output) :
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */
var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i = 1; i <= num; i++){
    sum +=i;
  }
  return sum;
}
___
summation = n => n * (n + 1) / 2;
//Зразок тесту
const assert = require('chai').assert;

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})


//Задача 7
/* Дуже просто, якщо дано ціле число або число з плаваючою комою, знайти його протилежність.
приклади:
1: -1
14: -14
-34: 34 */
function opposite(number) {
  //your code here
  if(number) {
    return -number;
  } else {
  return 0;
  }
}
___
function opposite(number) {
  return(-number);
}
___
function opposite(number) {
  if (number === 0) {
    return 0;
  } else if (number.toString().includes('.') && number > 0) {
    return parseFloat("-" + number, 10);
  } else if (number > 0) {
    return parseInt("-" + number, 10);
  } else if (number < 0 && number.toString().includes('.')) {
    var didget = number.toString().split('-').pop();
    return parseFloat(didget);
  } else {
    var didgets = number.toString().split('-').pop();
    return parseInt(didgets);
  }
}
//Зразок тесту
const { assert } = require('chai');

describe('Fixed tests', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('should return -1', () => {
    assert.strictEqual(opposite(1), -1);
  });
  it('should return 0', () => {
    assert.strictEqual(opposite(0), 0);
  });
  it('should return -4.25', () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it('should return -3.3333333', () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('should return 12525220.3325', () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('should return 5', () => {
    assert.strictEqual(opposite(-5), 5);
  });
});

//Задача 8
/* Натан любить їздити на велосипеді.
Оскільки Натан знає, що важливо залишатися зволоженим, він випиває 0,5 літра води за годину їзди на велосипеді.
Ви отримуєте час у годинах, і вам потрібно повернути кількість літрів, які вип’є Натан, округлену до найменшого значення.
Наприклад:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */
function litres(time) {
  let water = 0.5;
  let totalWater = Math.floor(time * water );
  return  totalWater;
}
___function litres(time) {
  return Math.floor(time/2);
}
___
const litres = time => Math.floor(time * 0.5);
//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Tests', () => {
    assert.strictEqual(litres(2), 1, 'should return 1 litre');
    assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    assert.strictEqual(litres(0), 0, 'should return 0 litres');
  });
});


//Задача 9
//Нам потрібна функція, яка може перетворити число (ціле) у рядок.
function numberToString(num) {
  // Return a string of the number here!
  return (String(num));
}
___
function numberToString(num) {
  return num.toString();
}
___
const numberToString = num => `${num}`;
___
numberToString = String;
//Зразок тесту
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});


//Задача 10
//Завершіть метод, який приймає логічне значення та повертає "Yes"рядок для true, або "No"рядок для false.
function boolToWord( bool ){
  //...
  if ( bool == true){
    return "Yes";
  } else {
    return 'No';
  }
}
___
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
___
let boolToWord = bool => bool ? 'Yes' : 'No';
//Зразок тесту
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });

//Задача 11
function booleanToString(b){
  //your code here
  return b.toString();
}
//Зразок тесту
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});

//Задача 12
/* Дано рік, поверніть століття, в якому він знаходиться.
Приклади
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */
function century(year) {
  // Finish this :)
  let century = Math.ceil(year/100);
  return century;
}
___
const century = year => Math.ceil(year/100)
___
function century(year) {
  return (year + 99) / 100 | 0;
}
___
return Math.ceil(year/100);
//Зразок тесту
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(century(1705), 18, 'Testing for year 1705');
Test.assertEquals(century(1900), 19, 'Testing for year 1900');
Test.assertEquals(century(1601), 17, 'Testing for year 1601');
Test.assertEquals(century(2000), 20, 'Testing for year 2000');
Test.assertEquals(century(89), 1, 'Testing for year 89');
  });
});

//Задача 13

/* Створіть програму, яка фільтрує список рядків і повертає список лише з іменем ваших друзів.
Якщо в імені рівно 4 літери, будьте впевнені, це має бути ваш друг! В іншому випадку ви можете бути впевнені, що він не...
Приклад: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
тобто
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] */
function friend (friends ) {
  let arr = [];
  for (let i = 0; i < friends.length; i++ ){
    if(friends[i].length === 4) {
      arr.push(friends[i]);
    }
  }
  return arr;
}
___
function friend(friends){
  return friends.filter(n => n.length === 4)
}
___
const friend = friends => friends.filter(friend => friend.length == 4);
___
function friend(friends){
    return friends.filter(function (name){
        return name.length == 4;
    });
}
//Зразок тесту
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})

//Задача 14
/* Дано масив одиниць і нулів, перетворити еквівалентне двійкове значення в ціле число.
Наприклад: [0, 0, 0, 1]розглядається як 0001який є двійковим представленням 1. */
const binaryArrayToNumber = arr => {
  // your code
  const binaryString = arr.join('');
  return parseInt(binaryString, 2);
};
___
binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
___
binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};
//Зразок тесту
const Test = require('@codewars/test-compat');

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});

//Задача 15
/* Реалізуйте функцію, яка додає два числа та повертає їхню суму в двійковому вигляді. Перетворення можна виконати до або після додавання.
Повернуте двійкове число має бути рядком.
Приклади: (Input1, Input2 --> Output (пояснення)))
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */
function addBinary(a,b) {
  let sum =  a + b;
  return sum.toString(2);
}
___ 
return (a+b).toString(2)
___
const addBinary = (a, b) => (a + b).toString(2);
//Зразок тесту
const Test = require('@codewars/test-compat');

describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});


//Задача 16
//Зразок тесту