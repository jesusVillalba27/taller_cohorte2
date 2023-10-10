function generarGrafico() {
    var datosInput = document.getElementById("datosInput").value;
    var datos = datosInput.split(',').map(Number);
    var graficoElement = document.getElementById("grafico");

    var grafico = "Gráfico de Barras:\n\n";

    for ( var i = 0; i < datos.length; i++) {
        var barra = '*'.repeat(datos[i]);
        grafico = `${grafico}${i + 1}: ${barra}\n`;
    }

    graficoElement.textContent = grafico;
}