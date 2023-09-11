function sumar() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("porfavor ingrese numero validos en ambos campos.");
        return;
    }

    let suma =  num1 + num2;

    let resultadoElemtent = document.getElementById("Resultado");
    resultadoElemtent.innerHTML = "La suma es: "+ suma;
    resultadoElemtent.classList.add("Mostrar");

    if (suma > 10) {
        resultadoElemtent.className = "alert alert-success mostrar";
    } else {
        resultadoElemtent.className = "alert alert-danger mostrar"
    }
}
document.getElementById("calcularBtn").addEventListener("click", sumar);