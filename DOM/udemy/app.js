"use strict";


function submitForm(){
  const input = document.querySelector('.input').value;
  if(!input) return;
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}
function inputChange(){
  if(event.code == 'Enter'){
    submitForm();
  }
}

//Робимо із об'єкта рядок і кладемо його в local storage






