let a = 0;
let operator = "";
let b = 0;

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

const operate = (a, b) => {
    if ( operator === "+"){
        return add;
    } else if (operator == "-"){
        return subtract;
    } else if (operator == "*"){
        return multiply;
    } else if (operator == "/"){
        return divide;
    }
}