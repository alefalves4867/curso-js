function Pessoa(pnome, pidade) {
    this.nome = pnome,
    this.idade = pidade,

    this.getNome = () => {
        return this.nome
    },

    this.getIdade = () => {
        return this.idade
    },

    this.setNome = (nome) => {
        this.nome = nome
    },

    this.setIdade = (idade) => {
        this.idade = idade
    },

    this.info = () => {
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log(`---------------------`)
    }
}

const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

let pessoas = []

const addPessoa = () => {

    res.innerHTML = ''
    pessoas.map((e) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${e.getNome()} <br> Idade: ${e.getIdade()}`

        res.appendChild(div)

    })
}

btn_add.addEventListener('click', (evt)=>{
    const nome = document.querySelector('#f_nome')
    const idade = document.querySelector('#f_idade')
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})