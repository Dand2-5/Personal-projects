// var person = {
//   name: "Daniel Damasus",
//   age: 17,
//   address: {
//     street: "5 main st",
//     city: "Port Harcourt",
//   },
//   children: ["Daniel", "Ogechi", "Amarachi"],
// };

// // person = JSON.stringify(person);
// // person = JSON.parse(person);
// var people = [
//   {
//     name: "Daniel",
//     age: 18,
//   },
//   {
//     name: "Damilola",
//     age: 18,
//   },
//   {
//     name: "Deborah",
//     age: 16,
//   },
// ];
// // console.log(people[0].age);

// var output = '';
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
//   output += '<li>' + people[i].name + '</li>';
// }
// document.getElementById('people').innerHTML = output;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var people = response.people;

    var output = "";
    for (let i = 0; i < people.length; i++) {
      output += "<li>" + people[i].name + "</li>";
    }

    document.getElementById('people').innerHTML = output;
  }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
