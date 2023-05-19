

var cart = ["shirt", "shoe", "belt"];//0,1,2
console.log(cart);
// cart.shift();
// cart[3] = "coolers";
// console.log(cart);
// cart.push("socks", 24, true);
// console.log(cart);
// cart.unshift("bracelet");
// console.log(cart);
// cart.pop();
// console.log(cart);
// cart.shift();
// console.log(cart);
// cart.pop();
// console.log(cart);

cart.splice(1, 0, "trousers");//index,0(deleting item),item
console.log(cart);
//slice()