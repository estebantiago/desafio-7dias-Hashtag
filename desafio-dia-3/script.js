let areaEscolhida = ""
let tecEscolhida = ""

function escolherArea(area) {
  let resEsc = document.querySelector('div#resEsc')
  areaEscolhida = area
  resEsc.innerHTML = `Parabéns você escolheu <strong>${area}</strong>!`


  let botoesTec = document.querySelectorAll('#escTec input[type="button"]')
  botoesTec.forEach(botao => {
    botao.disabled = true // desabilita todos botão primeiro

  })
  if (area === 'Front End') {
    botoesTec[0].disabled = false
    botoesTec[1].disabled = false
  } else if (area === 'Back End') {
    botoesTec[2].disabled = false
    botoesTec[3].disabled = false
  } else if (area === 'Full Stack') {
    botoesTec.forEach(botao => botao.disabled = false)
  }

}

function escolhaTec(tec) {
  tecEscolhida = tec
  let res = document.getElementById('resTec')

  res.innerHTML = `Parabéns! Você escolheu ${tecEscolhida}!`

  escTecFinal()

}

function escTecFinal() {
  let resFinal = document.getElementById('resFinal')
  
  let tecAdicionais = []
  

  while (true) {
    let querMais = confirm('Tem mais alguma tecnologia que voce gostaria de aprender ?')

    if (!querMais) {
      resFinal.innerHTML += 'Muito bem! Ótimas escolhas, continue estudando que você chegará lá.'
      break

    }
    
    let novaTec = prompt('Digite qual tecnologia você deseja aprender mais ')
    if (novaTec && novaTec.trim() !== "") {
      tecAdicionais.push(novaTec.trim())
      resFinal.innerHTML += `<p>Legal! <strong>${novaTec}</strong> é uma ótima tecnologia para explorar.</p>`
    } else {
      // Se o usuário não digitou nada ou cancelou o prompt, apenas informamos e saímos do loop
      resFinal.innerHTML += '<p>Nenhuma nova tecnologia foi adicionada. Bons estudos!</p>'
      break;
    } 

  }
   

}









