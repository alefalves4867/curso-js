const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const btn2 = document.querySelector('#voltar')
const cursos = [...document.querySelectorAll('.curso')]
cursos.map((a)=>{
    a.addEventListener('click', (evt)=>{
        const b = evt.target
        b.classList.toggle("selecionado")
        b.classList.toggle('c1')
    })
})
btn.addEventListener('click', ()=>{
    const selecionadosCursos = [...document.querySelectorAll('.selecionado')]
    selecionadosCursos.map((el) =>{
        caixa2.appendChild(el)
    })
})

btn2.addEventListener('click', ()=>{
    const notCursos = [...document.querySelectorAll('.c1')]
    notCursos.map((el) =>{
        caixa1.appendChild(el)
    })
})