let firstNumber = null;
let secondNumber = null;
let operator = null;

function operate(operator, a, b) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  }
}
console.log(document.querySelector(".display").value);
let button = document.querySelectorAll("button");
let buttonArray = [...button];
let displayValue = [];
buttonArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!(item.value == "equate")) {
      if (item.getAttribute("class") == "operator") {
        operator = item.value;
        displayValue = [];
      } else if (firstNumber && operator) {
        displayValue.push(item.value);
        secondNumber = displayValue.join("");
        display(secondNumber);
      } else if (!secondNumber) {
        displayValue.push(item.value);
        firstNumber = displayValue.join("");
        display(firstNumber);
      } 
    } else {
      let maths = operate(operator, Number(firstNumber), Number(secondNumber));
      display(maths);
    }
  });
});

function display(number) {
  const display = document.querySelector(".display");
  display.textContent = number;
  document.body.div.appendChild(display);
}
function clear() {
  const display = document.querySelector(".display");
  display.textContent = "";
  console.log(display + "from clear funntion");
  document.body.div.appendChild(display);
}
//run through of logic

//first number is entered and saved
//operated is assigned and saved
//second number is entered,
//this should update the text on the calculator
// value is also saved
// pressing enter runs the operation and returns a value
