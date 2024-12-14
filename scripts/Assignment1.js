console.log("------------STORY-------------");

// Definir las variables para la primera historia
const personaje1 = "Juan";
const personaje2 = "María";
let lugar = "la playa";
let objeto = "una sombrilla";
let acción1 = "jugando al voleibol";
let acción2 = "comiendo helado";

// Crear la primera historia usando template literals
let historia = `${personaje1} y ${personaje2} fueron a ${lugar} para pasar un día divertido. 
Allí, estaban ${acción1} cuando de repente, encontraron ${objeto}. 
Decidieron usarla para protegerse del sol y continuaron ${acción2}.`;

console.log(historia);

console.log("------------OTHER-STORY-------------");

// Definir las variables para la segunda historia
let lugar2 = "la montaña";
let objeto2 = "una tienda de campaña";
let acción3 = "haciendo senderismo";
let acción4 = "asando malvaviscos";

// Crear la segunda historia usando template literals
let historia2 = `${personaje1} y ${personaje2} decidieron ir a ${lugar2} para una nueva aventura. 
Mientras estaban ${acción3}, encontraron ${objeto2}. 
Decidieron quedarse allí y ${acción4}.`;

console.log(historia2);

console.log("------------STORY-------------");

// Función para crear historias
function createStory(personaje1, personaje2, lugar, objeto, acción1, acción2, title) {
  console.log(`------------${title}-------------`);
  console.log(`One day, ${personaje1} and ${personaje2} went to ${lugar}.`);
  console.log(`They were ${acción1} when they found ${objeto}.`);
  console.log(`They decided to use it and continued ${acción2}.`);
}

// Llamada para la primera historia con la función
createStory(
  "Juan",
  "María",
  "la playa",
  "una sombrilla",
  "jugando al voleibol",
  "comiendo helado",
  "STORY"
);

console.log("------------OTHER-STORY-------------");

// Llamada para la segunda historia con la función
createStory(
  "Juan",
  "María",
  "la montaña",
  "una tienda de campaña",
  "haciendo senderismo",
  "asando malvaviscos",
  "OTHER-STORY"
);
