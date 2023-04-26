let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.querySelector("#msg");
let notes = document.getElementById("notes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked!!!");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    console.log("failure");
    msg.innerHTML = "Notes cannot be blank!!!";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["a"] = input.value;
  console.log(data);
  createNote();
};

let createNote = () => {
  notes.innerHTML += `<div>
  <p>${data.a}</p>
  <span class="options">
    <i onClick="editNote(this)" class="fa-solid fa-edit"></i>
    <i onClick="deleteNote(this)" class="fa-solid fa-trash-can"></i>
  </span>
</div>
  `;
  input.value = "";
};

let deleteNote = (e) => {
  e.parentElement.parentElement.remove();
};

let editNote = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

function arrRotation() {
  let a = [1, 2, 3, 4];
  let b = [2, 3, 4, 1];
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    a.push(a.shift());
    count++;
    if (JSON.stringify(a) === JSON.stringify(b)) return;
  }

  console.log("*****" + count);
}

arrRotation();
