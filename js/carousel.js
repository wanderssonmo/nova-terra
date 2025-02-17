// Ativando o carrossel Swiper.js
var swiper = new Swiper('.swiper-container', {
    loop: true, // Faz com que o carrossel fique em loop infinito
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Muda a imagem a cada 3 segundos
        disableOnInteraction: false,
    },
});
