let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1 st promise has resoved!!!");
    resolve(10);
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2 nd promise has resoved!!!");
    resolve(20);
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("3 rd promise has resoved!!!");
    resolve(30);
  }, 3000);
});

p1.then((val) => {
  console.log(val);
  return val;
}).then;

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((a, b) => a + b);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});
