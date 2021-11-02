const contagem_0 = document.getElementById('contagem_0')
const button_0 = document.getElementById('button_0')

const contagem_1 = document.getElementById('contagem_1')
const button_1 = document.getElementById('button_1')

const contagem_nula = document.getElementById('contagem_nula')
const button_nulo = document.getElementById('button_nulo')

const button_reset = document.getElementById('reset')

if(localStorage.votos_opcao_0 == undefined){
    localStorage.votos_opcao_0 = 0
    localStorage.votos_opcao_1 = 0
    localStorage.votos_nulos = 0
}

contagem_0.innerHTML = localStorage.votos_opcao_0
contagem_1.innerHTML = localStorage.votos_opcao_1
contagem_nula.innerHTML = localStorage.votos_nulos

button_0.addEventListener('click', votar_0)
button_1.addEventListener('click', votar_1)
button_nulo.addEventListener('click', votar_nulo)
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
function votar_nulo(){
    let texto = Number(contagem_nula.innerHTML)
    texto = texto +1
    contagem_nula.innerHTML = texto
    localStorage.votos_nulos = texto
}

function reset(){
    const confirmacao = confirm('Deseja eliminar todos os dados?')
    if(confirmacao == true){
        localStorage.removeItem('votos_opcao_0')
        localStorage.removeItem('votos_opcao_1')
        localStorage.removeItem('votos_nulos')
        contagem_0.innerHTML = 0
        contagem_1.innerHTML = 0
        contagem_nula.innerHTML = 0
    }
}
document.addEventListener("keyup", function(event){
    if(event.key == 'a' || event.key == 'A'){
        votar_0()
    }else if(event.key == 'b' || event.key == 'B'){
        votar_1()
    }else if(event.key == 'n' || event.key == 'N'){
        votar_nulo()
    }
})