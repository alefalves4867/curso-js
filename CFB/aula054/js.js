const caixa = document.querySelector('#caixa')
let mapa = new Map()
mapa.set('Arabic', 'Salam')
mapa.set('Hebrew', 1967)

caixa.innerHTML += mapa.get('Hebrew')