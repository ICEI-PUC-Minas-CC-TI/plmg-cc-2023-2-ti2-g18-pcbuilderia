

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