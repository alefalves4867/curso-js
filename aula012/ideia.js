var hr = new Date();
var har = hr.getHours();
var hora = window.document.querySelector('div#hora');
//var img = window.document.body.querySelector("#imagem")
hora.innerHTML = `<p>Agora são <strong>${har}</strong> horas</p>`;
var saud = window.document.querySelector('#saud')
var imag = window.document.querySelector('#imagem')
var bd = window.document.querySelector('#bd')

        
if (har >= 0 && har < 12){
    saud.innerHTML += `<p><strong>Bom Dia!</strong></p>`
    imag.innerHTML = '<img src="imagens/ed/har-tzion-day-273.jpg" alt="paisagem">'
    //img.src = "imagens/ed/har-tzion-day-273.jpg"
    bd.style.background = '#19487C'
} else if (har >= 12 && har <= 18){
    saud.innerHTML += `<p><strong>Boa Tarde!</strong></p>`
    imag.innerHTML = '<img src="imagens/ed/tzion-erev-273.jpg" alt="paisagem">'
    //img.src = "imagens/ed/tzion-erev-273.jpg"
    bd.style.background = '#DB6616'
} else {
    saud.innerHTML = `<p><strong>Boa Noite!</strong></p>`
    imag.innerHTML = '<img src="imagens/ed/jerusalem-laila-full.jpg" alt="paisagem">'
    //img.src = "imagens/ed/jerusalem-laila-full.jpg"
    bd.style.background = '#161415'
}   