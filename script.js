let a = "";
let b = "";
let operator = "";
const numberButton = document.querySelectorAll(".number");
const clearButton = document.querySelectorAll(".clear");
const operatorButton = document.querySelectorAll(".operator");
const currentScreen = document.querySelector(".current");
const previousScreen = document.querySelector(".previous");
const equalsButton = document.querySelector(".equals");


numberButton.forEach((number) => {
    number.addEventListener("click", () => {
        a = number.innerText;
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

equalsButton.addEventListener("click", () => {
    b = previousScreen.innerHTML;
    a = currentScreen.innerHTML;
    operate(a, b, operator)
    console.log(operate(a, b, operator))

    const result = operate(a, b, operator)
    currentScreen.innerHTML = result;
    let problem = b + ' ' + operator + ' ' + a;
    console.log(problem)
    previousScreen.innerHTML = problem;
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

