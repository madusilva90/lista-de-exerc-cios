function trocaCor() {
    const cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("titulo").style.color = cor;
}