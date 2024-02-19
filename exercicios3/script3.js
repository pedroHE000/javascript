/*function verificar(){
    var data = new Data()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente!') 
    } else {
        window.alert('tudo ok')
    }
   
}*/
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radisex');

        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','homemde10n.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','homemde15n.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','homemde40n.png')
            }else{
                //idoso
                img.setAttribute('src','homemde60n.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança

            }else if (idade < 21) {
                //jovem
            }else if (idade < 50) {
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}