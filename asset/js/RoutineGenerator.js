export class RoutineGenerator {
  constructor(weeks, days) {
    this.weeks = weeks; // Número total de semanas para el entrenamiento
    this.days = days; // Número de días por semana que el usuario quiere entrenar
    this.exercises = ["Sentadilla", "Banco", "Peso muerto", "Prensa"]; // Lista fija de ejercicios
  }

  *generateRoutine() {
    let dayCounter = 1; // Contador de días para iterar a través del número total de días de entrenamiento
    for (let week = 1; week <= this.weeks; week++) {
      // Bucle externo para iterar a través de las semanas
      yield `Semana ${week}:\n`; // Produce una cadena que indica el inicio de una nueva semana de entrenamiento
      for (let day = 1; day <= this.days; day++) {
        // Bucle interno para iterar a través de los días de cada semana
        const exercise =
          this.exercises[(dayCounter - 1) % this.exercises.length]; // Selección de ejercicio basado en el contador de días, usando un índice cíclico
        yield `Día ${dayCounter}: ${exercise}\n`; // Produce una cadena que representa el ejercicio asignado para ese día
        dayCounter++; // Incrementa el contador de días
      }
    }
  }
}
