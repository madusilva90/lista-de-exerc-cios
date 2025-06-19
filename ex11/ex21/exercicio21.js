let tempo = 60;          
let intervalo = null;    

function atualizarDisplay() {
    document.getElementById('tempo').innerText = tempo;
}

function iniciar() {
    if (intervalo !== null) return;  
    intervalo = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            atualizarDisplay();
        } else {
            clearInterval(intervalo);
            intervalo = null;
        }
    }, 1000); 
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerar() {
    clearInterval(intervalo);
    intervalo = null;
    tempo = 60;
    atualizarDisplay();
}
