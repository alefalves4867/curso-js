
// let val = []
// let resultado = document.querySelector('#resultado')
// const op = [...document.getElementsByClassName('botoes')]

// op.map((el) => {
//     el.addEventListener('click', (e) => {
//         let sinal = e.target.innerText
//         const val1 = document.querySelector
//         ('#valor_1').value
//         const val2 = document.querySelector('#valor_2').value
        
//         if (val1.length == 0 || val2.length == 0){
            
//             return
            
//         } else {
            
//             val.push((Number(val1)))
//             val.push((Number(val2)))
//             //window.alert('ola')
//             // console.log(val)
//             // console.log(typeof(val[1]))
//             // const opera = e.target.innerText
//             if (sinal == '+') {
//                 var final = 0
//                 for(i of val){
//                     final += i
//                 }
//                 resultado.value = final
//                 val = []
//             }
//             if (sinal == 'X') {
//                 var final = 1
//                 for(i of val){
//                     final *= i
//                 }
//                 resultado.value = final
//                 val = []
//             }
//             if (sinal == '-') {
//                 var n1 = val[0]
//                 var n2 = val[1]
//                 var res = n1 - n2 
//                 resultado.value = res
//                 val = []
//             }
//             if (sinal == '/') {
//                 var n1 = val[0]
//                 var n2 = val[1]
//                 var res = n1 / n2 
//                 resultado.value = res
//                 val = []
//             }
//         }
        
//     })
    
// })


//Solução 2
let resultado = document.querySelector('#resultado')
const bottons = [...document.getElementsByClassName('botoes')]


const op = [
    () => {
        let val1 = document.querySelector('#valor_1').value
        let val2 = document.querySelector('#valor_2').value
        const val = [(Number(val1)), (Number(val2))]
        resultado.value = val[0] + val[1]
    },
    () => {
        let val1 = document.querySelector('#valor_1').value
        let val2 = document.querySelector('#valor_2').value
        const val = [(Number(val1)), (Number(val2))]
        resultado.value = val[0] - val[1]
    },
    () => {
        let val1 = document.querySelector('#valor_1').value
        let val2 = document.querySelector('#valor_2').value
        const val = [(Number(val1)), (Number(val2))]
        resultado.value = val[0] * val[1]
    },
    () => {
        let val1 = document.querySelector('#valor_1').value
        let val2 = document.querySelector('#valor_2').value
        const val = [(Number(val1)), (Number(val2))]
        resultado.value = val[0] / val[1]
    }
]
bottons.map((evt, i)=>{
    evt.addEventListener('click', op[i])
})

