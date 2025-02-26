/* 👇CRAINDO SCRIPT PARA O MENU RESPONSIVO */
// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o botão do menu e o menu
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Verifica se os elementos existem antes de adicionar evento
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados.");
    }
});
/* O que esse código faz?
Alterna a classe show no menu quando o botão de hambúrguer é pressionado Mostra ou oculta o menu em telas menores automaticamente */
// 👆CRAINDO SCRIPT PARA O MENU RESPONSIVO //