document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    "use strict";

    /////////////////////////////////////////CAPTCHA////////////////////////////////////////////////////

    let captcha = document.getElementById("naleatorio").innerHTML = Math.floor((Math.random() * 10000) + 1);

    document.getElementById("botonComprobar").addEventListener("click", (e) => {
        comprobar(captcha);
    });
}

/////////////////////////////////////////////CAPTCHA//////////////////////////////////////////////////////
function comprobar(captcha) {
    let validacion = document.getElementById("validacion");
    let numero = document.getElementById("IngresarNumero").value;

    if (numero == captcha) {
        validacion.innerHTML = "¡Eres Humanx!";
        validacion.classList.add("ResultadoPositivo");
        validacion.classList.remove("ResultadoNegativo");
        let div = document.getElementById('enviar');
        div.style.display = "block";
    } else {
        validacion.innerHTML = "¡Intenta de vuelta!";
        validacion.classList.add("ResultadoNegativo");
        validacion.classList.remove("ResultadoPositivo");
        let div = document.getElementById('enviar');
        div.style.display = "none";
    }
}