let numUser = document.querySelector('input#txtuser')
let res = document.querySelector('div#res')

let numPc = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let tentativas = 3


function adivinhar() {
    let userN = Number(numUser.value)
   
    if (tentativas > 0) {
       
        if (userN == numPc) {
            res.innerHTML = `Parabéns você acertou! ${numPc}`

        } else {
            tentativas--
        }

    }


    if (tentativas > 0) {
        res.innerHTML = `ERROU ! Você ainda tem ${tentativas} tentativas.`

    } else {
        res.innerHTML = `Acabaram as tentativas, o número correto era ${numPc}`

        res.innerHTML+='<p>Recomeçando o Jogo, Você tem mais 3 tentativas !</p>'
        recomecar()
    }

    numUser.value=''
    numUser.focus()

    
 
}

function recomecar (){
    numPc = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    tentativas = 3
}
