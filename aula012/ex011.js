var idade = 17
if (idade < 16){
    console.log(`Não vota`)
    
} else {
    console.log(`Vota`)
    if (idade < 18 || idade > 65){
        console.log('Porém, o voto é opcional')
    } else {
        console.log('O voto é obrigatório')
    }
    
} 