import { RoutineGenerator } from "./RoutineGenerator.js";

document.getElementById("generarRutina").addEventListener("click", function () {
  const semanas = parseInt(document.getElementById("semanas").value, 10);
  const dias = parseInt(document.getElementById("dias").value, 10);

  // Inicializar el generador de rutina con las semanas y días proporcionados
  const routineGenerator = new RoutineGenerator(semanas, dias);

  // Generar la rutina utilizando el generador
  const rutina = routineGenerator.generateRoutine();

  // Variable para almacenar el resultado final
  let resultado = "";

  // Iterar a través del generador y construir la rutina
  for (let dayRoutine of rutina) {
    resultado += dayRoutine;
  }
  console.log(resultado);
  // Mostrar la rutina generada en el elemento HTML correspondiente
  document.getElementById("resultadoRutina").textContent = resultado;
});
