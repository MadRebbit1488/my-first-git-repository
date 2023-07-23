//! Window - корінний глобальний об'єкт.
/* Віе має дві ролі: 
1. Це  глобальний об'кт для коду JS
2. Він являє собою вікно браузера  та надає способи для керування ним
*/

//!BOM
//Приклад використання об'єкта location
if(confirm("Перейти на сайт Wikipedia?")){
  location.href = "https://wikipedia.org"; // перенаправляє браузер на іншу URL-адресу
}


//!DOM
/* Завдяки DOM можна маніпулювати елементтами і їх вмістом. Всі операції в DOM починаються з об'єкта document, через нього можна отримати доступ до будь якого вузла*/


//*Діти: childNodes, firstChild, lastChild
  //*Дочірні вузли - елементи, які являються безпосередньо дітьми вузла. Елементи котрі лежать безпосередньо всередині нього.
  
  //*Потомки - всі елементи котрі лежать всередині даного, включаючи дітей і їх дітей




  


/*  
!Table  - мають додаткові силки і колекції для доступа до свого вмісту
*table.rows - колекція рядків <tr> таблиці
*table.caption/tHead/tFoot - силки на елементи таблиці <caption>, <thead>, <tfoot>
*table.tBodies - колекція елементв таблиці <tbody>(по специфікації їх може бути більше одного) 

*<thead>, <tfoot>, <tbody> надають властивість rows: 
  *tbody.rows - колекція рядків <tr> секції
      <tr>:
      -tr.cells – коллекція <td> і <th> комірок, які знаходяться всередині рядка <tr>.
      -tr.sectionRowIndex – номер рядка <tr> в поточній секції <thead>/<tbody>/<tfoot>.
      -tr.rowIndex – номер рядка <tr> в таблиці (включаючи всі рядки таблиці).
      <td> and <th>:
      -td.cellIndex – номер комірки в рядку <tr>.

      Приклад:      
<table id="table">
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>4</td>
  </tr>
</table>
<script>
      Виводить вміст першого рядка, другої комірки 
      console.log(table.rows[0].cells[1].innerHTML); // 2
</script>       */



/*
!Класи DOM вузлів
  *EventTarget - корінний 'абстрактний'клас всього. Його об'єкти ніколи не створюються, він слугує основою DOM-вузлів завдяки чьому підтримуються події
  *Nodе - 'абстрактний'клас, основа для DOM вузлів
  *Document - документ в цілому. Йому належить глобальний об'єкт document , слугує точкою входу
  *CharacterData - 'абстрактний' клас. Наслідується: 
      *Text - клас текстових вузлів
      *Comment - клас для коментарів
  *Element - базовий клас для DOM елементів. Забезпечує новігацію на рівні елементів: nextElementSibling, children, а токож методи пошуку елементів: getElementsByTagName, querySelector.
  *HTMLElement - базовий клас для всіх інших HTML-елементів.
  Наслідує:
      *HTMLInputElement - клас для тега <input>
              Атрибути:
              -type
      *HTMLBodyElement - класс для тега <body>
      *HTMLAnchorElement - класс для тега <a>





*constructor.name - властивість яка використовується для того щоб дізнатись ім'я класа DOM-вузла      */
console.log(document.body.constructur.name);

//*instanceof - перевірка наслідування 
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget)



//*console.log(elem) and console.dir(elem)
/* Для JS зазвичай виводять одне і теж, але для DOM вони працюють по різному:
    //*console.log(elem) виводить елементи в вигляді DOM-дерева
    //*console.dir(elem) виводить елементи в вигляді DOM-об'єкта, зручно для аналізу властивостей
*/


/* 
!Специфікація IDL(Interface descripftion language)
Для специфікації опису DOM класів використовують IDL, де всі властивості представлені з указанням їх типів: DOMString, boolean

?Приклад IDL:
Оголошенян HTMLInputElement
Двокрарка ":" після HTMLInputElement азначає що він наслідує від HTMLElement     
interface HTMLInputElement: HTMLElement {
  Властивості і методи елемента <input>
  DOMString означає що значення властивості рядок
  attribute DOMString accept;
  attribute DOMString alt;
  attribute DOMString autocomplete;
  attribute DOMString value;

  boolean азначає що autofocus  зберігає логічний тип даних

  void перед методом означає, що даний метод не повертає значення
  void select;
}    */





































