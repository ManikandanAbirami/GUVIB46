let c = 10;
var operation = {
    a: 1,
    b: 2,
    add: function() {
        console.log(this.a + this.b + c);
        console.log(`a = ${this.a}, b = ${this.b}, c = ${c}`);
        var print = function() {
            console.log(`a = ${this.a}, b = ${this.b}, c = ${c}`);
        }.bind(this);
        print();
    }
}

operation.add();

var person = {
    name: "Manikandan",
    get: function() {
        console.log("Outer: "+this.name);
        var print = function() {
            console.log("Inner: "+this.name);
        }.bind(this);
        print();
    }
}

person.get();

//call() & apply()