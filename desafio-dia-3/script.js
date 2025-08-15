
const enviar = () => {

  let inpUser = document.querySelector('input#txtstack')
  let res = document.querySelector('div#res')

  res.innerHTML=''

  if (inpUser.value.length == 0) {
    alert('[ERRO] Preencha o campo!')
    return
  } 
  let stackUser = String(inpUser.value)
  let perguntaSeguinte = ''
  
  if (stackUser.toLocaleLowerCase() == 'front end') {
    res.innerHTML = 'Voce quer aprender React ou Vue ?'
    let inputEscolha = document.createElement("input")
    let inpButton = document.createElement("input")
     
    inputEscolha.type = 'text'
    inputEscolha.id = 'inputEscolha'
    inputEscolha.placeholder='Escolha uma opção'

    inpButton.type = 'button'
    inpButton.value = 'Enviar'
    inpButton.id = 'btn-escolha'
    
    res.appendChild(inputEscolha)
    res.appendChild(inpButton)

  }
  if (stackUser.toLocaleLowerCase() == 'back end'){
    res.innerHTML='Voce quer aprender C# ou aprender Java ? '
     let inputEscolha = document.createElement("input")
     
    inputEscolha.type = 'text'
    inputEscolha.id = 'inputEscolha'
    inputEscolha.placeholder='Escolha uma opção'
    res.appendChild(inputEscolha)
  }
  if (stackUser.toLocaleLowerCase() =='full stack'){
    res.innerHTML='Parabens por escolher uma carreira Full Stack'
  }


}



