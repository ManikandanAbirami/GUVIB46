let person = {
  firstName: "Manikandan",
  lastName: "Anbalagan",
  get: () => {
    console.log("Outer: " + this.firstName + " " + this.lastName);
    let print = () => {
      console.log("Inner: " + this.firstName + " " + this.lastName);
    };
    print();
  },
};

person.get();
