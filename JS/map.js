let a = [1,2,3,4,5];

// let result = a.map(function(item){
//     return item * 5;
// })
console.log(a);

a.map(function(item){
    return item + 1;
});

a = a.map((item) => {
    return item * 5;
})
console.log(a);