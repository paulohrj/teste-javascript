function validaCampos(){
    var dataInput = document.getElementById('dateInput').value
    var dateEach = dataInput.split('-')
    var dateEachInput = new Date(dateEach[0], dateEach[1] - 1, dateEach[2])
    var dateActual = new Date()
    var func = document.querySelector("[name='language']:checked");
    var auxAge = document.getElementById('age').value 
    var msgText = document.getElementById('msgText').value
    var email = document.getElementById('email').value

    if(email == '' || email == null){
        validate("Email não pode ser vázio")
    }
    if(msgText == '' || msgText == null){
        validate("Mensagem de texto inválida")
    }
    if(dateEachInput > dateActual){
        validate("Data Invalida")
    }

    if(!func){
        validate("Selecione pelo menos uma linguagem")
    }

    if(auxAge < 0 || auxAge > 150){
        validate("Idade Inválida")
    }
     
}

function validate(message){
    alert(message)
}
