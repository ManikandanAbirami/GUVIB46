function getArray(){
    return ["Hello","welcome","to","Guvi","Saravana"];
}
let [greeting,wish] = getArray();
// console.log(greeting);
// console.log(wish);

let person = {name: "Manikandan", country: "India", 
                job: "Developer"};

// let name = person.name;
// let country = person.country;
// let job = person.job;
let{country,job,name} = person;
console.log(name);
console.log(country);
console.log(job);