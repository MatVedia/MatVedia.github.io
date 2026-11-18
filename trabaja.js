const btnTrabaja = document.getElementById("btn-trabaja-nosotros");

if (btnTrabaja) {
    btnTrabaja.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "trabaja-nosotro.html";
    });
}
const cv = document.getElementById("cv");
const nombreArchivo = document.getElementById("nombreArchivo");

if (cv && nombreArchivo) {
    cv.addEventListener("change", function() {
        if (cv.files.length > 0) {
            nombreArchivo.textContent = cv.files[0].name;
        } else {
            nombreArchivo.textContent = "Ningún archivo seleccionado";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const botonMenu = document.getElementById("hamburguesa-btn");
    const menuNavegacion = document.getElementById("menu-nav");

    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener("click", function () {
            menuNavegacion.classList.toggle("activo");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const botonMenu = document.getElementById("hamburguesa-btn");
    const menuNavegacion = document.getElementById("menu-nav");

    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener("click", function (evento) {
            evento.stopPropagation();
            menuNavegacion.classList.toggle("activo");
        });

        // Cierra el menú al hacer clic en cualquier otra parte de la pantalla
        document.addEventListener("click", function (evento) {
            if (!menuNavegacion.contains(evento.target) && !botonMenu.contains(evento.target)) {
                menuNavegacion.classList.remove("activo");
            }
        });
    }
});
const btnHamburguesa = document.getElementById('hamburguesa-btn');
const menuNav = document.querySelector('.menu');

// Al presionar el botón de 3 rayitas, abre o cierra el menú
btnHamburguesa.addEventListener('click', () => {
    menuNav.classList.toggle('activo');
});

// Si tocás alguno de los enlaces ("Trabajá con nosotros", "Sobre nosotros", "Presupuestos"), se cierra solo
const enlacesMenu = document.querySelectorAll('.menu a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuNav.classList.remove('activo');
    });
});