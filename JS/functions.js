//function
//function syntax:
//functionName(arg1, arg2.....);

// var a = 10;
// var b = 20;
function sum() {
  var aa = 100;
  var bb = 200;
  var res = aa + bb;
  console.log(res)
  // return aa + bb;
}

// var res = sum(10, 10);
// console.log(sum(10, 10));
// sum();

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function operation(a, b, type) {
  if (type == 'add') {
    return a + b;
  }
  else if (type == 'sub') {
    return a - b;
  }
  else if (type == 'mul') {
    return a * b;
  }
  else {
    return a / b;
  }
}

console.log(operation(10, 5, 'mul'));