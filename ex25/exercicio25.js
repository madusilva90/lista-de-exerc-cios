let contador = 0;
const botao = document.getElementById('botaoContador')
const display = document.getElementById('contador')
botao.addEventListener('click', () => {
  contador++;
  display.textContent = contador;
})
botao.addEventListener('dblclick', () => {
  contador = 0;
  display.textContent = contador;
})