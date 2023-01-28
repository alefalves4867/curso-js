let numero = []
function adicionar(){
    let n = document.getElementById('num')
    let tab = document.getElementById('lista')
    let num = Number(n.value)
    if(n.value.length == 0){
        window.alert('Digite um número!')
    } else if (n.value > 100 || n.value < 1){
        window.alert('Digite um número entre 1 e 100')
    } else if (numero.indexOf(num) != -1){
        window.alert('Valor ínvalido ou já encontrado na lista!')
    }else if (numero.indexOf(num) == -1){
        numero.push(num)
        let item = document.createElement('option')

        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
    }
   
    
}
function finalizar(){
    let c = numero.length
    let fn = document.getElementById('final')
    numero.sort()
    fn.innerHTML = `<p>Ao todo, temos ${c} números cadastrados.</p><br>`
    fn.innerHTML += `<p>O menor valor encontrado foi ${numero[c-1]}.</p><br>`
    fn.innerHTML += `<p>O maior valor encontrado foi ${numero[0]}.</p><br>`
    let total = 0
    for (var i = 0; i < c; i++){
        total += numero[i]
    }
    fn.innerHTML += `<p>Somando todos os valores, temos ${total}.</p><br>`
    fn.innerHTML += `<p>A média dos valores digitados é ${total/c}.</p><br>`
}