function miniCalculadora(){
    const num = parseInt(document.getElementById('numero').value)
    const num2 = parseInt(document.getElementById('numero2').value)
    const msg1 = num*num2
    document.getElementById('resposta').textContent = `A multiplicação deles é : ${msg1}`
    const msg2 = num/num2
    document.getElementById('resposta2').textContent = `A divisão deles é : ${msg2}`
    const msg3 = num+num2
    document.getElementById('resposta3').textContent = `A soma deles é : ${msg3}`
    const msg4 = num-num2
    document.getElementById('resposta4').textContent = `A subtração deles é : ${msg4}`
    const msg5 = num*num
    document.getElementById('resposta5').textContent = `O primeiro número ao quadrado é : ${msg5}`
    const msg6 = num2*num2
    document.getElementById('resposta6').textContent = `O segundo número ao quadrado é : ${msg6}`
    const msg7 = Math.sqrt(num)
    document.getElementById('resposta7').textContent = `A raiz do primeiro número é : ${msg7}`
    const msg8 = Math.sqrt(num2)
    document.getElementById('resposta8').textContent = `A raiz do segundo número é : ${msg8}`

}