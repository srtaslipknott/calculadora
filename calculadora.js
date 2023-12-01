//Ejercicio 1

function suma(a, b, callback) {
    let c = a + b;
    callback();
}
function miCallback() {
    console.log("La suma se ha completado.");
}

suma(3, 5, miCallback);

//Ejercicio 2

function realizarOperacion(operador) {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);

    var resultado;

    switch (operador) {
        case 'suma':
            resultado = operando1 + operando2;
            break;
        case 'resta':
            resultado = operando1 - operando2;
            break;
        case 'multiplicacion':
            resultado = operando1 * operando2;
            break;
        case 'division':
            resultado = operando1 / operando2;
            break;
        default:
            resultado = "Operador no válido";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}