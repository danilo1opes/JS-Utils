let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById("display");

function updateDisplay() {
    display.value = currentInput;
} 

function handleInput(value) {
    if(!isNaN(value) || value === '.') {
        currentInput += value;
    } else if (value === 'C') {
        currentInput = '';
        operator = '';
        previousInput = '';
    } else if(value === '=') {
        if(operator && previousInput !== '') {
            currentInput = eval(`${currentInput} ${operator} ${previousInput}`);
            operator = '';
            previousInput = '';
        }
    } else {
        if(currentInput !== ''){
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    }

    updateDisplay();
}
