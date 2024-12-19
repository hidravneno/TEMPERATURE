//for (let i = 1; i <= 10; i++) {
//document.write(`2 x ${i} = ${2 * i}<br>`);
//}

function multiTable() {
  let num = prompt("Enter the table number");
  let result = 0;
  document.write(`<h1>Table of ${num}</h1>`);
  document.write("<h1>Table of" + num + "</h1>");

  for (let i = 0; i <= 10; i++) {
    result = num * i;
    document.write(`<p>${num} x ${i} = ${result}</p>`);
  }
}

//arrays
let students = ["Vonde", "Derrick", "Christian", "Nick", "Tom", "Brandon", "Christopher", "Anthony", "Eduardo"];
let ages = [32, 33, 45, 23, 20, 30, 40, 28, 22];

//display on the console
console.table(students);
console.table(ages);

//change info
students[5] = "Brandon Merle";
for (let i = 0; i < students.length; i++) {
  document.getElementById("students").innerHTML += `<li>${i + 1} - ${students[i]} - ${ages[i]}</li>`;
}

ages[8] = 20;
console.table(ages);




