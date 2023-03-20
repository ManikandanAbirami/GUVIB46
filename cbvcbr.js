//Copy by value
var x = 10; //box
var y = 'abc'; //box
var z = null; //box
var a = x;
var b = y;
x = 5;
y = 'ghi'
console.log(x, y, a, b);

//Copy by Reference
var user = { name: "Manikandan", lastName: "Anbalgan", age: 32 };
var admin = user;
admin.name = "Mani";
admin.age = 31;
user.age = 30;
console.log("#@%%$^#$%^#^ " + user.name);
console.log("LastName: " + user.lastName);
console.log("Admin FirstName: " + admin.name);
console.log("Admin LastName: " + admin.lastName);
console.log("Age: " + admin.age);
