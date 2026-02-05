let timeoutId;
const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularLitros);

function calcularLitros() {
    let elementoKm = Number(document.getElementById("textoKm").value);
    let elementoGal = Number(document.getElementById("kmGalon").value);
    let resultado = document.getElementById("textoResultado");

        if (elementoKm <= 0 || elementoGal <= 0) {
            resultado.textContent = "⚠️ Ingresa valores mayores a 0";
            return;
        }

    let cantGalones = formatearNumero(elementoKm / elementoGal);

    let mensaje = "";

        if (Number(cantGalones) === 1){
            mensaje = `Carga ${cantGalones} galón de combustible`;
        } else {
            mensaje = `Carga ${cantGalones} galones de combustible`;
        }

    resultado.textContent = mensaje;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(borrarCampos, 10000);
}

function borrarCampos() {
    document.getElementById("textoKm").value = "0";
    document.getElementById("kmGalon").value = "0";
    document.getElementById("textoResultado").textContent = "";
}

function formatearNumero(num) {
    return Number.isInteger(num) ? num : Number(Math.ceil(num));
}