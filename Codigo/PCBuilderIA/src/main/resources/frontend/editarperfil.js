let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let login = document.querySelector('#login')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})



login.addEventListener('keyup', () => {
  if(login.value.length <= 4){
    labelLogin.setAttribute('style', 'color: red')
    labelLogin.innerHTML = 'Email *Insira no minimo 5 caracteres'
    login.setAttribute('style', 'border-color: red')
    validLogin = false
  } else {
    labelLogin.setAttribute('style', 'color: green')
    labelLogin.innerHTML = 'Usuário'
    login.setAttribute('style', 'border-color: green')
    validLogin = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function editarPerfil(){
  if(validNome && validLogin && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    const loginInput = {
      login:  login.value,
      password: senha.value,
      nome: nome.value,
      cpf: cpf.value
    }
    
    fetch("http://localhost:8080/usuario/editarperfil", 
    {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
        body: JSON.stringify(loginInput)
    })
    .then(function (response) { 
        console.log(response) 

        if(response.status === 200) {
          msgSuccess.setAttribute('style', 'display: block')
          msgSuccess.innerHTML = '<strong>Seu perfil foi criado com sucesso!</strong>'
          setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 3000)
        }else if(response.status === 404){
          msgError.setAttribute('style', 'display: block')
          msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        }

    })
    .catch(function (response) {  
      console.log(response) 
      if(response.status == 200) {
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Seu perfil foi criado com sucesso!</strong>'
        setTimeout(()=>{
          window.location.href = 'signin.html'
      }, 3000)
      }else if(response.status === 404){
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
      }
    })

  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
document.addEventListener('DOMContentLoaded', function() {
  const perfil = JSON.parse(localStorage.getItem('perfil'));

  if (perfil) {
    const usernameSpan = document.querySelector('#username');
    const userSpan = document.querySelector('#user');

    usernameSpan.textContent = perfil.nome;
    userSpan.textContent = perfil.user;
  }
});


  
  
