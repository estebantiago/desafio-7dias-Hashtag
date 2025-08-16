let areaEscolhida = ""
let tecnologiaEscolhida = ""

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

function escolhaTec(tecnologia) {
  tecnologiaEscolhida = tecnologia
  let res = document.getElementById('resTec')
  
    res.innerHTML = `Parabéns ! Você escolheu ${tecnologiaEscolhida}!`

  }





