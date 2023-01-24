function cont(){
var inc = Number((document.querySelector('#inc')).value)
var fin = Number((document.querySelector('#fm')).value)
var pass = Number((document.querySelector('#pss')).value)
var res = document.querySelector('#res')

var inc2 = inc
if (inc == fin || pass == fin || pass == 0){
    window.alert('[ERROR] Tente Novamente')

} else if (inc <= -1 && pass <= -1 && fin >= 1){
    window.alert('[ERROR] Tente Novamente')

} else {
    res.innerHTML = `<p>Contando:</p>${inc} &#128073;`
    while (inc <= fin) {

        inc += pass
        res.innerHTML += `${inc} &#128073;`
    
    }
    res.innerHTML += `  &#x1F3C1;`
}

}

