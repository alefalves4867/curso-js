const caixa = document.querySelector('#caixa')

let cursos = ['HTML', 'CSS', 'JavaScript', 'Java']

cursos.map((e) => {
    let p = document.createElement('p')
    p.innerHTML = e
    caixa.appendChild(p)

})



console.log(cursos)  