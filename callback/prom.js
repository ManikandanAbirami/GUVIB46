//promise object with producing code
let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting value from API!!!!!!"); //imagine
  setTimeout(() => {
    // resolve("Resolved!!!!!!!!");
    reject(new Error("Error occured!!!"));
  }, 1000);
});

console.log(promiseObj);

// promiseObj.then(
//   (val) => {
//     console.log(`Value received from promise ${val}`);
//   },
//   (err) => {
//     console.log(`Error occured from promise ${err}`);
//   }
// );

promiseObj.catch((err) => {
  console.log(`Error occured from promise through catch mehod!!!! ${err}`);
});
