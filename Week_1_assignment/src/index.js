

let button = document.getElementById("my-button");
let heading = document.getElementById("my-heading");
let button1 = document.getElementById("add-data");
let list = document.getElementById("my-list");
let textarea = document.getElementById("my-textarea");

button.addEventListener("click", function() {
console.log("Hello world");
heading.innerText = "My notebook";});

button1.addEventListener("click", function() {
    let listItem = document.createElement("li");
    listItem.textContent = textarea.value;
    list.appendChild(listItem);
  });