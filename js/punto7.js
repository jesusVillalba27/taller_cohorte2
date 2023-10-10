function generarContrato() {
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var terminos = document.getElementById("terminos").value;

    var contrato = `
        CONTRATO LEGAL

        Este contrato ("Contrato") se celebra entre ${nombre} ("Cliente") y la [Nombre de la Compañía] ("Compañía") a partir del ${fecha}.

        TÉRMINOS Y CONDICIONES:
        ${terminos}

        El Cliente y la Compañía acuerdan los términos y condiciones anteriores.

        Firma del Cliente: __________________________
        Firma de la Compañía: ________________________
    `;

    document.getElementById("contrato").textContent = contrato;
}