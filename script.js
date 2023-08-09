let a = "";
let b = "";
let operator = "";

const numberButton = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const operatorButton = document.querySelectorAll(".operator");
const bottomScreen = document.querySelector(".current");
const topScreen = document.querySelector(".previous");
const equalsButton = document.querySelector(".equals");


clearButton.addEventListener("click", () => {
    bottomScreen.innerHTML = '';
    topScreen.innerHTML = '';
    a = '';
    b = '';
})

numberButton.forEach((number) => {
    number.addEventListener("click", () => {
        num = number.innerText;
        bottomScreen.innerHTML += num;
        a = bottomScreen.innerHTML;
       
    })
})

operatorButton.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.innerText;
        topScreen.innerHTML = bottomScreen.innerText;
        bottomScreen.innerHTML = b;

    })
})

equalsButton.addEventListener("click", () => {

    b = Number(topScreen.innerHTML);
    a = Number(bottomScreen.innerHTML);
    
    const problem = b + ' ' + operator + ' ' + a;
    topScreen.innerHTML = problem;

    const result = operate(a, b, operator);
    bottomScreen.innerHTML = result;

    a = result;
    b = '';

})

const operate = (a, b, operator) => {
   if (operator === "+"){
    return add(a, b);
   } else if(operator === "-"){
    return subtract(b, a);
   } else if (operator === "*"){
    return multiply(a, b);
   } else if (operator === "/"){
    return (divide(b, a));
   }
   
}

const add = (a, b) => {
    return b + a;
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

