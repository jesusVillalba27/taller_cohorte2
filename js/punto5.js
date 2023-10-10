var palabras = ["programacion", "javascript", "backend ", "frontend", "fullstack"];


var palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];


var letrasPalabra = palabraSeleccionada.split("");


var letrasAdivinadas = new Array(letrasPalabra.length).fill("_");


var intentosRestantes = 5;

function adivinarLetra() {
    var letraInput = document.getElementById("letraInput").value.toLowerCase();

    if (letraInput.length === 1 && letraInput.match(/[a-z]/)) {
        if (letrasPalabra.includes(letraInput)) {
            for ( var i = 0; i < letrasPalabra.length; i++) {
                if (letrasPalabra[i] === letraInput) {
                    letrasAdivinadas[i] = letraInput;
                }
            }

            if (!letrasAdivinadas.includes("_")) {
                document.getElementById("mensaje").textContent = "¡Felicidades! Has adivinado la palabra.";
                document.getElementById("letraInput").disabled = true;
            }
        } else {
            intentosRestantes--;
        }

        document.getElementById("palabraOculta").textContent = letrasAdivinadas.join(" ");
        document.getElementById("intentos").textContent = `Intentos restantes: ${intentosRestantes}`;

        if (intentosRestantes === 0) {
            document.getElementById("mensaje").textContent = `¡Perdiste! La palabra era "${palabraSeleccionada}".`;
            document.getElementById("letraInput").disabled = true;
        }
    } else {
        alert("Ingresa una letra válida.");
    }

    document.getElementById("letraInput").value = "";
}

// Mostrar la palabra oculta con guiones bajos al cargar la página
document.getElementById("palabraOculta").textContent = letrasAdivinadas.join(" ");