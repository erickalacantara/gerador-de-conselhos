const btnGerarConselho = document.querySelector('#btn-gerar-conselho');
const conselhoTexto = document.querySelector('#conselho-texto');
const idconselho = document.querySelector('#idconselho');

function carregarConselho() {
  // Enviar solicitação à API
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      // Atualizar o texto do conselho
      conselhoTexto.textContent =  data.slip.advice;
      idconselho.textContent = 'ADVICE #' + data.slip.id;
    })
    .catch(error => console.error(error));
}

window.addEventListener('load', carregarConselho);
btnGerarConselho.addEventListener('click', carregarConselho);