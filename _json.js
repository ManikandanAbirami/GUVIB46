var text = [{
  "id": "1",
  "message": "Hi",
  "age": 32
},
{
  "id": "2",
  "message": "Hello",
  "Name": "Anbu"
},
{
  "id": "3",
  "message": "Hello",
  "Designation": "PM"
}];
// var id = [1, 2, 3, 4];
// var message = ["Hello", "hi", "welcome", "bye"];
// var arr = ["Mani", "Anbu"];
// console.log(text[0]);

// console.log(text[1]);

for (var i = 0; i < text.length; i++) {
  var obj = text[i];
  console.log(text[i].id);
  console.log(text[i].message);
  console.log(text[i].age);
}