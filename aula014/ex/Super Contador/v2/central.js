function cont(){
    var inc = Number((document.querySelector('#inc')).value)
    var fin = Number((document.querySelector('#fm')).value)
    var pass = Number((document.querySelector('#pss')).value)
    var res = document.querySelector('#res')
if(inc == 0 || fin == 0 || pass == 0) {
    window.alert('[ERROR} Faltam dados!')
    res.innerHTML = '<p>Impossível contar!'
} else {
    res.innerHTML = '<p>Contando:</p>'
    let i = inc
    let f = fin
    let p = pass

    if (p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        pass = 1
    }
    if (i < f){
        // Contagem cresente
        for(let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
        }
    
    } else {
        // Contagem regressiva
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }

        
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}
