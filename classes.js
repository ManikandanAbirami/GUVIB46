class Name {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log("Excute without calling!!&&&&&&&&&&&");
    }
    res() {
        name = this.a + " " + this.b;
        console.log(name);
    }
    add(){
        console.log(`Addition: ${this.a + this.b}`);
        var res = function() {
            console.log("value of a: "+this.a);
        }.bind(this);
        res();
    }
    sub(){
        console.log(`Subtraction: ${this.a - this.b}`)
    }
    mul(){
        console.log(`Multiplication: ${this.a * this.b}`)
    }
}
obj = new Name(10,5);
obj.add();
obj.sub();
obj.mul(2,2);

obj = new DeviceMotionEvent("Casino Royale","Eon Productions","PG­13")