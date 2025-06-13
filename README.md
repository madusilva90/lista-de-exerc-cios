# lista-de-exerc-cios
exercicio 4
//html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="number" id="numero" placeholder="Digite um numero">
    <button onclick="testenumero()">Adivinhar</button>
    <p id="resultado"></p>
    <script src="exercicio4.js"> </script>
</body>
</html>
//JavaScript
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
function testenumero() {
    const Chute= parseInt (document.getElementById('numero').value)
    let result=''
    if (Chute == numeroSecreto){
        result="Voce acertu!"
    }else if (Chute>numeroSecreto){
        result="É menor!"
    } else {
        result="É maior!"
    }
    document.getElementById('resultado').textContent = result

}
