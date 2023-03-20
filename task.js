var user = { name: "person", age: 5 };
var user1 = { age: 5, name: "person" };

// console.log(user[0]);


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
  var responseObj = xhr.response;
  console.log(JSON.stringify(responseObj));
}