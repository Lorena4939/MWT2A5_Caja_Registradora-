const formulario = document.getElementById('formulario');

let catalogo = [];
enviar();

function enviar() {
    formulario.addEventListener('submit', agregar)
}

function agregar(e) {
    e.preventDefault();
    for (let i = 0; i <= 9; i++) {
        let nombre = document.getElementById(`fname${i}`).value;
        let costo = document.getElementById(`lname${i}`).value;
        catalogo.push(nombre, costo);
    }
    console.log(catalogo);
    let suma = 0;
    for (let i = 1; i < catalogo.length; i += 2) {
        suma = suma + parseFloat(catalogo[i]);
    }
    console.log(suma);
}