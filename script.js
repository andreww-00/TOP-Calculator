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
        displayValue.push(item.value);
        let number = displayValue.join("");
        display(number);
    });
});


function display(number) {
    const display = document.querySelector(".display");
    display.textContent = number; 
    document.body.div.appendChild(display);
}
