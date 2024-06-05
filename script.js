const resultInput = document.getElementById('result');
let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    resultInput.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    resultInput.value = currentExpression;
}

function calculate() {
    try {
        const result = eval(currentExpression);
        resultInput.value = result;
        currentExpression = '';
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function clearResult() {
    currentExpression = '';
    resultInput.value = '';
}

function appendDot() {
    currentExpression += '.';
    resultInput.value = currentExpression;
}