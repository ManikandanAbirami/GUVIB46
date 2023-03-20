var user = { name: "Mani", age: 32 };
var user1 = { age: 32, name: "Mani" };

// var firstName = "Manikandan";
// var lastName = "Anbalagan";

function isEqual(user, user1) {
  // console.log(user);
  // console.log(user1);
  var userKeys = Object.keys(user);
  var user1Keys = Object.keys(user1);
  // console.log(userKeys);
  // console.log(user1Keys.length);
  console.log(user['name']);
  console.log(user['age']);
  console.log(user1['name']);
  console.log(user1['age']);

  if (userKeys.length != user1Keys.length) {
    return false;
  }

  for (var userKey of userKeys) {
    // console.log(userKeys);
    // console.log(userKey);
    if (user[userKey] != user1[userKey]) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(user, user1));