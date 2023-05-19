// var user = { name: "person", age: 5 };
// var user1 = { age: 5, name: "person" };

// console.log(user[0]);

var arr = [
  { name: "Manikandan", age: 32 },
  { name: "John", age: 22 },
];
// console.log("Sample: " + arr[0].name + " " + arr[0].age);

var xhr = new XMLHttpRequest(); //Create Object
xhr.open("GET", "https://restcountries.com/v3.1/all"); //Access API from the server
xhr.responseType = "json"; //Set the response type

xhr.send(); //Make sure response is sent back

xhr.onload = function () {
  //Execute a function once all the loading and return funcitonality is completed
  var responseObj = xhr.response;
  // console.log(responseObj);
  let usdDollar = responseObj.filter((item) => {
    return item.currencies && item.currencies.USD;
  });
  console.log(
    usdDollar.map((item) => {
      return item.name.common;
    })
  );
  // for(var i = 0; i < usdDollar.length; i++) {
  //   console.log(usdDollar[i].name.common)
  // }
};

var names = ["Mani", "John", "Jill"];
var result = " ";

for (var i = 0; i < names.length; i++) {
  result += names[i] + " ";
}

// console.log(result);

// var arr = ["23 1"];
// var splitArr = arr[0].split(" ");
// var a = splitArr[0];
// var b = splitArr[1];
// if(a>b){

// }
// else if () {

// }
