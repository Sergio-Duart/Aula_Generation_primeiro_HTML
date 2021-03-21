let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtnome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}    

function validaEmail(){
    let txt = document.querySelector('#txtemail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'E-mail Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector('#txtassunto')
    if (assunto.value.length >= 100) {
        txt.innerHTML = 'Calma ai..   não precisa colocar textão não..  senão nem irei ler..  (max 100 Caracteres)'
    } else {
        txt.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('enviado com sucesso')
        txt.style.color = 'green'
    } else {
        alert('Preencha os dados acima corretamente, por favor, lógico')
        txt.style.color = 'red'
    }
}

function mapaZoom () {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '400px'
}