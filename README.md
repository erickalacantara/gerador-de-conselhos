# Bem-vindo! 👋
Basicamente esse script busca conselhos aleatórios da API e atualiza a página HTML com o conselho recebido.

1 - Seleciona o botão com o ID "btn-gerar-conselho", o elemento de texto com o ID "conselho-texto" e o elemento de texto com o ID "idconselho" na página HTML.

2- Define uma função chamada "carregarConselho()" que é responsável por enviar uma solicitação à API "https://api.adviceslip.com/advice" usando o método "fetch".

3 - Quando a resposta da API é recebida, a função converte a resposta em um objeto JSON usando o método "response.json()", e atualiza o texto do elemento "conselhoTexto" com o conselho retornado pela API e o texto do elemento "idconselho" com o ID do conselho retornado.

4 - Adiciona um "listener" de evento que chama a função "carregarConselho()" quando a página é carregada ou quando o botão "btnGerarConselho" é clicado.

este script busca conselhos aleatórios da API e atualiza a página HTML com o conselho recebido.


Me perdi no HTML, por incrível que pareça não consegui deixar o botão sobressaído como no designer 
