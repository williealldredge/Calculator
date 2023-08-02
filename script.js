let a = "";
let b = "";
let operator = "";
const numberButton = document.querySelectorAll(".number");
const clearButton = document.getElementsByClassName("clear");
const operatorButton = document.querySelectorAll(".operator");
const currentScreen = document.querySelector(".current");
const previousScreen = document.querySelector(".previous");
const equals = document.querySelector(".equals");


numberButton.forEach((number) => {
    number.addEventListener("click", () => {
        num = number.innerText;
        a = num;
        currentScreen.innerHTML += a;
    })
})

operatorButton.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.innerText;
        previousScreen.innerHTML = currentScreen.innerText;
        currentScreen.innerHTML = b;

    })
    
})





const operate = (a, b, operator) => {
   if (operator == "+"){
    return add(a, b);
   } else if(operator == "-"){
    return subtract(a, b);
   } else if (operator == "*"){
    return multiply(a, b);
   } else if (operator == "/"){
    return (divide(a, b));
   }
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

