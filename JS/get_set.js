class Person{
    constructor(name) {
        this.setName(name);
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let person = new Person("Guvi");
console.log(person.name);

person.setName("Manikandan");
console.log(person.getName());