function see() {
let pass = Number(document.getElementById('senha').value)
if (pass == '') {
    return
} else if (pass == '1948') {
    let hs = document.getElementsByTagName('h1')
    hs = [...hs]
    let lb = document.getElementsByTagName('label')
    lb = [...lb]
    let el = document.getElementsByTagName('div')
    el = [...el]
    el.map((e, i) => {
    e.innerHTML='Welcome, My Lord!'
    e.style.color = 'black'
    
})
    hs.map((e, i) => {
        e.innerHTML='Welcome, My Lord!'
        e.style.color = 'black'
    })
    lb.map((e, i) => {
        e.innerHTML='Welcome, My Lord!'
        e.style.color = 'black'
    })
} else {
    let el = document.getElementsByTagName('div')
    el = [...el]
    el.map((e, i) => {
    e.innerHTML='ALERT! ACESS DENIED!'
    e.style.color = 'red'
    e.style.fontWeight = 'bold'
    })
    let hs = document.getElementsByTagName('h1')
    hs = [...hs]
    let lb = document.getElementsByTagName('label')
    lb = [...lb]
    hs.map((el, i)=>{
        el.innerHTML='ALERT! ACESS DENIED!'
        el.style.color = 'red'
        el.style.fontWeight = 'bold'
        el.style.fontSize = '3em'
    })
    lb.map((el, i) => {
        el.innerHTML='ALERT! ACESS DENIED!'
        el.style.color = 'red'
        el.style.fontWeight = 'bold'
    })

}
}








// const a = ['HTML', 'JavaScript', 'CSS', 'React', 'Salam', 'Shalom']
// a.map((el, i)=>{
//     console.log(`Palavra: ${el} - Posição: ${i}`)
// })