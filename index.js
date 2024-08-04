const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
const imgContainer = document.getElementById('img');

function convert() {
    let img = document.createElement('img');
    imgContainer.innerHTML = ''; // Clear previous images
    let temp = Number(textBox.value);

    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + '°F';
        img.src = './img/temp.png';
    } else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9; // Corrected formula
        result.textContent = temp.toFixed(1) + '°C';
        img.src = './img/degree.png';
    } else {
        result.textContent = 'Select A Unit';
        img.src = './img/select.png';
    }

    imgContainer.appendChild(img);
}
