const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
    
})

//ao clicar fora se tiver preenchido, sai o foco(blur), sai o vermelho
username.addEventListener("blur", () => {
    checkInputUsername();
})
email.addEventListener("blur", () => {
    checkInputEmail();
})
password.addEventListener("blur", () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

//função chegar input do username
function checkInputUsername() {
    //pega o valor digitado la em cima e atribui na var usernamevalue
    const usernameValue = username.value;
//checa se está vazio
    if(usernameValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(username, "Informe o nome do usuário.")
    } else { //se preenchido, elemento pai do div joga no formItem
        const formItem = username.parentElement;
        //joga form-content no formItem
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(email, "O e-mail é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        //mostrar o aviso e mostrar o erro
        errorInput(password, "A senha é obrigatória.")
    } else if(passwordValue.length < 6) {
        errorInput(password, "A senha deve ter pelo menos 6 caracteres.")
    } 
    else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

   if(confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória")
   } 
   else if(confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.")
   } 
   else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
   }
}

//função de checagem geral do form, chama todas as funções...
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation()

    //pega todos os campos do form e atribui ao formItem
    const formItem = form.querySelectorAll(".form-content")

    //validado faz um array com every campos item return na classe tudo se for form-content
    const isValid = [...formItem].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid) {
        alert("Cadastrado com sucesso")
    }
}


//função de erro no input e mensagem de erro
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

