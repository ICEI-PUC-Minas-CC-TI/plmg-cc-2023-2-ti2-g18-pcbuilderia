

function cadastrarUsuario() {
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var nome = document.getElementById('nome').value
    var cpf = document.getElementById('cpf').value

    console.log(login + senha + nome + cpf)


    fetch("http://localhost:8080/cadastro", 
    {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
        body: JSON.stringify({
            nome:nome,
            login:login,
            password:senha,
            cpf:cpf

        })
    })
    .then(function (res) { 
        console.log(res) 
    })
    .catch(function (res) {  
        console.log(res) 
    })

}

function verificarLogin() {
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    console.log(login + senha)


    fetch("http://localhost:8080/login", 
    {
        headers:{
            "Content-type":"application/json"
        },
        method:"GET",
        body: JSON.stringify({
            login:login,
            password:senha,

        })
    })
    .then(function (res) { 
        console.log(res) 
    })
    .catch(function (res) {  
        console.log(res) 
    })

}