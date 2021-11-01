const contagem_0 = document.getElementById('contagem_0')
const button_0 = document.getElementById('button_0')

const contagem_1 = document.getElementById('contagem_1')
const button_1 = document.getElementById('button_1')

const button_reset = document.getElementById('reset')

if(localStorage.votos_opcao_0 == undefined){
    localStorage.votos_opcao_0 = 0
    localStorage.votos_opcao_1 = 0
}

contagem_0.innerHTML = localStorage.votos_opcao_0
contagem_1.innerHTML = localStorage.votos_opcao_1

button_0.addEventListener('click', votar_0)
button_1.addEventListener('click', votar_1)
button_reset.addEventListener('click', reset)

function votar_0(){
    let texto = Number(contagem_0.innerHTML)
    texto = texto +1
    contagem_0.innerHTML = texto
    localStorage.votos_opcao_0 = texto
}

function votar_1(){
    let texto = Number(contagem_1.innerHTML)
    texto = texto +1
    contagem_1.innerHTML = texto
    localStorage.votos_opcao_1 = texto
}

function reset(){
    const confirmacao = confirm('Deseja eliminar todos os dados?')
    if(confirmacao == true){
        localStorage.removeItem('votos_opcao_0')
        localStorage.removeItem('votos_opcao_1')
        contagem_0.innerHTML = 0
        contagem_1.innerHTML = 0
    }
}