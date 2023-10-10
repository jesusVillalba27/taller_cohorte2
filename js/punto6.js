var autores = [
    "Albert Einstein",
    "Mark Twain",
    "Mahatma Gandhi",
    "Oscar Wilde",
    "Nelson Mandela",
    "Isaac Newton"
];

var citas = [
    "La imaginación es más importante que el conocimiento.",
    "Nunca te acuestes sin aprender algo nuevo.",
    "La mejor manera de predecir el futuro es crearlo.",
    "La única forma de deshacerse de una tentación es ceder ante ella.",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
    "Lo que sabemos es una gota, lo que ignoramos es un océano."
];

// Función para generar una cita aleatoria
function generarCita() {
    const indiceAleatorio = Math.floor(Math.random() * autores.length);
    const autorAleatorio = autores[indiceAleatorio];
    const citaAleatoria = citas[indiceAleatorio];
    const citaGenerada = `${autorAleatorio} dijo: "${citaAleatoria}"`;
    
   
document.getElementById("cita").textContent = citaGenerada;
} 