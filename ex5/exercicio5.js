function Media() {
    const media = ((parseInt(document.getElementById('nota1').value))+(parseInt(document.getElementById('nota2').value))+(parseInt(document.getElementById('nota3').value))+(parseInt(document.getElementById('nota4').value)))/4
    if (media>=6) {
        result='Aprovado!'
    } else {
        result='Reprovado!'
    }
    document.getElementById('resultado').textContent = result
}