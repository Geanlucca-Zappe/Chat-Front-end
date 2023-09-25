document.addEventListener("DOMContentLoaded", function() {
  const botaoEnviar = document.getElementById("enviar-mensagem");
  const caixaDeTexto = document.getElementById("entrada-do-usuario");
  const mensagensDoChat = document.getElementById("mensagens-do-chat");

  botaoEnviar.addEventListener("click", enviarMensagem);

  
  caixaDeTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // 
      enviarMensagem(); 
    }
  });

  function enviarMensagem() {
    const mensagem = caixaDeTexto.value;
    if (mensagem.trim() !== "") {
      
      const novaMensagem = document.createElement("div");
      novaMensagem.className = "mensagem mensagem-do-usuario";
      novaMensagem.innerHTML = `<p><strong>${mensagem}</strong></p>`;

      mensagensDoChat.appendChild(novaMensagem);

      caixaDeTexto.value = "";
    }
  }
});
