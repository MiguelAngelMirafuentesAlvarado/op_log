function verificarNumero() {
    // Obtener el valor del input
    const num = parseFloat(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    // Verificar si el valor es un número
    if (isNaN(num)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        resultado.style.color = "orange";
    } else {
        // Utilizamos operadores lógicos para verificar si el número es positivo, negativo o cero
        const esPositivo = num > 0;
        const esNegativo = num < 0;
        const esCero = num === 0;

        // Combinamos las condiciones con operadores lógicos
        esPositivo && (
            resultado.textContent = "El número es positivo",
            resultado.style.color = "green"
        );

        esNegativo && (
            resultado.textContent = "El número es negativo",
            resultado.style.color = "red"
        );

        esCero && (
            resultado.textContent = "El número es cero",
            resultado.style.color = "blue"
        );
    }
}
