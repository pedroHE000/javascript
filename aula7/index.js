var idade = 22
console.log(`voce tem ${idade} anos.`)
if (idade < 18){
    console.log('nao vota')
} else if(idade < 18 || idade > 65){
        console.log('voto opcional')
}else if(idade >= 18){
    console.log('voto obrigatorio')
}