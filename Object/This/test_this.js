//Тести

function a() {
    console.log(i);
}
function b() {
    let i = 0;
    a();
}
b(); // помилка
//
//
console.log(a(1));
const a = () => b + 1; //помилка
//
//
function a() {
    function b() {
        console.log(this); //undefined
    }
}
//
//
let a = {
    c: 1,
    function b() {
        console.log(this.c); //помилка
    }
}
//
//
let a = {
    c: 1,
    b: () => {
        console.log(this.c); //undefined
    }
}

//
//
function a() {
    console.log(arguments[0]);
}
a(1);//1
//
//
let a = {
    b: 1
};
function c() {
    console.log(this.b);
}

c.call(a); //1
//
//
function a() {
    let c = 1;
    return function b() {
        return c++;
    }
}
a()();
console.log(a()()); //1
//
//
() => console.log('Yes')(); //виводу не буде
//
//
(function() { console.log(this) }).apply(0); //Number {0}
//
//
function a() {
    let c = 1;
    return function b() {
        return c++;
    }
}
const d = a();
d();
console.log(d()); //2