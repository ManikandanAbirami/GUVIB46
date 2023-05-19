class Vehicle {
  constructor() {
    this.run = true;
  }
}

class RoyalEnfield extends Vehicle {
  constructor() {
    super();
    this.sound = true;
  }
}

let obj = new RoyalEnfield();
console.log(obj.run);
