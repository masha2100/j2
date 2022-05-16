//1
let high = prompt("Введите высоту цилиндра");
let diametr = prompt("Введите диаметр основания");
let v = high*diametr
alert(v)
//2
let name = prompt('What is your name?');
alert(`Hello, ${name} `);
//3
let storona = prompt("Введите сторону квадрата:")
alert(storona*4)
//4
let number = prompt("enter number:");
let result = 0;
result = number%10
alert(result)
//5
let a1 = Number(prompt("Прибыль за 1 месяц:"))
let a2 = Number(prompt("Прибыль за 2 месяц:"))
let a3 = Number(prompt("Прибыль за 3 месяц:"))
let a4 = Number(prompt("Прибыль за 4 месяц:"))
let a5 = Number(prompt("Прибыль за 5 месяц:"))
let a6 = Number(prompt("Прибыль за 6 месяц:"))
let a7 = Number(prompt("Прибыль за 7 месяц:"))
let a8 = Number(prompt("Прибыль за 8 месяц:"))
let a9 = Number(prompt("Прибыль за 9 месяц:"))
let a10 = Number(prompt("Прибыль за 10 месяц:"))
let a11 = Number(prompt("Прибыль за 11 месяц:"))
let a12 = Number(prompt("Прибыль за 12 месяц:"))
const sum = a1 + a2 +a3 +a4 +a5 + a6 +a7 + a8 + a9 + a10 + a11 + a12
const average = sum /12
alert("средняя прибыль за год" + sum)
//6 
let km = prompt("Введите расстояние:")
let time = prompt("Введите время:")
let speed = km/time
alert(`Speed: ${speed} `);

