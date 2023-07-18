let a = ''; //first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
a = ''; // first number and result
b = ''; // second number
sign = ''; //знак
finish = false;
out.textContent = 0;
}