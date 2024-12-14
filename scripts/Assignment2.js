// Prompt the user for temperature in Celsius
document.getElementById("convertButton").addEventListener("click", function () {
    let temperature = null;

    // Bucle para validar la entrada del usuario
    while (temperature === null || temperature.trim() === "" || isNaN(temperature)) {
        temperature = prompt("Enter the temperature in Celsius (required):");
        if (temperature === null) {
            alert("You must enter a value to proceed!");
            return; // Salir del bucle si el usuario cancela
        }
    }

    // Convertir Celsius a Fahrenheit
    const fahrenheit = (parseFloat(temperature) * 9 / 5) + 32;

    // Mostrar el resultado en el HTML y la consola
    document.getElementById("result").textContent =
        `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
});
