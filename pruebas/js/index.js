document.addEventListener("DOMContentLoaded", function () {
    createEye();
});

function createEye() {
    const dragon = document.getElementById("dragon");

    // Crear ojo
    const eye = document.createElement("div");
    eye.className = "eye";

    // Crear pupila
    const pupil = document.createElement("div");
    pupil.className = "pupil";

    // Añadir pupila al ojo
    eye.appendChild(pupil);

    // Añadir ojo al dragón
    dragon.appendChild(eye);
}
