function getArray() {
  return ["Hello", "welcome", "to", "Guvi", "Saravana"];
}
// let [greeting, wish] = getArray();
let greeting = getArray()[0];
let wish = getArray()[1];
// console.log(greeting);
// console.log(wish);

let person = { name: "Manikandan", country: "India", job: "Developer" };
person["name"] = "Guvi B46";
console.log(person["name"]);

// let name = person.name;
// let country = person.country;
// let job = person.job;
// let { country, job, name } = person;
// console.log(name);
// console.log(country);
// console.log(job);
