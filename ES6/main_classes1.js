class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getID() {
    return this.id;
  }
}

let emp = new Employee("GUVI", "B46");
console.log(emp.name, emp.id);
