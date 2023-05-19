var animal = {moves: true, run:true, bark: false};
var lion = {eats: true};
var fish = {swim:true};
var tiger = {jump: true};

lion.__proto__ = animal;
// tiger.__proto__ = animal;

// console.log(lion.moves);
// console.log(lion.run);
// console.log(lion.bark);
tiger.__proto__ = animal;
console.log(tiger.moves);
//
