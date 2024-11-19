let segundos = 0;
let intervaloId = null;

const mostrarCronometro = document.getElementById("cronometro");
const botonIniciar = document.getElementById("iniciar");
const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");

function formatearTiempo(segundos) {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const segundosRestantes = String(segundos % 60).padStart(2, "0");
  return `${horas}:${minutos}:${segundosRestantes}`;
}

function actualizarDisplay() {
  mostrarCronometro.textContent = formatearTiempo(segundos);
}

botonIniciar.addEventListener("click", () => {
  if (intervaloId) return; // Si ya hay un intervalo en curso, no hace nada
  intervaloId = setInterval(() => {
    segundos++;
    actualizarDisplay();
  }, 1000);
});

botonPausar.addEventListener("click", () => {
  clearInterval(intervaloId); // Detiene el cronómetro
  intervaloId = null; // Resetea el ID del intervalo
});

botonReiniciar.addEventListener("click", () => {
  clearInterval(intervaloId); // Detiene el cronómetro
  intervaloId = null; // Resetea el ID del intervalo
  segundos = 0; // Reinicia el contador de tiempo
  actualizarDisplay(); // Actualiza la pantalla con el tiempo reiniciado
});

actualizarDisplay();
