//Named function
//Anonymous function
//IIFE - Immediately invoked function expressions

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function square1(a) {
    return a * a;
}

var square = function(num) {
    return num * num;
}

console.log(square(2));
console.log(square1(3));

var message = (function () {
    var name = "Manikandan";
    console.log('I m executed');
    return name;
})();
// console.log(message);