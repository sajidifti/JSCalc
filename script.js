let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = '';
}

function replaceCharacter(originalChar, newChar) {
    result = result.replace(new RegExp(originalChar, 'g'), newChar);
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        replaceCharacter('÷', '/');
        replaceCharacter('×', '*');
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
