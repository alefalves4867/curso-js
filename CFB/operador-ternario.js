
let n1 = 10
let res = 0
res = (!(n1%2) ? "Par" : "Impar")
console.log(res)

/*OU TAMBÉM*/

n1 = 20
let n2 = 40

res = (n1 <= n2 ? "Verdade" : "Falso")

console.log(res) 

//SPREAD

const soma=(v1,v2,v3) => {
    return v1 + v2 + v3
}
let valores=[1,5,4]
console.log(soma(...valores))