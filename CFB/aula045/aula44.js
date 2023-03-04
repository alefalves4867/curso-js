const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')


const criarNovoCurso=(curso, indice)=>{
    const novoE = document.createElement('div')
    novoE.setAttribute('id', 'c' + indice)
    novoE.setAttribute('class', 'curso c1')
    novoE.innerHTML = curso
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')


    comandos.appendChild(rb)
    novoE.appendChild(comandos)
    return novoE
    
}

cursos.map((e, chave) => {
    const novoElemento = criarNovoCurso(e)
    caixaCursos.appendChild(novoElemento)
    chave++
})


const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    return radiosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    radiosSelecionados = radiosSelecionados[0]
    if (rs != undefined) {
    const textSelected = radiosSelecionados.parentNode.parentNode.firstChild.textContent
    window.alert(`${textSelected} selecionado`)
    } else {
        window.alert('Selecione antes um curso')
    }
})

btnRemoverCurso.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    radiosSelecionados = radiosSelecionados[0]
    const textSelected = radiosSelecionados.parentNode.parentNode
    textSelected.remove()
    
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    
    if (nomeCurso.value != ''){
    const rs = radioSelecionado()
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    radiosSelecionados = radiosSelecionados[0]
    if (rs != undefined) {
    const cursoS = radiosSelecionados.parentNode.parentNode
    const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoS)
    } else {
        window.alert('Selecione antes um curso')
    }
    } else {
        window.alert('Digite o nome do curso!')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    
    if(nomeCurso.value != ''){
    const rs = radioSelecionado()
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radiosSelecionados = todosRadios.filter( (e) => {
        return e.checked
    })
    radiosSelecionados = radiosSelecionados[0]
    if (rs != undefined) {
    const cursoS = radiosSelecionados.parentNode.parentNode
    
    const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoS.nextSibling)
    } else {
        window.alert('Selecione antes um curso')
    }
    } else {
        window.alert('Digite o nome do curso!')
    }
})