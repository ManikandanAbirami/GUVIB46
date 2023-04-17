//Callback - pass a function as an argument to another function

// const add = (a, b, disp) => {
//   disp(a + b);
//   return a + b;
// };

// const display = (val) => {
//   console.log("This final value is from callback function: ", val);
// };

// console.log("The final value is: " + add(10, 20, display));

// const operation = (a, b, display) => {
//   let c = b - a;
//   display(c);
//   return c;
// };

// console.log(
//   "Call operation funciton to get the result: " + operation(11, 13, display)
// );

// const displayCompletion = () => {
//   console.log("Finished this operation!!");
// };

// let add = (callback) => {
//   let x = 2,
//     y = 3;
//   console.log("Sum: ", x + y);
//   callback();
// };

// let sub = (callback) => {
//   let x = 3,
//     y = 1;
//   console.log("Sub: ", x - y);
//   callback();
// };

// add(displayCompletion);
// sub(displayCompletion);

let name;

const wish = () => {
  console.log(`Hello ${name}`);
};
const wish1 = () => {
  console.log(`Hello ${name}`);
};
const wish2 = () => {
  console.log(`Hello ${name}`);
};
const wish3 = () => {
  console.log(`Hello ${name}`);
};

const getName = () => {
  setTimeout(() => {
    name = "Guvi B46 WD Tamil Batch";
    console.log("name");
  }, 5000);
};

getName();
wish();
wish1();
wish2();
wish3();
