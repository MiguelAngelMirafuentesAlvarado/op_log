function  calificacionALetra(calificacion){
    if (calificacion >=90 && calificacion <=100){
        return "A";
    }else if (calificacion >=80 && calificacion <90){
        return "B";
    }else if (calificacion >=70 && calificacion <80){
        return "C";
    }else if (calificacion >=60 && calificacion <70){
        return "D";
    }else if (calificacion <60){
        return "F";
    }else{
        return "Error: Introduzca un número entre 0 y 100.";
    }
}

function mostrarLetra(){
    let calificacion = document.getElementById("calificacion").value;
    console.log(calificacion)
    calificacion = parseInt(calificacion);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        document.getElementById('resultado').innerText = "Por favor ingresa una calificación válida entre 0 y 100.";
    } else {
        let letra = calificacionALetra(calificacion);
        document.getElementById('resultado').innerText = "La letra correspondiente es: " + letra;
    }
}