let add = (cb) => {
  let x = 10,
    y = 20;
  console.log("Sum :", x + y);
  cb();
};

add();

let sub = (cb) => {
  let x = 10,
    y = 20;
  console.log("Sub :", y - x);
  cb();
};

let display = () => {
  console.log("Finished this operation!!");
};

sub(function () {
  console.log("Finished this operation!!");
});
