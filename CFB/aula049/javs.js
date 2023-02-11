const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos = [1, 2, 3, 4, 5]
let ant=[]
let atu=[]

p_array.innerHTML = `[${elementos}]`

btnVerificar.addEventListener('click', ((evt)=>{
   resultado.innerHTML=elementos.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
   })
   resultado.innerHTML+=`<br> V.anterior: ${ant} <br> V.atual: ${atu}`
}))