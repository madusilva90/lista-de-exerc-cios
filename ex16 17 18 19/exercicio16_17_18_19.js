function ConvCelsius() {
    let temperatura= (document.getElementById('temp').value)
    let fahrenheit = parseFloat(temperatura)
    let celsius = (fahrenheit - 32) * 5/9
    document.getElementById('resultado').textContent = fahrenheit + "°F " + celsius.toFixed(2) + "°C"
}
function ConvFahrenheit() {
    let temperatura= (document.getElementById('temp').value)
    let celsius = parseFloat(temperatura)
    let fahrenheit = (celsius * 9/5) + 32
    document.getElementById('resultado').textContent = celsius + "°C " + fahrenheit.toFixed(2) + "°F"
}

