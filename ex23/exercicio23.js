function pontos() {
    const selecionado = document.querySelector('input[name="habilita"]:checked');
    const selecionado1 = document.querySelector('input[name="habilita1"]:checked');
    const resultado = document.getElementById("correto")
    let pontos = ""
    if(selecionado.value== "a" && selecionado1.value== "d") {
        pontos=10 
        resultado.textContent = `Você fez ${pontos} pontos`
    }else if(selecionado.value== "a" || selecionado1.value== "d") {
        pontos=5
        resultado.textContent = `Você fez ${pontos} pontos`
    }else {
    pontos=0
    resultado.textContent = `Você fez ${pontos} pontos`

    } 
}