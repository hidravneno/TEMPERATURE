console.log("if-statement");

// ---if statement---
// if (condition) {
//   code to be executed if the condition is true
// }

if (3 <= 5) {
  console.log("I am inside the if statement");
}

let student1 = 45;
let student2 = 45;

if (student1 === student2) {
  console.log("Both are the same");
}

// ---- if-else statement ----
//if (condition) {
// code to be executed if the condition is true
//} else {
// code to be executed if the condition is false
//}

let isTrue = true;

if (isTrue) {
  console.log("Yes");
} else {
  console.log("No");
}

//challege#1
// Challenge:
// 1. Check if the age is greater than 21
// 2. If True (T): Display "You are an adult"
// 3. If False (F): Display "You are underage"

let age = 50;

if (age > 21) {
  console.log("You are an adult");
} else {
  console.log("You are underage");
}

// if-else if-else statement
//if (age < 13) {
// code to be executed if age is less than 13
//} else if (age >= 13) {
// code to be executed if age is greater than or equal to 13
//} else {
// code to be executed if conditions are false
//}

age = 5;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 64) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//challenge 2

// Challenge #2
function ticketCalculator() {
  // Solicitar la edad al usuario
  let age = prompt("Enter your age:");
  age = Number(age);

  // Declarar la variable para el precio del boleto
  let ticketPrice;

  // Determinar el precio según la edad
  if (age < 12) {
    ticketPrice = 5;
  } else if (age >= 12 && age < 18) {
    ticketPrice = 8;
  } else {
    ticketPrice = 10;
  }

  // Mostrar el precio del boleto en consola y alerta
  console.log("Your ticket price is $" + ticketPrice + ".");
  alert("Your ticket price is $" + ticketPrice + ".");
}

//challege #3
function weatherOutfit() {
  // Solicitar la temperatura al usuario
  let temperature = prompt("Enter the temperature in °C:");
  temperature = Number(temperature);

  // Obtener el elemento HTML donde se mostrará la sugerencia
  let weatherElement = document.getElementById("weather");

  // Remover las clases "cold" y "hot" del elemento
  weatherElement.classList.remove("cold", "hot");

  // Declarar la variable para la sugerencia
  let suggestion;
  if (temperature < 15) {
    suggestion = "You should wear a jacket.";
    weatherElement.classList.add("cold");
  } else if (temperature >= 15 && temperature <= 25) {
    suggestion = "You should wear a sweater.";
  } else {
    suggestion = "You should wear a t-shirt.";
    weatherElement.classList.add("hot");
  }

  // Mostrar la sugerencia en el elemento HTML
  weatherElement.innerHTML = "You should wear: " + suggestion;
}
