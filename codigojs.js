

function validaCampos(){
    var dataInput = document.getElementById('dateInput').value
    var dataSeparada = dataInput.split('-')
    var dataSeparadaDoInput = new Date(dataSeparada[0], dataSeparada[1] - 1, dataSeparada[2])
    var dataAtual = new Date()
    var linguagens = document.getElementsByName('linguagem')
    var funcao = document.querySelector("[name='linguagem']:checked");
    var idade = document.getElementById('age').value 
    var msgTexto = document.getElementById('msgText').value
    var email = document.getElementById('email').value

    if(email == '' || email == null){
        alert("Email não pode ser vázio")
    }
    if(msgTexto == '' || msgTexto == null){
        ("Mensagem de texto inválida")
    }
    if(dataSeparadaDoInput > dataAtual){
        alert("Data Invalida")
    }

    if(!funcao){
        alert("Selecione pelo menos uma linguagem")
    }

    if(idade < 0 || idade > 150){
        alert("Idade Inválida")
    }
     
    
   
   



    
    
  
   

   
    
   
    
    
    

}