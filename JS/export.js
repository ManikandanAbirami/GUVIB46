let num_set = [1, 2, 3, 4, 5];

export default function hello() {
  console.log("Hello World!");
}

class Greeting {
  constructor(name) {
    this.greeting = "Hello, " + name;
  }
}

export { num_set, Greeting as Greet };
