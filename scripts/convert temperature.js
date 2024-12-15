// Function that performs the conversion
function convertTemperature(temp, scale) {
    if (scale === "C") {
        return (temp * 9 / 5) + 32; // From Celsius to Fahrenheit
    } else if (scale === "F") {
        return (temp - 32) * 5 / 9; // From Fahrenheit to Celsius
    } else {
        return null; // Invalid scale
    }
}

// Function to set the color based on the temperature
function getColorByTemperature(temp, scale) {
    if (scale === "C") {
        if (temp <= 0) return "blue"; // Very cold
        if (temp > 0 && temp <= 25) return "green"; // Moderate
        return "red"; // Hot
    } else if (scale === "F") {
        if (temp <= 32) return "blue"; // Very cold
        if (temp > 32 && temp <= 77) return "green"; // Moderate
        return "red"; // Hot
    }
    return "black"; // Default
}

// Function to handle the conversion
function handleConversion() {
    // Ask the user for the temperature
    const tempInput = prompt("Enter the temperature you want to convert (numbers only):");

    // Validate input
    if (!tempInput || isNaN(tempInput)) {
        alert("Please enter a valid number.");
        return;
    }

    const temp = parseFloat(tempInput);

    // Ask the user for the scale
    const scaleInput = prompt("Enter the scale you want to convert to:\n- Type 'C' to convert from Celsius to Fahrenheit\n- Type 'F' to convert from Fahrenheit to Celsius").toUpperCase();

    // Validate scale
    if (scaleInput !== "C" && scaleInput !== "F") {
        alert("Invalid scale. Please enter 'C' or 'F'.");
        return;
    }

    // Perform conversion
    const converted = convertTemperature(temp, scaleInput);

    if (converted !== null) {
        const resultElement = document.getElementById("result");
        const resultMessage = scaleInput === "C" 
            ? `${temp}°C is equivalent to ${converted.toFixed(2)}°F.` 
            : `${temp}°F is equivalent to ${converted.toFixed(2)}°C.`;

        // Set the color based on the original temperature
        const color = getColorByTemperature(temp, scaleInput);
        resultElement.style.color = color;

        // Display the result
        resultElement.textContent = resultMessage;
        alert(resultMessage);
    } else {
        alert("Error performing the conversion.");
    }
}
