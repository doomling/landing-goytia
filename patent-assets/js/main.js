$(document).ready(function() {
  "use strict";

  // Preloader

  $(window).load(function() {
    // makes sure the whole site is loaded
    $(".page-preloader spinner").fadeOut(); // will first fade out the loading animation
    $(".page-preloader")
      .delay(350)
      .fadeOut("slow");
    // will fade out the white DIV that covers the website.
    $("body")
      .delay(350)
      .css({
        overflow: "visible"
      });
  });

  // Animated typing text

  $(".animated-text").typed({
    strings: [
      "Patents filings",
      "Paris Convention filings",
      "PCT national phase entries"
    ],
    typeSpeed: 50,
    loop: true
  });
});
