let a = 10;
let b = 20;
console.log(`Before swapping a: ${a}.`);
console.log(`Before swapping b: ${b}.`);
// b = a + b;
// a = b - a;
// b = b - a;
[a,b] = [b,a];
console.log(`After swapping a: ${a}.`);
console.log(`After swapping b: ${b}.`);

let arr = [1,2,3];
let[,num2,,num4,,num6] = [1,2,3,4,5,6];
console.log(num2);
console.log(num4);
console.log(num6);

let [greeting,...intro]=["Hello","welcome","to","Guvi","Saravana"];
console.log(greeting);
console.log(intro);
let[val1,val2,val3]=intro;
console.log(val1);
console.log(val2);
console.log(val3);