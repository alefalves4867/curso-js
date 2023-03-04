class Carro { //Classe Pai
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }

    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = 10
        this.setCor('verde')
    }
    atirar = function() {
        this.municao --
    }
    recarregar = function(municao) {
        this.municao += municao
    }

}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.setCor = 'Azul'
        this.lugares = lugares
    }

}

const c1 = new Carro
const c2 = new Militar
const c3 = new Utilitario

c2.recarregar(50)



console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?'Sim':'Não'}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`------------------------`)



console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?'Sim':'Não'}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log(`------------------------`)



console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${c3.ligado?'Sim':'Não'}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Velocidade: ${c3.lugares}`)
console.log(`Cor: ${c3.cor}`)
console.log(`------------------------`)