let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

p.then((val) => {
  console.log(val);
  return val * 2;
});
p.then((val) => {
  console.log(val);
  return val * 3;
});
p.then((val) => {
  console.log(val);
  return val * 4;
});
p.then((val) => {
  console.log(val);
});
