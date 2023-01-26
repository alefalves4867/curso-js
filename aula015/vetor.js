let a = [1, 5, 8, 6, 4, 3, 2, 9]
for(let pass = 0; pass < a.length; pass++){
    console.log(`A posição ${pass} tem o valor ${a[pass]}`)
}
console.log('----------------------------------------------------')
for(let pos in a.sort()){
    console.log(`A posição ${pos} tem o valor ${a[pos]}`)
}