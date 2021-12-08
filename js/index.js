function Sum(x, y) {
    return Number(x) + Number(y);
}
function Diffirence(x, y) {
    return Number(x) - Number(y);
}
function Multiply(x, y) {
    return Number(x) * Number(y);
}
function Divide(x, y) {
    return Number(x) / Number(y);
}
function view(value) {
    let values=document.querySelector(".button").value;
    return values;
    
}
function myCalculator(a, b, operator) {
    switch (operator) {
        case "+":
            document.querySelector("#display").innerHTML = Sum(a, b)
            break;
        case "-":
            document.querySelector("#display").innerHTML = Diffirence(a, b)
            break;
        case "*":
            document.querySelector("#display").innerHTML = Multiply(a, b)
            break;
        case "/":
            document.querySelector("#display").innerHTML = Divide(a, b)
            break;
    }
}
document.querySelector(".result").addEventListener("click", function () {
    myCalculator(num1, num2, operator);
});
document.querySelector(".button").addEventListener("click",function () {
    view(b);
});
