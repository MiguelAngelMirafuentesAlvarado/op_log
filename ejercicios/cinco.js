function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function verificarAB() {
    let anio = document.getElementById("fecha").value;
    let resultadoElemento = document.getElementById("resultado");

    // Validar entrada
    if (!anio || isNaN(anio) || anio < 1900 || anio > 2100) {
        resultadoElemento.innerText = "Por favor, ingresa un año válido entre 1900 y 2100.";
        resultadoElemento.className = ""; // Remueve cualquier clase anterior
        return;
    }

    anio = parseInt(anio);
    let esBisiestoAnio = esBisiesto(anio);

    // Aplicar estilos con clases CSS
    resultadoElemento.innerText = esBisiestoAnio ? 
        `${anio} es un año bisiesto.` : 
        `${anio} no es un año bisiesto.`;

    resultadoElemento.className = esBisiestoAnio ? "bisiesto" : "no-bisiesto";
}
