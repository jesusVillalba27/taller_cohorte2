function capitalizarPrimerasLetras(texto) {
     var palabras = texto.split(" ");
     var palabrasCapitalizadas = palabras.map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return palabrasCapitalizadas.join(" ");
}

function capitalizar() {
     var textoInput = document.getElementById("textoInput").value;
     var textoCapitalizado = capitalizarPrimerasLetras(textoInput);

     var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = textoCapitalizado;
}
