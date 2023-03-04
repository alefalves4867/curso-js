class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velmax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`------------------`)
    }
}

let c1 = new Carro('Akbar', 4)
let c2 = new Carro('Alfa', 2)
let c3 = new Carro('Beta', 3)
let c4 = new Carro('Gomal', 1)

c1.info()
c2.info()
c3.info()
c4.info()