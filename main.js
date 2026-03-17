console.log("Hello, JavaScript!")

let age = 20;
let name = "Denis";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);

let userName = "Алексей";
//шаблонная строка
console.log(`Привет, ${userName}!`);

//дробное число 
let price = 99.99;
//отрицательное число
let temperature = -15;
//Infinity
let infinity = 1 / 0;
//Nan (Not a Number)
let notNumber = 0 / 0;
// 0.30000000000000000004 (особенность JS)
console.log(0.1 + 0.2);
let bigNumber = 9007199254740991n;
let huge = BigInt("123456789012345678901234567890");

let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;

let x;
let y = undefined;

let userData = null;

let id = Symbol("id");

let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!");
    },
};

console.log(person.name);

let fruits = ["яблоко", "банан", "апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["текст", 42, true, null];

function sum(a,b) {
    return a + b;
}

let multiply = function (x,y) {
    return x * y;
}

console.log(sum(5, 3));


let now = new Date();
let birthday = new Date("1995-12-17");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

const numbersArray = [1, 2, 3];
//Можно изменять элементы:
numbersArray[0] = 10;
console.log(numbersArray);

const persons = { name: "Denis" , age: 18 };
person.age = 50;
person.city = "Volgograd";
console.log(person);
person = { name: "Stas" };