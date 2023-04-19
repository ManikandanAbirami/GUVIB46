const mix = () => {
  console.log("Mix all the ingredients");
};
const bake = (callback) => {
  console.log("Bake in oven/OTG for 30 mins!!");
  setTimeout(() => {
    callback();
    console.log("CAKE IS READY!!!!!");
  }, 6000);
};
const callback = () => {
  alert("Tingggggggg!!!");
};
const coffee = () => {
  console.log("Prepare and drink coffee!!");
};

mix();
bake(callback);
coffee();
