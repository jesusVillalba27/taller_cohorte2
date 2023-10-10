function generarTarjeta() {
     var nombre = document.getElementById("nombre").value;
     var cargo = document.getElementById("cargo").value;
     var empresa = document.getElementById("empresa").value;
     var contacto = document.getElementById("contacto").value;

     var tarjeta =
    "<h2>Tarjeta de Presentación:</h2>" +
    "<p>Nombre: " + nombre + "</p>" +
    "<p>Cargo: " + cargo + "</p>" +
    "<p>Empresa: " + empresa + "</p>" +
    "<p>Contacto: " + contacto + "</p>";

    document.getElementById("tarjeta").innerHTML = tarjeta;
}