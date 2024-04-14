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

// Preloader animation
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none"
})

// Page animation
window.addEventListener('scroll', reveal);

function reveal (){
  var reveal = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.lenght; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

