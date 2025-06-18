function Reduz() {
    let numero= parseInt(document.getElementById('resultado').textContent)
    numero = numero - 10
    document.getElementById('resultado').textContent = numero
}
function Aumenta() {
    let numero= parseInt(document.getElementById('resultado').textContent)
    numero = numero + 10
    document.getElementById('resultado').textContent = numero
}