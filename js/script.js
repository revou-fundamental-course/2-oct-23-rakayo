document.getElementById("btn-konversi").onclick = konversi;
document.getElementById("btn-reset").onclick = reset;

function konversi() {
    var fahrenheitInput = document.getElementById('fahrenheit');
    var celsiusInput = document.getElementById('celsius');
    var cara = document.getElementById('cara-kalkulasi');
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        fahrenheit = (celsius * 1.8) + 32;
        cara.textContent = celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
    } else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) / 1.8;
        cara.textContent = fahrenheit + "°F - 32) / 1.8 = " + celsius + "°C";
    } else {
        cara.textContent = "Kalkulasi tidak dapat dilakukan.";
    }

    fahrenheitInput.value = parseFloat(fahrenheit).toFixed(1);
    celsiusInput.value = parseFloat(celsius).toFixed(1);
}

function reset() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('cara-kalkulasi').textContent = ''; // Menghapus teks cara kalkulasi
}