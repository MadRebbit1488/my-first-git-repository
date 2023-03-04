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
