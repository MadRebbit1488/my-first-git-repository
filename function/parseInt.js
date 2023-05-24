/* Ф-ція parseInt() приймає рядок в якості аргумента і повертає ціле число  відповідно до зазначеної основи системи числення 
Синтаксис:
parseInt(string, radix);
*/
var binary = "1101000";
var digit = parseInt(binary, 2);
alert(digit); //104

____
[0, 0, 0, 1]
binaryArrayToNumber = arr => parseInt(arr.join(''), 2);