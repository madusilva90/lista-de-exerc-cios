const input = document.getElementById('campoTexto')
const mensagem = document.getElementById('mensagem')
input.addEventListener('keydown', function(event) {
  const tecla = event.key;
  mensagem.textContent = `Você pressionou: ${tecla}`;
})