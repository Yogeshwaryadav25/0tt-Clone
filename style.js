let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scroll > 0);
});

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onescroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}




var swiper = new Swiper(".home", {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });


   var swiper = new swiper(".coming-container",{
        spaceBetween: 20,
        loop:true,
        autoplay: {
            delay:55000,
            disableOnInteraction: false,
        },
        centeredslides: true,
        breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
     },
    });