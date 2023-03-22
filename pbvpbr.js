var name = "Jack";//primitive
function cbv(x) {
    console.log(x);
    x = "JackandJill";
    console.log(x);
}

// cbv(name);
// console.log(name);

function cbr(a) {
    console.log(a.name);
    a.name = "JackandJill";
    console.log(a.name);
}

var person = { name: "Jack"};//non primitive
cbr(person);
console.log(person.name);