let namePromise = new Promise((res, rej) => {
  console.log("Getting name from DB....");
  setTimeout(() => {
    // res("GUVIB46");
    rej("Promise rejected!!!!");
  }, 2000);
});

// namePromise.then((val) => {
//   console.log(val);
// });

const getName = async () => {
  // namePromise.then(
  //   (val) => {
  //     console.log(`Name received from DB = ${val}`);
  //   },
  //   (err) => {
  //     console.log("From catch section: " + err);
  //   }
  // );
  try {
    let name = await namePromise;
    console.log(`Name received from DB = ${name}`);
  } catch (err) {
    console.log("From catch section: " + err);
  }
};

getName();
