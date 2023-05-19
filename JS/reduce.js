let a = [10,20,30,60,70,40,39];
let sum = 0;
for(let i = 0; i < a.length; i++){
    sum += a[i];
}
let avg = sum/a.length;
console.log(`without reduce ${avg}`);

var res = a.reduce(function(a,b){
    return a + b;
});
let reduceAvg = res/a.length;
console.log(`with reduce ${reduceAvg}`);
