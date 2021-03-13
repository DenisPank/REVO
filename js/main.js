new Swiper(".coffee__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2.1,
  slidesPerColumn: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    3000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 2.1,
    },

    768: {
      slidesPerColumn: 2,
      slidesPerView: 1,
    },

    319: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
  },
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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  slidesPerView: 3.2,
  loop: true,
  breakpoints: {
    3000: {
      slidesPerView: 5,
    },

    1400: {
      slidesPerView: 3.2,
    },

    768: {
      slidesPerView: 2,
    },

    319: {
      slidesPerView: 1,
    },
  },
});

$(document).ready(function () {
  $(".header__hamburger").click(function (event) {
    $(".header__hamburger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
