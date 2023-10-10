function calcularCuotaMensual() {
     var montoPrestamo = parseFloat(document.getElementById("monto").value);
     var tasaInteresAnual = parseFloat(document.getElementById("tasa").value);
     var periodoAmortizacion = parseInt(document.getElementById("periodo").value);

     var tasaInteresMensual = (tasaInteresAnual / 100) / 12;
     var numeroCuotas = periodoAmortizacion * 12;

     var cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroCuotas));

     var cuotaMensualFormateada = cuotaMensual.toFixed(2);
     var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `La cuota mensual es de $${cuotaMensualFormateada}`;
}