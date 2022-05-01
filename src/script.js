let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

};

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  gradCursor: true,
  loop:true,
  centeredSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  
  gradCursor: true,
  loop:true,
  // centeredSlide: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    600:{
      slidesPerView: 2,
    }
      
  }
    

});
  

