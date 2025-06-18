function Teste() {
    if (document.getElementById('opçao2').checked) {
        result= "Resposta correta!"
    } else if ((document.getElementById('opçao1').checked) || (document.getElementById('opçao3').checked)) {
        result= "Tente novamente!"
    } else {
        result= "Por favor, selecione uma opção."
    }
    document.getElementById('resultado').textContent = result
}