function verificador() {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value
    const resultado = document.getElementById("verificar");
    if(!nome || !email || !telefone || !senha) {
        resultado.textContent = "Preencha o formulário";
    }else{
        resultado.textContent = "Enviado com sucesso";
    }
}