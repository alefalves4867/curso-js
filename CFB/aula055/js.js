const caixa = document.querySelector('#caixa')

let musicas = new Set(['hatikvah', 'Kol Hazman', 'Lo Nafsik Lekhalom'])

musicas.add('Nafsaha')

console.log(musicas)


musicas.forEach((el) => {
    caixa.innerHTML += el + '<br>'
})