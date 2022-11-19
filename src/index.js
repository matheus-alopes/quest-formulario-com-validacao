const nomeDoUsuario = document.getElementById("user-name");
const emailDoUsuario = document.getElementById("user-email");
const telefoneDoUsuario = document.getElementById("user-number");
const mensagemDoUsuario = document.getElementById("user-message");
const botaoEnviar = document.getElementById("botao-enviar");
const mensagensCampoObrigatorio = document.getElementsByClassName("mensagem-campo-obrigatorio");


function checarPreenchimento(input, array, index) {
    if(input.value == "") {
        input.style.border = "1px solid #ff0000";
        array[index].style.display = "inline";
    } else {
        input.style.border = "1px solid #008000";
        array[index].style.display = "none";
    }
}

botaoEnviar.addEventListener("click",
    () => {
        checarPreenchimento(nomeDoUsuario, mensagensCampoObrigatorio, 0);
        checarPreenchimento(emailDoUsuario, mensagensCampoObrigatorio, 1);
        checarPreenchimento(telefoneDoUsuario, mensagensCampoObrigatorio, 2);
        checarPreenchimento(mensagemDoUsuario, mensagensCampoObrigatorio, 3);
    }
)



