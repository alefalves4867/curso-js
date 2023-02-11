
let val = []
const result = document.querySelector('#resultado')
const op = [...document.getElementsByClassName('botoes')]

op.map((el) => {
    el.addEventListener('click', (e) => {
        const val1 = document.querySelector
        ('#valor_1').value
        const val2 = document.querySelector('#valor_2').value
        console.log('oi')
        if (document.querySelector('#valor_1').length == '' && document.querySelector('#valor_2').length == ''){
            
            return
        } else {

            val.push(Number(val1), Number(val2))

            const opera = e.target.innerText
            if (e == '+') {
                
                for(n of val){
                    result.innerText = n
                }
            }
        }
        
    })
    
})


