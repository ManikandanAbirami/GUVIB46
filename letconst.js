const a = 10;
console.log(a);
// a = 20;
// console.log(a);

function placeOrder(status) {
    let message = "Order placed successfully";
    if(status == true) {
        console.log(message);
    }
    console.log(message);
}


placeOrder(true);