var yr = new Date()
var year = yr.getFullYear()
function tt(){
var nac = window.document.body.querySelector('#nac')//ano de nascimento
var born = Number(nac.value)
var res = window.document.body.querySelector('#res')//lugar de resp. da mensagem





var idade = year - born
res.innerHTML = `<p>Idade ${idade}</p>`
}
