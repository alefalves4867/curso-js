const checar = ()=>{
    let a = document.getElementById('inome').value
    if (a == '') {
        return
    }
    if (a.toUpperCase() == "ALEF") {
        window.alert('Bem vindo, My Lord!')
    }else{
        window.alert("Olá, estranho")
    }
}

