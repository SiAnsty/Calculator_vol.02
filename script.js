let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '+/-', '%'];

const out = document.querySelector('.calc__screen p');

document.querySelector('.btn__ac').addEventListener('click', () => {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
});

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('btn__ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '' ) {
            a += key;
            out.textContent = parseFloat(a);
        console.log(a, b, sign);

        } 
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = parseFloat(b);
        console.log(a, b, sign);
        }
        else {
            b += key;
            out.textContent = parseFloat(b);
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'ERROR!';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "+/-":
                a = a * (-1);
                break;
            // case "%":
            //     // a = a / 100;
            //     if (sign === '+') {
            //         a = a + ((a * b ) / 100);
                    
            //         return;
            //     }
            //     // b = ((a * b ) / 100);
                
            //     break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
    
});





