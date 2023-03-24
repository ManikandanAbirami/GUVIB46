let arr = [{name: "Mani"},10, 20, 30];
let res = arr.filter(arrFilter);

function arrFilter(item){
    return item <= 10;
}

console.log(res);

var xhr = new XMLHttpRequest();//Create Object
xhr.open('GET', 'https://restcountries.com/v3.1/all');//Access API from the server
xhr.responseType = 'json';//Set the response type

xhr.send();//Make sure response is sent back

xhr.onload = function () { //Execute a function once all the loading and return funcitonality is completed
  var responseObj = xhr.response;
  var res = responseObj.filter(function(item){
    return item.continents == 'Asia';
  });
//   console.log(res);
  var finalResult = res.map(function(item){
    return item['name']['common'];
  });
//   console.log(finalResult);
var copy = [];
responseObj.map(function(item) {
    copy.push(`${item.name.common}, ${item.capital}, ${item.flag}`);
  });
console.log(...copy);
}