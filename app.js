/** @type {HTMLInputElement} */
var display = document.getElementById("display");

// var display = document.getElementById ("display")
var historyDisplay = document.getElementById("history")

var num1 = " "
var num2 = " "
var operator = " "
var isSecondNumber = false

function number (input) {
    var isOperate = ( input == "+" || input == "-" || input == "/" || input == "%" || input == "*")

    if (isOperate && isSecondNumber && num2 == "") {
        operator = input
        display.value = display.value.slice (0 , -1)
    } else if (!isSecondNumber && !isOperate ) {
        num1 += input
        console.log("num1 " + num1);
        
    } else if (!isSecondNumber && isOperate) {
        operator = input
        isSecondNumber = true
        console.log("operator " + operator);
    } else if (isSecondNumber && !isOperate) {
        num2 += input
        console.log("num2 " + num2);
    }
    display.value += input
}

function calculateEqual () {
    var result = ""
    num1 = Number(num1)
    num2 = Number(num2)

    if (operator === "+") {
        result = num1 + num2
    } else if (operator === "-") {
        result = num1 - num2
    } else if (operator === "*") {
        result = num1 * num2
    } else if (operator === "/") {
        result = num1 / num2
    } else if (operator === "%") {
        result = num1 % num2
    }

    display.value = result

    num1 = result
    num2 = ""
    operator = ""
    isSecondNumber = false
}

function clearAll () {
    display.value = ""
    num1 = ""
    num2 = ""
    isSecondNumber = false
}

function backSpace () {
    if (display.value  === "") return ;
    display.value = display.value.slice (0 , -1)

    if (isSecondNumber && num2 !== "") {
        operator = ""
        isSecondNumber = false
    } else {
        if (num1.length > 0){
            num1 = num1.slice (0 , -1)
        }
    }
}