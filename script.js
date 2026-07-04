const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const header = document.querySelector("header");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navlinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
});

// header scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// aos - animate on scroll
const aosElements = document.querySelectorAll("[data-aos]");

const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-aos-delay") || 0;
            setTimeout(() => {
                entry.target.classList.add("aos-animate");
            }, parseInt(delay));
            aosObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

aosElements.forEach(el => {
    el.classList.add("aos-init");
    aosObserver.observe(el);
});

// swiper initialisation
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },

   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});