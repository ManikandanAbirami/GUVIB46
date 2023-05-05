//ES5

var vehicle = {
  run: true,
};

var royalEnfield = {
  sound: true,
};

royalEnfield.__proto__ = vehicle;

console.log(royalEnfield.run);
