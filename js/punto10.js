function obtenerLongitudes() {
     var cadenaInput = document.getElementById("cadenaInput").value;
     var palabras = cadenaInput.split(",").map(palabra => palabra.trim());
     var longitudes = palabras.map(string => string.length);

     var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = longitudes.join(", ");
}