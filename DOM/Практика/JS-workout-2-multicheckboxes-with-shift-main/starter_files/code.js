const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');
//При клікі на checkbox, потрібно зафіксувати подію клік і коли подія фіксується запустити call-back ф-цію з логікою

let lastChecked;

function handleClick(e){
//Відмічаємо всі checkbox між першим і останнім
//Базове значення false, але воно буде змінюватись на true як тільки зустрінеться перший відмічений checkbox і знову зміниться на  false як тільки зустрінеться останній відмічений
  let inBetween = false;

 //Потрібно перевірити що не тільки натискається checkbox, а і одночано утримується кнопка shift. 
  if(e.shiftKey && this.checked) {
    //В середині forEach потрібно перевірити кожен наступний checkbox являється він першим чи другим відміченим
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      //Тобто рывняэться першому обо останьому checkbox
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('Відмічено')
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  //рівняється останьому клікнутому checkbox
  lastChecked = this;
}

//Вішаємо обробку подій. Проходимось по кожному елементу і вішаємо на кожен checkbox обробку подій. Слухаємо подію click і коли ця подія спрацьовує, запускаємо ф-цію
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));




































