var display = document.getElementById("display")
var historyDisplay = document.getElementById("history")

var currentInput = "0"
var isNewCalculate = false

function updateDisplay () {
    display.innerText = currentInput
}

function number (num) {
    if (isNewCalculate) {
        currentInput = "";
        isNewCalculate = false;
    }
    if (num === "." && currentInput.includes(".")) {
        return;
    }
    if (currentInput === "0" && num !== ".") {
        currentInput = num;
    } else {
        currentInput = currentInput + num;
    }
    updateDisplay();
}

function operator (op) {
    isNewCalculate = false;

    var lastChar = currentInput.slice(-1)

    if (["+", "-", "x", "÷", "%"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op
    }else {
        currentInput = currentInput + op
    }

    updateDisplay()
}

function clearAll () {
    currentInput = "0";
    historyDisplay.innerText = "";
    isNewCalculate = false
    updateDisplay()
}

function backSpace() {
    if (isNewCalculate) {
        clearAll();
        return;
    }

    if (currentInput.length === 1 || currentInput === "0") {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    updateDisplay();
}

function plusMinus () {
    if (currentInput === "0") return;

    if (currentInput.startsWith("-")) {
        currentInput = currentInput.substring(1);
    } else {
        currentInput = "-" + currentInput;
    }
    updateDisplay ();
}

function calculate () {
    try {
        historyDisplay.innerText = currentInput

        var expression = currentInput
        expression = expression.replace(/x/g, "*")
        expression = expression.replace(/÷/g, "/")
        expression = expression.replace(/%/g, "/100")
    
        var result = eval (expression)
        if (typeof result === "number" && !Number.isInteger (result)) {
            result =parseFloat(result.toFixed(6));
        }

        currentInput = String (result);
        isNewCalculate = true;
        updateDisplay();

    } catch (error) {
        display.innerText = "Error"
        currentInput = "0";
        isNewCalculate = true;
    }
}
updateDisplay();