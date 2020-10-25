document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    "use strict";

    document.querySelector(".btn_menu").addEventListener("click", toggleMenu);
}

/////////////////////////////////////////////MENU DESPLEGABLE///////////////////////////////////////////////

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}