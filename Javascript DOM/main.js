var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
// Form delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById("item").value;
  // Make sure the new item is not empty
  if (newItem != "") {
    // Create a new li element
    var li = document.createElement("li");
    //  Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create the delete button element
    var deletebtn = document.createElement("button");
    // Add in all the classes
    deletebtn.className = "btn btn-danger float-right";
    // Append test node
    deletebtn.appendChild(document.createTextNode("X"));

    // Add the button and the li to the list
    itemList.appendChild(li);
    li.appendChild(deletebtn);
  }
}
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function filterItems(e) {
  // Get filter text and convert to lower case
  var text = e.target.value.toLowerCase();
  // get all the li's
  var items = itemList.getElementsByTagName("li");
  // Conver the html collection to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
