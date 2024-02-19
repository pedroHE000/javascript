function carregar(){
    var msg = window.document.getElementsById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 9

    msg.innerHTML = `agora sao ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // bom dia!
        img.src = 'exercicios2\img\manha-sir.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'exercicios2\img\tarde-sir.png'
    } else {
        //boa noite!
        img.src = 'exercicios2\img\noite-sir.png'
    }
}
