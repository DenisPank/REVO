new Swiper(".coffee__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2.1,
  slidesPerColumn: 2,
});

var swiper = new Swiper(".giftset__slider", {
  direction: "vertical",
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

new Swiper(".combo__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  slidesPerView: 3.2,
});
