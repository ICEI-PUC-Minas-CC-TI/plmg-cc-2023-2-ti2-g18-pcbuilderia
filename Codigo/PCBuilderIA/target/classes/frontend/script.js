document.addEventListener("DOMContentLoaded", function () {
    var userLogado = localStorage.getItem("userLogado");
    var userProfile = document.getElementById("userProfile");
    var loginButton = document.getElementById("loginButton");
    var profileButton = document.getElementById("profileButton");
    var signinButton = document.getElementById("signinButton")
  
    if (userLogado) {
      // O usuário está logado, exibe o botão de perfil
      userProfile.style.display = "none";
      loginButton.style.display = "none";
      profileButton.style.display = "inline";
      signinButton.style.display = "none";
  
      // Redirecionar para a página do perfil ao clicar no botão
      profileButton.addEventListener("click", function () {
        window.location.href = "profile.html"; // Substitua pelo URL da página do perfil
      });
    } else {
      // O usuário não está logado, exibe o botão de login
      userProfile.style.display = "none";
      loginButton.style.display = "none";
      profileButton.style.display = "none";
      signinButton.style.display = "inline";

    }
  });
  var buttons = document.getElementsByClassName('read_button');
var cards = document.getElementsByClassName('content');

console.log(buttons);

function toggle(i){
    cards[i].classList.toggle('active');

    if (cards[i].classList.contains('active')) {
        buttons[i].innerText = 'Read less';
        cards[i].style.maxHeight = '100%';
        cards[i].style.overflow = 'visible';
    } else {
        buttons[i].innerText = 'Read more';
        cards[i].style.maxHeight = '100px';
        cards[i].style.overflow = 'hidden';
    }
} 
function montarHtml(json){
  let str = "";
  console.log(json)
  for (let index = 0; index < json.length; index++) {
    str += `<div class = "produto"><div class = "imagem"><img src="${json[index].url}"width = "150px" height = "150px"> </div> <div class="descstrong"> ${json[index].nome}</div><div class="text"> <strong class="descstrong">Descrição:</strong> ${json[index].descricaoDoProduto}<br><strong class="valor">Valor:</strong> R$${json[index].price}<br> </div> </div>`;
    
  }
  document.getElementById("resultado").innerHTML = str;
}

function filtrar() {
  var tipo = document.getElementById("tipo").value;
  var orcamento = document.getElementById("orcamento").value;
  var uso = document.getElementById("uso").value;

  let one = "";
  let two = "";
  let three = "";

  let str = "";

  fetch("http://localhost:8080/" + tipo)
  .then((response) => response.json())
  .then((json) => montarHtml(json))
   

  // for (let i = 0; i < pecas.length; i++) {
  //   let pecass = pecas[i];

  //   if (tipo === pecass.nome) {
  //     if (orcamento === pecass.preco2) {
  //       if (uso === pecass.tipo) {
  //         one = pecass.imagem;
  //         two = pecass.preco;
  //         three = pecass.descricao;

  //         str += `<div class = "produto"> <div class = "imagem">${one} </div> <div class="text"> <strong class="descstrong">Descrição:</strong> ${three}<br><strong class="valor">Valor:</strong> R$${two},00<br> </div> </div>`;
  //       }
  //     }
  //   }
  // }

  document.getElementById("resultado").innerHTML = str;
}
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')



function checkInputs(){
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

  if(usernameValue === '') {
    errorValidation(username, 'Preencha esse campo')
  }
  else{
    successValidation(username)
  }

  if(emailValue === ''){
    errorValidation(email, 'Preencha esse campo')
  }
  else{
    successValidation(email)
  }

  if(passwordValue === '') {
    errorValidation(password, 'Preencha esse campo')
  }
  else{
    successValidation(password)
  }

  if(passwordtwoValue === '') {
    errorValidation(passwordtwo, 'Preencha esse campo')
  }
  else if(passwordtwoValue !== passwordValue) {
    errorValidation(passwordtwo, 'As senhas devem ser iguais')
  }
  else{
    successValidation(passwordtwo)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message
  
  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

/* Banco de dados */

function leDados (){
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse (strDados);
  }
  else {
    objDados = { cadastros: [

      {nome: "Pedro Cattoni",     email: "pcattoni11@outlook.com", senha: "12042005" },
      {nome: "Gabriela Medeiros", email: "gab23pm@gmail",          senha: "21101998" },
      {nome: "Luisa Santos",      email: "lulusan@hotmail.com",    senha: "01052006" }
                             ]}
  }

  return objDados;
}

function salvaDados (dados) {
  localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirCadastro (){
  // Ler dados do localStorage
  let objDados = leDados();
  
  // Incluir um novo Cadastro
  let strNome = document.getElementById ('username').value;
  let strEmail = document.getElementById('email').value;
  let strSenha = document.getElementById('password').value;
  let novoCadastro = {
      nome: strNome,
      email: strEmail,
      senha: strSenha
  };
  objDados.cadastros.push (novoCadastro);

  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

    if(passwordtwoValue !== passwordValue || usernameValue === '' || emailValue === '' || passwordValue === '' ) {
        errorValidation(passwordtwo, ' ')
    }
    else{
    // Salvar os dados no localStorage Novamente
        salvaDados(objDados);
    
  // Atualiza os dados da tela
        imprimeDados();
    }
}

function imprimeDados () {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados ();

  for (i = 0; i < objDados.cadastros.length; i++) {
    strHtml += `<p>${objDados.cadastros[i].nome} - ${objDados.cadastros[i].email} - ${objDados.cadastros[i].senha}</p>`
  }

  tela.innerHTML = strHtml;
}

// Config Botões

let btn = document.querySelector('.fa-eye')



function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', userValid.nome)
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}
btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'signin.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const perfil = JSON.parse(localStorage.getItem('perfil'));

  if (perfil) {
    const usernameSpan = document.querySelector('#username');
    const userSpan = document.querySelector('#user');

    usernameSpan.textContent = perfil.nome;
    userSpan.textContent = perfil.user;
  }
});






  
  




