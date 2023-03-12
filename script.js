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
    if (b == 0) {
        return "It's Over 9000!"
    }else {return a / b;}
    
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
    } else if (item.value == "equate") {
        if (firstNumber && secondNumber && operator){
      let solution = operate(operator, Number(firstNumber), Number(secondNumber));
      display(solution);
        } else {
            display("ERROR");
        }
    } else if (item.value == "clear") {
        displayValue = [];
        firstNumber = null;
        secondNumber = null;
        operator = null;
        display("");
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