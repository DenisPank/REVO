new Swiper(".coffee__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 50,
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
      slidesPerView: 2.25,
    },

    768: {
      slidesPerColumn: 2,
      slidesPerView: 1,
      centeredSlides: true,
    },

    319: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
  },
});

new Swiper(".giftset__slider", {
  direction: "vertical",
  simulateTouch: false,
  touchRatio: 0,
  // spaceBetween: 60,
  effect: "fade",
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
  // loop: true,
  breakpoints: {
    3000: {
      slidesPerView: 5,
    },

    1366: {
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

$(document).ready(function () {
  $(".header__link").click(function (event) {
    $(".header__menu,.header__hamburger").removeClass("active");
    $("body").removeClass("lock");
  });
});

$(".scrollto").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 600, // по умолчанию «400»
      easing: "linear", // по умолчанию «swing»
    }
  );

  return false;
});
