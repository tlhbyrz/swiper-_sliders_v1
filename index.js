var swiper1 = new Swiper(".demo-1", {});

var swiper2 = new Swiper(".demo-2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var swiper3 = new Swiper(".demo-3", {
    pagination: {
        el: ".swiper-pagination",
    },
});


var swiper4 = new Swiper(".demo-4", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});


var swiper5 = new Swiper(".demo-5", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var swiper6 = new Swiper(".demo-6", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper7 = new Swiper(".demo-7", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper8 = new Swiper(".demo-8", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper9 = new Swiper(".demo-9", {
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


var swiper10 = new Swiper(".demo-10", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiper11 = new Swiper(".demo-11", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.74,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


var swiper12 = new Swiper(".demo-12", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});