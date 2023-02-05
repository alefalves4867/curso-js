const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

cursos.map((e, indice) => {
    const novoE = document.createElement('div')
    novoE.setAttribute('id', 'c' + indice)
    novoE.setAttribute('class', 'curso c1')
    novoE.innerHTML = e
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')


    comandos.appendChild(rb)
    novoE.appendChild(comandos)
    caixaCursos.appendChild(novoE)
})

btnCursoSelecionado.addEventListener('click', (evt) => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    radiosSelecionados = radiosSelecionados[0]
    let textSelected = radiosSelecionados.parentNode.parentNode.nextSibling.textContent
    console.log(textSelected)
    
})
