let firstNumber = 0;
let secondNumber = 0;
let operator = 0; 

function operate(operator, a, b) {
    if (operator === '+') {
        return a+b;
    } else if (operator === '-') {
        return a-b;
    } else if (operator === '*') {
        return a*b;
    } else if (operator === '/') {
        return a/b;
    }

}

let button = document.querySelectorAll("button");
let buttonArray = [...button];
let displayValue = []
buttonArray.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (item.getAttribute("class") == "operator") {
            operator = item.value;
        } else {
        displayValue.push(item.value);
        firstNumber = displayValue.join("");
        display(firstNumber);
        }
    });
});



function display(number) {
    const display = document.querySelector(".display");
    display.textContent = number; 
    document.body.div.appendChild(display);
}

//run through of logic

//first number is entered and saved
//operated is assigned and saved
//second number is entered, 
    //this should update the text on the calculator
    // value is also saved
// pressing enter runs the operation and returns a value