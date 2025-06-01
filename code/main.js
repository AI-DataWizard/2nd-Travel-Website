$(document).ready(function () {
  let i = 0;
  $(".menu-btn").click(function () {
    i++;
    $(".header").toggleClass("active");
    if (i % 2 == 1) {
      $("#menu-btn").toggleClass("fa-xmark");
    } else {
      $("#menu-btn").toggleClass("fa-bars");
    }
  });

  $(window).on("scroll load", function () {
    $(".header").removeClass("active");
    $("#menu-btn").toggleClass("fa-bars");
    i = 0;
  });

  document
    .querySelectorAll(".about .video-con .controls .control-btn")
    .forEach((btn) => {
      btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about .video-con .video").src = src;
      };
    });

  $(".review-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*
  $("#login-btn").click(function () {
    $(".login-form").addClass("active");
  });

  $("#close-login-form").click(function () {
    $(".login-form").removeClass("active");
  });

  $(".menu-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  

  $(".review-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 3,
      },
    },
  });
  */
});
