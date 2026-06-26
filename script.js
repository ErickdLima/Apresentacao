//abrir caixas de texto no portfolio e formaçãp

const paineis = document.querySelectorAll('.painel');
const botoes = document.querySelectorAll('.menu button');
const container = document.querySelector('.container');

function mostrar(id, botao){

    const painelAtual = document.getElementById(id);

    if (painelAtual.style.display === "block"){
        painelAtual.style.display = "none";

        botao.classList.remove("ativo");
        container.classList.remove("com-painel");

        return;
    }

    paineis.forEach(painel => {
        painel.style.display = "none";
    });

    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

    painelAtual.style.display = "block";
    botao.classList.add("ativo");

    container.classList.add("com-painel");
}





// interção e validação do formulario em contatos
const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

// Executa quando o formulário é enviado
form.addEventListener("submit", function(event){

    event.preventDefault();

    // Obtém os valores digitados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se algum campo ficou vazio
    if(nome === "" || email === "" || mensagem === ""){
        resposta.style.color = "red";
        resposta.textContent = "Preencha todos os campos.";
        return;
    }

    //validar o formato do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail é válido
    if(!regexEmail.test(email)){
        resposta.style.color = "red";
        resposta.textContent = "Digite um e-mail válido.";
        return;
    }

    // Simula o envio da mensagem
    resposta.style.color = "green";
    resposta.textContent = "Mensagem enviada com sucesso!";

    // Limpa o formulário
    form.reset();
});