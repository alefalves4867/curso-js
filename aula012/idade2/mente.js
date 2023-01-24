
function verificar(){
    var d = new Date()
    var actual = d.getFullYear()
    var nac = window.document.body.querySelector('#anoNasc')
    var res = window.document.querySelector('#res')
    if (nac.value.length == 0 || Number(nac.value) > actual){
    window.alert('[ERROR] Verifique os dados e tente novamente!')
        if (nac.value.length == 0){
            window.alert('Informações do erro: Não existe ano 0 no calendário gregoriano')
        } else if (Number(nac.value) > actual) {
            window.alert('Informações do erro: Não calculamos a idade de quem veio do futuro, hahaha')

        }
    } else {
        var a = 0
        var sx = document.getElementsByName('ins')
        var idade = actual - Number(nac.value)
        var gen = ""
        var img = window.document.querySelector('.hel')
        if (sx[0].checked){
            gen = "Homem"
            if (idade >= 0 && idade < 10){
                //Criança
                img.innerHTML = '<img src="ft/foto-bebe-m.png" alt="bebê">'
               
            } else if (idade < 21){
                //Jovem
                img.innerHTML = '<img src="ft/foto-jovem-m.png" alt="bebê">'
            } else if (idade < 50 ){
                //Adulto
                img.innerHTML = '<img src="ft/foto-adulto-m.png" alt="bebê">'
            } else if (idade < 100 ){
                //Idoso
                img.innerHTML = '<img src="ft/foto-idoso-m.png" alt="bebê">'
            } else {
                //Ancião
                img.innerHTML = '<img src="ft/foto-idoso-m.png" alt="bebê">'
                
                a = 1
            }

        } else {
            gen = "Mulher"
            if (idade >= 0 && idade < 10){
                //Criança
                img.innerHTML = '<img src="ft/foto-bebe-f.png" alt="bebê">'
            } else if (idade < 21){
                //Jovem
                img.innerHTML = '<img src="ft/foto-jovem-f.png" alt="bebê">'
            } else if (idade < 50 ){
                //Adulto
                img.innerHTML = '<img src="ft/foto-adulto-f.png" alt="bebê">'
            } else if (idade < 100 ){
                //Idoso
                img.innerHTML = '<img src="ft/foto-idoso-f.png" alt="bebê">'
            } else {
                //Ancião
                img.innerHTML = '<img src="ft/foto-idoso-f.png" alt="bebê">'
               a = 1
                
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos</p>`
        if (a == 1){
            res.innerHTML += '<p>Parabéns!!! <br>Tenha muitos mais anos de vida!</p>'
        } else {
            var f = 100 - idade
            res.innerHTML += `Faltam ${f} anos para os 100 anos`
        }
    }
}