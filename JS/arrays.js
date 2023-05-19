var cart = ["Men", "Women", "Kids"];
var item = ["s", "h", "i", "r", "t"];
var items = ["sharmila banu"];
var item = items[0].split(" ");
console.log(item);
// console.log(items[0].split(""));
// console.log(cart.length);
// var nums = [1, 2, 3, 4];

for (var i = 0; i < item.length; i++) {
  console.log(item[i]);
  if (item[i] == "i") {
    console.log(`We found i @ position ${i}`);
  }
}
