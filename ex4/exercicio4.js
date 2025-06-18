let numeroSecreto = Math.floor(Math.random() * 20) + 1;
function testenumero() {
    const Chute= parseInt (document.getElementById('numero').value)
    let result=''
    if (Chute == numeroSecreto){
        result="Voce acertou!"
    }else if (Chute>numeroSecreto){
        result="É menor!"
    } else {
        result="É maior!"
    }
    document.getElementById('resultado').textContent = result

}
