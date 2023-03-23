// let addition = function(...arr) {
//     let sum = 0;

// }

// console.log(addition(2,4,6,8,9));

function add(...arr){
    // return arr[0] + arr[1] + arr[2] + arr[3];
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //     sum += arr[i];
    // }
    // return sum;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
// console.log(add(arr));

console.log(add(1,2,3,4));