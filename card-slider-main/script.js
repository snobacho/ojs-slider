// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  slidesPerGroup: 4,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
      },
      520: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },
      950: {
        slidesPerView: 3,
        slidesPerGroup: 3,
    },
      1450: {
          slidesPerView: 4,
          slidesPerGroup: 4,
      },
  },
});





document.addEventListener('DOMContentLoaded', function () {
  var element = document.querySelectorAll('.name');
  var originalText = element.textContent.trim();
  var words = originalText.split(' ');

  if (words.length > 5) {
    var truncatedText = words.slice(0, 4).join(' ') + '...';
    element.textContent = truncatedText;
  }
});