//Пошук в масиві

// filter
//Шукає всі елементи, на яких ф-ція-колбек поверне true
Синтаксис:
/* let result = arr.filter(function(item, index, array){
  якщо true - елемент додається до р-тату, і перебір продовжується
  якщо нічього не знайдено, повертається порожній масив
}); */

let arrFilter = [
  {name: 'pypurka', age: 18},
  {name: 'pyp', age: 23},
  {name: 'raksakorikorfalapatoriys', age: 'Дофіга'},
]
let resultFilter = arrFilter.filter(function(item, index, array){
  return item.age >= 18;
});
console.log(resultFilter);