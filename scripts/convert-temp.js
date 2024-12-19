function convertTemperatureRange(startValue, endValue, scale) {
    let result = '';
    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = (temp * 9) / 5 + 32;
            result += `${temp}°C = ${fahrenheit.toFixed(2)}°F<br>`;
            updateThermometer(temp);
        } else if (scale === "F") {
            let celsius = ((temp - 32) * 5) / 9;
            result += `${temp}°F = ${celsius.toFixed(2)}°C<br>`;
            updateThermometer(celsius);
        } else {
            result = "Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.";
            break;
        }
    }
    document.getElementById('result').innerHTML = result;
}

function handleConvert() {
    let startValue = parseFloat(prompt("Enter the starting temperature:"));
    let endValue = parseFloat(prompt("Enter the ending temperature:"));
    let scale = prompt("Enter the scale (C for Celsius or F for Fahrenheit):").toUpperCase();
    convertTemperatureRange(startValue, endValue, scale);
}

function updateThermometer(temp) {
    const thermometerFill = document.getElementById('thermometer-fill');
    const thermometerBulb = document.getElementById('thermometer-bulb');
    let height = Math.min(Math.max((temp + 30) * 2, 0), 300); 
    thermometerFill.style.height = `${height}px`;

    if (temp <= 0) {
        thermometerFill.style.backgroundColor = 'blue';
        thermometerBulb.style.backgroundColor = 'blue';
    } else if (temp > 0 && temp <= 30) {
        thermometerFill.style.backgroundColor = 'yellow';
        thermometerBulb.style.backgroundColor = 'yellow';
    } else {
        thermometerFill.style.backgroundColor = 'red';
        thermometerBulb.style.backgroundColor = 'red';
    }
}