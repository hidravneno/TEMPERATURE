console.log("script");

//string ""
let FisrstName = "Francisco";
let lastName = "Aramburo";

//numbers
let myAge = 90;
let myShoe = 9.5;

//boolean
let isStudent = false;

//display

console.log(FisrstName);
console.log(myAge);

//concatenation
console.log(
  "my name is " +
    FisrstName +
    " and i am " +
    myAge +
    " years old my shoes size is " +
    myShoe
);

let num1 = 10;
let num2 = 20;

let addition = num1 + num2;
let subs = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log("Addition is: " + addition);
console.log("Substraction is: " + subs);
console.log("Multiplication is " + mult);
console.log("Division is: " + div);

//Challenge 1

let a;
let pi = 3.1416;
let r = prompt("Enter the radius");

a = pi * (r * r);
console.log(" The area of a circle with a radius of " + r + " is the " + a);

// define the var
let aVariable;

// assign a value
aVariable = 20;

// define and assign the value at the same time
let otherVariable = 30;

console.log(aVariable, otherVariable);

aVariable = 50;
otherVariable = 100;

//console.log(aVariable, otherVariable);
//const weekDays = 7;

//history
const personaje1 = "Juan";
const personaje2 = "María";
let lugar = "la playa";
let objeto = "una sombrilla";
let acción1 = "jugando al voleibol";
let acción2 = "comiendo helado";

let historia = `${personaje1} y ${personaje2} fueron a ${lugar} para pasar un día divertido. 
Allí, estaban ${acción1} cuando de repente, encontraron ${objeto}. 
Decidieron usarla para protegerse del sol y continuaron ${acción2}.`;

console.log(historia);

let lugar2 = "la montaña";
let objeto2 = "una tienda de campaña";
let acción3 = "haciendo senderismo";
let acción4 = "asando malvaviscos";

let historia2 = `${personaje1} y ${personaje2} decidieron ir a ${lugar2} para una nueva aventura. 
Mientras estaban ${acción3}, encontraron ${objeto2}. 
Decidieron quedarse allí y ${acción4}.`;

console.log(historia2);
