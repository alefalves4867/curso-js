const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado  = document.querySelector('#resultado')

const elementos_array = [10,5,8,2,9,15,20]

p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt)=>{
    elementos_array.find((e, i) => {
        if (e == txt_pesquisar.value) {
            resultado.innerHTML = `O valor ${txt_pesquisar.value} foi encontrado na posição ${i}`
            
        } else {
            
        }
    })
})