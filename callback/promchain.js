let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(10);
    reject("error");
  }, 2000);
});

p.then(
  (val) => {
    console.log(val);
    return val * 2;
  },
  (err) => {
    console.log(err);
  }
)
  .then((val) => {
    console.log(val);
    return val * 3;
  })
  .then((val) => {
    console.log(val);
    return val * 4;
  })
  .then((val) => {
    console.log(val);
  });
