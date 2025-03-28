function mayorDeTres(a, b, c) {
    // Operadores lógicos para comparar los valores
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function mostrarMayor() {
    // Obtener los valores de los inputs
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;

    // Validar si los valores ingresados son números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === "" || num2 === "" || num3 === "") {
        document.getElementById('resultado').innerText = "Por favor, ingrese números válidos en los tres campos.";
        return;  // Detiene la ejecución si hay un valor no válido
    }

    // Convertir los valores a enteros
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    
    // Llamar a la función mayorDeTres
    let mayor = mayorDeTres(num1, num2, num3);
    
    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = "El mayor de los tres es: " + mayor;
}