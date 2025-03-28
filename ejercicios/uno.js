function parOImpar(num) {
    return (num % 2 === 0 && 'Par') || 'Impar';
}

function verificarParImpar() {
    let numero = document.getElementById("numero").value;

    // Convertir a número entero eliminando ceros a la izquierda
    let numeroConvertido = parseInt(numero, 10);

    // Validar si el número es negativo o NaN (no es un número válido)
    if (isNaN(numeroConvertido) || numeroConvertido < 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido y positivo.";
        return;
    }

    let resultado = parOImpar(numeroConvertido);
    document.getElementById("resultado").innerText = "El número es: " + resultado;
}
