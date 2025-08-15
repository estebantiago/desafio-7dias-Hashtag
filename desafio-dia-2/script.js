let enviar = () => {
    let nome = document.querySelector('input#txtname')
    let idade = document.querySelector('input#txtid')
    let linguagem = document.querySelector('input#txtling')
    let res = document.querySelector('div#res')

    if(nome.value.length === 0 || idade.value.length === 0 || linguagem.value.length === 0){
        alert('[ERRO] Faltam dados a serem preenchidos!')
    } else {
        idadeUser = Number(idade.value)
        nomeUser = String(nome.value)
        linguagemUser = String(linguagem.value)


        }
       res.innerHTML=`Olá ${nomeUser}, você tem ${idadeUser} anos e já está aprendendo ${linguagemUser} !`
    }

