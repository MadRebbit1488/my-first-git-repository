// Задача:
// Вася поклав 12000$ на вклад 7% річних з капіталом 1 раз  в місяць.
// Потрібно вивести в консоль, чи зможе він купити будинок за 13500$ через 2 роки після зняття внесення. І залишок від покупки 

// Рішення:
let deposite = 12000;
let rate = 0.07;
let depositeLength = 24;
let hourseCost = 13500;

let res = deposite * (1+rate/12)**24;
if(res > hourseCost){
  console.log(`Можемо купити.Залишок ${res-hourseCost}`);
}else{
  console.log('Купити не можемо');
}
