// let addition = function(...arr) {
//     let sum = 0;

// }

// console.log(addition(2,4,6,8,9));

function add(...arr) {
  try {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } catch (err) {
    console.log(err);
  }
}
// console.log(add(arr));

console.log(add(1, 2, 3, 4));
