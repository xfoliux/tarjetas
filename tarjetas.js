function crearTarjetas(){
    let contenido = "";
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto= parseInt(document.getElementById("txtSalto").value);

    let divTarjetas = document.getElementById("divTarjetas");

    if (isNaN(desde) || isNaN(hasta) || isNaN(salto)) {
        alert("Debes ingresar todos los valores");
        return;
    }

    if (salto <= 0) {
        alert("El salto debe ser mayor que 0");
        return;
    }
    if (isNaN(desde) || isNaN(hasta)) {
        alert("Debes ingresar números");
        return;
    }
    if (desde > hasta) {
        alert("Desde no puede ser mayor que Hasta");
        return;
    }

    for (let i = desde; i <= hasta; i+=salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    divTarjetas.innerHTML = contenido;
}