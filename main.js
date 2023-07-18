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

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
     // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаем нажатую кнопку
    const key = event.target.textContent;

    //если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if(b === '' && sign === '') {
        a += key;
        console.log(a, b, sign);
        out.textContent = a;
        }
        else if (a!== '' && b!=='' && finish) {

        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
    // если нажата клавиша + - / *
    if(action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
}

// Нажата = 
if(key === '=') {
    switch (sign) {
        case '+':
            a = (+a) + (+b);
            break;
        case "-":
            a = a - b;
            break;
        case "X":
            a = a * b;
            break;
        case "/":
            a = a / b;
            break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
}


}

