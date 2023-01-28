let numero = []
function adicionar(){
    let fn = document.getElementById('final')
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
        fn.innerHTML = ''
    }
    n.value = ''
    n.focus()
    
}
function finalizar(){
    if (numero.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = numero.length
        let maior = numero[0]
        let menor = numero[0]
        let soma = 0
        let media = 0
        for(let pos in numero){
            soma += numero[pos]
            if (numero[pos] > maior){
                maior = numero[pos]
            }
            if (numero[pos] < menor){
                menor = numero[pos]
            }
        }    
    media = soma/tot
    let res = document.getElementById('final')   
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média entre todos os números é ${media}`
    }
}