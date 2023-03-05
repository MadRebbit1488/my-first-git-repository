// В нас є прайс
let bmwX3Price = 100000;
let fordFocusPrice = 10000;
let budget = 20000;

// Нам потрібно вивести, що ми можемо купити
let message;
if(budget > bmwX3Price ){
  message = 'BMW';
} else if (budget > fordFocusPrice){
  message = 'Ford'; 
} else {
   message = 'Велосипед';
}

console.log(`Я хочю купити ${message}`);

