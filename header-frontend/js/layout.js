// Función para mostrar u ocultar el menú desplegable
function toggleDrawer() {
    const drawer = document.getElementById('drawer-navigation');
    const isHidden = drawer.getAttribute('aria-hidden') === 'true';

    if (isHidden) {
        // Si el menú está oculto, mostrarlo
        drawer.classList.remove('-translate-x-full');
        drawer.setAttribute('aria-hidden', 'false');
    } else {
        // Si el menú está visible, ocultarlo
        drawer.classList.add('-translate-x-full');
        drawer.setAttribute('aria-hidden', 'true');
    }
}

// Agrega un escuchador de eventos al botón para abrir/ocultar el menú
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    menuToggle.addEventListener('click', toggleDrawer);
    menuClose.addEventListener('click', toggleDrawer);
});
