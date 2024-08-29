// script.js
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value); // Use eval with caution, better alternatives exist
    } catch (error) {
        display.value = 'Error';
    }
}