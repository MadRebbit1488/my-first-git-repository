"use strict";

//Обробка введення
function submitForm() {
  const input = document.querySelector('.input').value;
  if(!input){
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}


function inputChanges(e) {
  if(e.code == 'Enter'){
    //console.log('Enter');
    submitForm();
  }
}

//*keydown - так називається подія натискання клавіатури
//* e - event - подія
/* document.querySelector('.input').addEventListener('keydown', (e) => {
  //console.log(e); //KeyboardEvent - об'єкт який виводить інфо про натискання . 
  //Обробка клавіш по коду. За допомогою Enter потрібно зробити сабміт форми
  if(e.code == 'Enter'){
    //console.log('Enter');
    submitForm();
  }
  //Тепер по Enter робити submit форми
  
}); */


