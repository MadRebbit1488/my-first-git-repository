//Задача №1
//Ф-ція makeUser  повертає об'єкт. Яким буде р-тат при звернені до властивочті ref ?

function makeUser () {
  return {
    name: 'John',
    ref: this,
  };
}

  let user5 = makeUser();
  console.log(user5.ref.name); // <empty string>