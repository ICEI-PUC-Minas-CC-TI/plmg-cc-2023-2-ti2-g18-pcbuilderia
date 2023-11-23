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

/*
`
    <div class = "produto">
      <div class = "imagem"><img src="${json[index].url}"width = "150px" height = "150px"> </div>
        <div class="descstrong"> 
          ${json[index].nome}
        </div>
        <div class="text"> 
          <strong class="descstrong">
            Descrição:
          </strong> 
            ${json[index].descricaoDoProduto}<br>
          <strong class="valor">Valor:</strong> R$${json[index].price}<br> 
        </div>
    </div>`
*/ 

/*
` 
            <li class="produto">
                <span class="number">${pokemon.number}</span>
                <div class="descstrong"> 
                  ${json[index].nome}
                </div>
            
                <div class="text"> 
          <strong class="descstrong">
            Descrição:
          </strong> 
            ${json[index].descricaoDoProduto}<br>
          <strong class="valor">Valor:</strong> R$${json[index].price}<br> 
        </div>
                
                    <div class = "imagem"><img src="${json[index].url}"width = "150px" height = "150px"> </div>
                </div>
            </li>`

*/
function montarHtml(json){
  let str = "";
  console.log(json)
  for (let index = 0; index < json.length; index++) {
    str += ` 
    <li class="produto">
    <div class = "imagem"><img src="${json[index].url}"width = "150px" height = "150px"> </div>
        <div class="descstrong"> 
          ${json[index].nome}
        </div>
    
        <div class="text"> 
  <strong class="descstrong">
    Descrição:
  </strong> 
    ${json[index].descricaoDoProduto}<br>
  <strong class="valor">Valor:</strong> R$${json[index].price}<br> 
</div>
        
        </div>
    </li>`;
    
  }
  document.getElementById("hardwareList").innerHTML = str;
}

function filtrarPorTipo() {
  var tipo = document.getElementById("tipo").value;

  let str = "";

  fetch("http://localhost:8080/" + tipo)
  .then((response) => response.json())
  .then((json) => montarHtml(json))


}


function filtrarPorPreco() {
  var tipo = document.getElementById("tipo").value;
  var price = document.getElementById('valorOrcamento').value;

  let str = "";

  fetch("http://localhost:8080/" + tipo + "/" + price)
  .then((response) => response.json())
  .then((json) => montarHtml(json))
  .catch((err) => alert(msgError))
}
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')



// Config Botões

let btn = document.querySelector('.fa-eye')









  
  




