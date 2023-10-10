function extraerPares() {
     var matrizInput = document.getElementById("matrizInput").value;
     var matriz = matrizInput.split(',').map(numero => parseInt(numero));
     var numerosPares = matriz.filter(numero => numero % 2 === 0);

     var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Números Pares: " + numerosPares.join(', ');
}
