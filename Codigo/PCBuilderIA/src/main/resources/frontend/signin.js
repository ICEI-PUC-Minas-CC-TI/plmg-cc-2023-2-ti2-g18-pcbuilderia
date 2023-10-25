let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let msgSucess = document.querySelector('#msgSucess')

  loginInput = {
    login: usuario.value,
    password: senha.value
  }


  fetch("http://localhost:8080/usuario/login",
    {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
        body: JSON.stringify(loginInput)
    })
    .then (res => { console.log(res); return res.json()})
    .then((result) => {
      msgError.remove()
      console.log("result:", JSON.stringify(result));
      console.log(result.login)
      
      msgSucess.setAttribute('style', 'display: block')
      msgSucess.innerHTML = '<strong> Bem vindo: ' + result.nome +' </strong>'
      sessionStorage.setItem('userLogado', JSON.stringify(result))
      
      setTimeout(()=>{
        window.location.href = 'profile.html'
    }, 3000)

    }).catch( (error) => {
      console.log(error)
      userLabel.setAttribute('style', 'color: red')
          usuario.setAttribute('style', 'border-color: red')
          senhaLabel.setAttribute('style', 'color: red')
          senha.setAttribute('style', 'border-color: red')
          msgError.setAttribute('style', 'display: block')
          msgError.innerHTML = 'Usuário ou senha incorretos'
          usuario.focus()
          console.log("error1")
    })
    

    // .then(function (response) { 
    //     console.log(response) 

    //     if(response.status === 200) {
    //       console.log("logado")
    //       let res = response.json()
          

    //       // window.location.href = 'index.html'
    //       msgSucess.setAttribute('style', 'display: block')
    //       msgSucess.innerHTML = '<strong>' + response.text +' </strong>'
    //     }else if(response.status === 402){
    //       userLabel.setAttribute('style', 'color: red')
    //       usuario.setAttribute('style', 'border-color: red')
    //       senhaLabel.setAttribute('style', 'color: red')
    //       senha.setAttribute('style', 'border-color: red')
    //       msgError.setAttribute('style', 'display: block')
    //       msgError.innerHTML = 'Usuário ou senha incorretos'
    //       usuario.focus()
    //       console.log("error1")
    //     }

    // })
    .catch(function (response) {  
      console.log(response) 
      if(response.status == 200) {



        window.location.href = 'index.html'
        console.log("logado")
      }else if(response.status === 402){
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
        
        console.log("error2")
      }
    })


  // if(usuario.value == userValid.user && senha.value == userValid.senha){
  //   window.location.href = 'index.html'
    
  //   let mathRandom = Math.random().toString(16).substr(2)
  //   let token = mathRandom + mathRandom
    
  //   localStorage.setItem('token', token)
  //   localStorage.setItem('userLogado', userValid.nome)
  // } else {
  //   userLabel.setAttribute('style', 'color: red')
  //   usuario.setAttribute('style', 'border-color: red')
  //   senhaLabel.setAttribute('style', 'color: red')
  //   senha.setAttribute('style', 'border-color: red')
  //   msgError.setAttribute('style', 'display: block')
  //   msgError.innerHTML = 'Usuário ou senha incorretos'
  //   usuario.focus()
  // }
  
}



