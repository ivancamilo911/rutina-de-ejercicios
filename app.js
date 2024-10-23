// Array para almacenar las rutinas
let rutinas = [];

// Función para agregar una nueva rutina
function agregarRutina() {
    const nombreRutina = prompt("Ingrese el nombre de la rutina");
    const rutina = {
        nombre: nombreRutina,
        ejercicios: []
    };
    rutinas.push(rutina);
    actualizarListaRutinas();
}

// Función para actualizar la lista de rutinas
function actualizarListaRutinas() {
    const listaRutinas = document.getElementById("lista-rutinas");
    listaRutinas.innerHTML = "";
    rutinas.forEach((rutina, indice) => {
        const elemento = document.createElement("li");
        elemento.textContent = rutina.nombre;
        elemento.addEventListener("click", () => {
            mostrarEjercicios(rutina);
        });
        listaRutinas.appendChild(elemento);
    });
}

// Función para mostrar los ejercicios de una rutina
function mostrarEjercicios(rutina) {
    const listaEjercicios = document.getElementById("lista-ejercicios");
    listaEjercicios.innerHTML = "";
    rutina.ejercicios.forEach((ejercicio, indice) => {
        const elemento = document.createElement("li");
        elemento.textContent = ejercicio.nombre;
        listaEjercicios.appendChild(elemento);
    });
}

// Función para agregar un nuevo ejercicio a una rutina
function agregarEjercicio(rutina) {
    const nombreEjercicio = prompt("Ingrese el nombre del ejercicio");
    const ejercicio = {
        nombre: nombreEjercicio
    };
    rutina.ejercicios.push(ejercicio);
    mostrarEjercicios(rutina);
}
