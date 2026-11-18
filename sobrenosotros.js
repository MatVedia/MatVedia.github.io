// BOTON SOBRE NOSOTROS

document.getElementById("btn-sobre-nosotros").addEventListener("click", function(event) {

    event.preventDefault();

    window.location.href = "sobrenosotros.html";

});
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