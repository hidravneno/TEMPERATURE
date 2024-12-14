/*console.log("function.js");

//creating the function
function greet(name) {
  return "Hello World from a Function! and Hello " + name;
}

console.log(greet("Luis"));

// Anonymous Functions
let greetTwo = function (name) {
  return "Hello World from an Anonymous Function! and Hello " + name;
};

console.log(greetTwo("Luis"));

// create a function, with multiple parameters
function greetThree(name, place) {
  return "Hello " + name + " from " + place;
}

// Multiply by 3
function multiplyThree(num) {
  return num * 3;
}

console.log(multiplyThree(4));
console.log(multiplyThree(3));
console.log(multiplyThree(5));

// Challenge
function combineNames(firstName, secondName) {
  return firstName + " " + secondName;
}
// "Luis Alan"
console.log(combineNames("Luis", "Alan"));

function sum(sum1, sum2) {
  return sum1 + sum2;
}

let result = sum(5, 10);
console.log("The result of the sum is: " + result); //5

//Prompts
let productName = prompt("Enter the product name: ");
let productPrice = Number(prompt("Enter the price: "));
console.log(productName);
console.log(productPrice);
console.log(sum(2, productPrice));

function addCart(price) {
  let total = 0;
  total = total + price;
  return total;
}

total = addCart(productPrice);
console.log("The total is: " + calculateTaxes(total));
document.write(
  "" + productName + " - " + calculateTaxes(total).toFixed(2) + " "
);

function calculateTaxes(total) {
  return 1.11 * total;
}
// Mini Challenge
// create a subtraction function
// the parameters should be placed using prompts
// the output should be "The result of subtraction NUMI and NUM2 is: RESULT"
// NUMI, NUM2 and RESULT are variables
// display the result in the console and in the html

// Prompts
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

function subtraction(a, b) {
  let result = a - b;
  return result;
}

let finalResult = subtraction(num1, num2);

console.log(
  "The result of subtraction " + num1 + " and " + num2 + " is: " + finalResult
);
document.write(
  "<p>The result of subtraction " + num1 + " and " + num2 + " is: <p>" + finalResult
);*/

// Linking a function to a button:)
function addProduct() {
  let prodName = prompt("Enter the product name: ");
  document.getElementById("list").innerHTML +='<p>${prodName}</p>';
}
