// Criando o botão "Voltar ao Topo"
let btnTopo = document.createElement("button");
btnTopo.innerText = "⬆ Topo";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.background = "#f39c12";
btnTopo.style.color = "white";
btnTopo.style.border = "none";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none"; // Inicialmente oculto
document.body.appendChild(btnTopo);

// Mostrar botão ao rolar a página
window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Rolagem suave para o topo
btnTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Capturando o formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Simulação de envio bem-sucedido
    document.getElementById("success-message").style.display = "block";

    // Limpar os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
