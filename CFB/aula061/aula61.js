const res = document.querySelector('.res')
const pnome = document.querySelector
('#f_nome')
const pidade = document.querySelector('#f_idade')
const button  = document.querySelector('#btn_add')


const addPessoa = () => {
        const div = document.createElement('div')
        div.innerHTML = `Nome: ${Pessoa.getNome()} <br> Idade: ${Pessoa.getIdade()}`
        div.setAttribute('class', 'pessoa')

        res.appendChild(div)}

const Pessoa = {
    nome:'',
    idade:0,
    getNome: function() {
        return this.nome
    },
    getIdade: function() {
        return this.idade
    },
    setNome: function(nome) {
        this.nome = nome
    },
    setIdade: function(idade) {
        this.idade = idade
    }
}

btn_add.addEventListener('click', (evt) => {
    const nomeD = pnome.value
    const idadeD = pidade.value

    Pessoa.setNome(nomeD)
    Pessoa.setIdade(idadeD)
    addPessoa()

})




/*
function Pessoa() {
    this.nome = 'Alef'
}

const a = new Pessoa

a.nome = 'Alef Alves de Araujo'

res.innerHTML = a.nome

*/