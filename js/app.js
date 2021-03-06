$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $('div.navbar').addClass('black');
    }

    else {
      $('div.navbar').removeClass('black');

    }
  });
});

$(document).ready(function () {
  // navigation click actions	
  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  $('body').scrollspy({
    target: '.navbar-fixed-top'
  });
});
// scroll function
function scrollToID(id, speed) {
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({ scrollTop: targetOffset }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.addClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function () { }
  };
}

/*=========================*/
/*====flex main slider====*/
/*==========================*/
$('.slider-main,.testimonials').flexslider({
  slideshowSpeed: 5000,
  directionNav: false,
  animation: "fade"
});


/*=========================*/
/*========flex-gallery slide====*/
/*==========================*/
$(window).load(function () {
  $('.flexslider').flexslider({
    directionNav: false,
    slideshowSpeed: 3000,
    animation: "fade"
  });
});

/* ==============================================
WOW plugin triggers animation.css on scroll
=============================================== */

var wow = new WOW(
  {
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 150,          // distance to the element when triggering the animation (default is 0)
    mobile: false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();


$(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  if(value === "all")
  {
    $('.filter').show('1000');
  }
  else
  {
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');

  }
});
