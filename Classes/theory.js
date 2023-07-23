/* 
*За допомогою класів можна працювати з прототипним наслідування але використовуючи простіший синтаксис
 */  

//Ф-ція конструктор пишеться з заголовної букви
function Car(brand, color){
  this.brand = brand;
  this.color = color;
}

const tesla = new Car('Tesla', 'silver')