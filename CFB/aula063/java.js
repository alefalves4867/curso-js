const btn = document.getElementById('btn')
let f_tipos = document.getElementsByName('f_tipo')
const carros = document.querySelector('.carros')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')

let c_array = []



const remover_do_array = () =>{ 
  c_array
}

f_tipos[0].addEventListener('click', ()=>{
    f_nome.value = ''
    f_portas.value = 0
    f_municao.removeAttribute('disabled')
    f_blindagem.removeAttribute('disabled')
})


f_tipos[1].addEventListener('click', ()=>{
  f_nome.value = ''
  f_portas.value = 0
  f_municao.setAttribute('disabled', 'disabled')
  f_blindagem.setAttribute('disabled', 'disabled')
  f_blindagem.value = 0
  f_municao.value = 0
})


btn.addEventListener('click', ()=>{
  if(f_tipos[0].checked === true){
    const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
    c_array.push(c)
  
  }
  
  if(f_tipos[1].checked === true){
    const c = new Carro(f_nome.value, f_portas.value)
    c_array.push(c)
  }
  instanciar()
  

})

const instanciar = () => {
  carros.innerHTML = ''
  c_array.map((e, i)=>{
    console.log(i)
    console.log('-----------')
    const div = document.createElement('div')
    const btn = document.createElement('input')
    btn.type = 'button'
    btn.setAttribute('value', 'remover')
    btn.style = 'cursor: pointer;'
    btn.addEventListener('click', (evt)=>{
      console.log(i)
      c_array.splice(i, 1) // HERE THE QUESTION 
      instanciar(); //É necessario o retorno para a função instanciar(), pois anteriormente já foi deletado do c_array o elemento clickado, então, foi pedido (quando instanciar() foi acionado) que apagasse todoas as divs adicionadas no carro e reescrevesse cada um dos objetos incluidos no c_array em uma nova div
    })
    div.setAttribute('class', 'carro')
    div.innerHTML = `Nome: ${e.nome}</br>`
    div.innerHTML += `Portas: ${e.portas}</br>`

    div.innerHTML += `Blindagem: ${e.blindagem}</br>`
    div.innerHTML += `Municao: ${e.municao}`
    div.appendChild(btn)
    carros.appendChild(div)
  })
}

class Carro { // Classe PAI / Base
  constructor(nome, portas) {
    this.nome = nome
    this.portas = portas
    this.ligado = false
    this.val = 0
    this.cor = undefined
  }

  ligar = () => {
    this.ligado = true
  }

  desligar = () => {
    this.ligado =false
  }

  setCor = (cor) => {
    this.cor = cor
  }
}

class Militar extends Carro {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas)
    this.blindagem = blindagem
    this.municao = municao
    this.setCor = 'verde' 
  }

  atirar = ()=>{
    if(this.municao>0) {
      this.municao--
    }
  }
}
