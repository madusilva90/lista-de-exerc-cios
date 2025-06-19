function clicou() {
    document.getElementById('butao').textContent = `clicado`
    const cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("outracor").style.color = cor;
}