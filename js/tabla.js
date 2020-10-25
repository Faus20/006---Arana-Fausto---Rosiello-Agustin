document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    "use strict";

    ////////////////////////////////////////////////TABLA DINAMICA///////////////////////////////////////////

    //Defino un arreglo vacio, donde se van a ir cargando los items de la tabla dinamica
    let stock = [];

    //Les asigno a los botones un evento y llamo a las funciones.
    let btn_agregar = document.getElementById("btnAdd");
    btn_agregar.addEventListener("click", (e) => {
        agregar(stock);
    });

    let btn_vaciar = document.getElementById("btnVaciar");
    btn_vaciar.addEventListener("click", (e) => {
        vaciar(stock);
        stock = [];
    });

    let btn_3r = document.getElementById("btn3");
    btn_3r.addEventListener("click", (e) => {
        agregar3(stock);
    });

}

////////////////////////////////////////////TABLA DINAMICA/////////////////////////////////////////////////

//La funcion agregar capta el valor que hay en los inputs del formulario y los guarda en el arreglo
function agregar(stock) {

    let tabla = document.getElementById("table");
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let renglon = {
        "producto": producto,
        "precio": precio,
        "cantidad": cantidad,
    }
    stock.push(renglon);

    //A la tabla se le inserta una fila y 3 celdas
    let row = tabla.insertRow(-1);
    let cel1 = row.insertCell(0);
    let cel2 = row.insertCell(1);
    let cel3 = row.insertCell(2);

    //A las celdas se les imprime en el HTML el valor de los inputs del formulario
    cel1.innerHTML = producto;
    cel2.innerHTML = "$" + precio;
    cel3.innerHTML = cantidad;

    //Si el valor ingresado en el input oferta es 'si' a la fila se le agrega la clase oferta del CSS.
    if (document.formulario_dinamico.oferta.value == "si") {
        row.classList.toggle("oferta");
    }
}

//La funcion agregar3 contiene un for que ejecuta 3 veces la funcion agregar.
function agregar3(stock) {
    for (let index = 0; index < 3; index++) {
        agregar(stock);
    }
}

//La funcion vaciar, vacia el arreglo y recorre el largo del mismo y elimina las filas de la tabla.
function vaciar(stock) {
    let total = stock.length;
    let tabla = document.getElementById("table");

    for (let index = 0; index < total; index++) {
            tabla.deleteRow(-1);
        }
}