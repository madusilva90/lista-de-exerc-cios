function divisivelPorTres(){
    const num = parseInt(document.getElementById('numero').value)
    const msg = num%3 == 0 ? 'É divisivel por 3': 'Não'
    document.getElementById('resposta').textContent = msg
}