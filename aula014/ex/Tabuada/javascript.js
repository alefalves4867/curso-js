
function gerar(){
var num = Number((document.querySelector('#num')).value)
var res = document.querySelector('#res')
res.innerHTML = `<p>O Resultado da Tabuada de ${num} é:</p>`
var a = 0
while (a <= 10){
    
    res.innerHTML += `<p>${a} x ${num} = ${a*num}</p>`
    a++
}
}