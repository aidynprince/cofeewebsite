
const navlinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.getElementById("menu-open-button");
const menuCloseButton =document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click",()=> {
    // toggle mobile menu vsibility
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());

//close menu button when nav link is clicked
navlinks.forEach(link => {
  link.addEventListener("click",() => menuOpenButton.click())
})
// swiper initialisation

 const swiper = new Swiper('.slider-wrapper', {
  loop:true,
  grabCursor:true,
  spaceBetween:25,
  

// If we need pagination
  pagination: {
     el: '.swiper-pagination',
     clickable:true,
     DynamicBullets:true,
   },

//   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
   
    1024:{
      slidesPerView:3
    }
  }

  
 });