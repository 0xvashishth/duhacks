/*================
 Template Name: DigiMark Digital Marketing and Agency HTML Template
 Description: All type of Digital Marketing with marketing and agency template.
 Version: 1.0
 Author: https://themeforest.net/user/themetags
=======================*/

// TABLE OF CONTENTS
// 1. preloader
// 2. fixed navbar
// 3. back to top
// 4. magnify popup video
// 5. magnify gallery popup
// 6. hero background image with content slider
// 7. custom counter js with scrolling
// 8. client-testimonial one item carousel
// 9. hero content one item carousel
// 10. our clients logo carousel
// 11. mixitup portfolio
// 12. video background
// 13. work process carousel
// 14. gallery carousel
// 15. wow js

jQuery(function ($) {
  "use strict";

  // 1. preloader
  $(window).ready(function () {
    $("#preloader").delay(200).fadeOut("fade");
  });

  // 2. fixed navbar
  $(window).on("scroll", function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("affix");
      $(".scroll-to-target").addClass("open");
    } else {
      $(".navbar").removeClass("affix");
      $(".scroll-to-target").removeClass("open");
    }
    // checks if window is scrolled more than 500px, adds/removes top to target class
    if ($(this).scrollTop() > 500) {
      $(".scroll-to-target").addClass("open");
    } else {
      $(".scroll-to-target").removeClass("open");
    }
  });

  // 3. back to top
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500
      );
    });
  }

  // 4. magnify popup video
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // 5. magnify gallery popup
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
      },
    },
  });

  // 6. monthly and yearly pricing switch
  $("#js-contcheckbox").change(function () {
    if (this.checked) {
      $(".monthly-price").css("display", "none");
      $(".yearly-price").css("display", "block");
      $(".afterinput").addClass("text-success");
      $(".beforeinput").removeClass("text-success");
    } else {
      $(".monthly-price").css("display", "block");
      $(".yearly-price").css("display", "none");
      $(".afterinput").removeClass("text-success");
      $(".beforeinput").addClass("text-success");
    }
  });

  // 6. hero background image with content slider
  $(".hero-bg-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 3500,
    lazyLoad: true,
  });

  // 9. hero slider one
  $(".hero-slider-one").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown",
  });
  // 10. hero slider two
  $(".hero-content-slider").owlCarousel({
    loop: false,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown",
  });

  $(".custom-indicator-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown",
    dotsContainer: "#carousel-custom-indicator",
  });

  // 7. custom counter js with scrolling
  var isFirstTime = true;
  var interval = null;
  var countSelector = $(".single-counter > h3, .single-card > h3");
  if (countSelector.length) {
    var startingTop = countSelector.offset().top - window.innerHeight;
    if (startingTop > 0) {
      $(window).on("scroll", function () {
        if (isFirstTime && $(window).scrollTop() > startingTop) {
          startCounting();
          isFirstTime = false;
        }
      });
    } else {
      startCounting();
    }
  }

  /**
   * Get the increment value
   * @param value
   * @returns {number}
   */
  function incrementValue(value) {
    var incVal = 0;
    if (Math.ceil(value / 2) <= 5) {
      // upto 10
      incVal = 1;
    } else if (Math.ceil(value / 10) <= 10) {
      // up to 100
      incVal = 10;
    } else if (Math.ceil(value / 100) <= 10) {
      // up to 1000
      incVal = 25;
    } else if (Math.ceil(value / 100) <= 100) {
      // up to 10000
      incVal = 50;
    } else if (Math.ceil(value / 1000) <= 100) {
      // up to 100000
      incVal = 150;
    } else {
      incVal = 500;
    }
    return incVal;
  }

  /**
   * To start count
   * @param counters all selectors
   * @param start int
   * @param value int
   * @param id int
   */
  function count(counters, start, value, id) {
    var localStart = start;
    var inc = incrementValue(value);
    interval = setInterval(function () {
      if (localStart < value) {
        localStart = localStart + inc;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  /**
   * Start the count
   */
  function startCounting() {
    var counters = $(".single-counter > h3, .single-card > h3");
    var countersQuantity = counters.length;
    var counter = [];

    // get al counts from HTML count
    for (var i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    // calling all count function
    for (var j = 0; j < countersQuantity; j++) {
      count(counters, 0, counter[j], j);
    }
  }

  // 8. client-testimonial one item carousel
  $(".client-testimonial-1").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  $(".client-testimonial").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // 9. hero content one item carousel
  $(".hero-content-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  // 10. our clients logo carousel
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // 11. mixitup portfolio
  $(function () {
    // 1. querySelector
    var containerEl = document.querySelector("#MixItUp");
    // 2. Passing the configuration object inline
    //https://www.kunkalabs.com/mixitup/docs/configuration-object/
    if (typeof containerEl != "undefined" && containerEl != null) {
      var mixer = mixitup(containerEl, {
        selectors: {
          control: "[data-mixitup-control]",
        },
        animation: {
          effects: "fade translateZ(-100px)",
        },
      });
    }
  });

  // 12. video background
  // $(document).ready(function () {
  //   $(".player").YTPlayer();
  // });

  // 13. work process carousel
  $(".work-process-carousel").each(function () {
    var a = $(this),
      items = a.data("items") || [1, 1, 1],
      margin = a.data("margin"),
      loop = a.data("loop"),
      nav = a.data("nav"),
      dots = a.data("dots"),
      center = a.data("center"),
      autoplay = a.data("autoplay"),
      autoplaySpeed = a.data("autoplay-speed"),
      rtl = a.data("rtl"),
      autoheight = a.data("autoheight");

    var options = {
      nav: nav || true,
      loop: loop || false,
      dots: dots || false,
      center: center || false,
      autoplay: autoplay || false,
      autoHeight: autoheight || false,
      rtl: rtl || false,
      margin: margin || 0,
      autoplayTimeout: autoplaySpeed || 3000,
      autoplaySpeed: 400,
      autoplayHoverPause: true,
      responsive: {
        0: { items: items[2] || 1 },
        576: { items: items[1] || 1 },
        1200: { items: items[0] || 1 },
      },
    };

    a.owlCarousel(options);
  });

  // 14. gallery carousel
  $(".gallery").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    nav: false,
    autoplayTimeout: 4500,
    autoplaySpeed: 400,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // 15. wow js
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true,
    }).init();
  }

  wowAnimation();

  //countdown one

  $("#clock").countdown("2022/01/30", function (event) {
    $(this).html(
      event.strftime(
        "" +
          '<div class="row">' +
          '<div class="col">' +
          '<h2 class="mb-1">%-D</h2>' +
          "<h5>Day%!d</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%H</h2>' +
          "<h5>Hours</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%M</h2>' +
          "<h5>Minutes</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%S</h2>' +
          "<h5>Seconds</h5>" +
          "</div>" +
          "</div>"
      )
    );
  });

  $(function () {
    $(".chart").easyPieChart({
      // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
      barColor: "#e80566",
      // The color of the track for the bar, false to disable rendering.
      trackColor: "#ffffff",
      // The color of the scale lines, false to disable rendering.
      scaleColor: "transparent",
      // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
      lineCap: "round",
      // Width of the bar line in px.
      lineWidth: 15,
      // Size of the pie chart in px. It will always be a square.
      size: 180,
      // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
      animate: 2000,
      // Callback function that is called at the start of any animation (only if animate is not false).
      onStart: $.noop,
      // Callback function that is called at the end of any animation (only if animate is not false).
      onStop: $.noop,
    });
  });
}); // JQuery end
