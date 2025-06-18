function SeqMultiplicação(){
    const numero= parseInt(document.getElementById('num').value)
    result1=numero*1
    result2=numero*2
    result3=numero*3
    result4=numero*4
    result5=numero*5
    document.getElementById('resultado1').textContent = result1
    document.getElementById('resultado2').textContent = result2
    document.getElementById('resultado3').textContent = result3
    document.getElementById('resultado4').textContent = result4
    document.getElementById('resultado5').textContent = result5
}