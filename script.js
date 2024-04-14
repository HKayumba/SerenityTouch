// Swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// menu
var navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0"
}
function hideMenu(){
   navLink.style.right = "-200px"
}



