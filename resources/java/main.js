$(document).ready(function() {
    $('#slideshow').slick({
      autoplay: true,
      autospeed: 10000,
      speed: 1000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });

    var lastScrollTop = 0;
    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop - lastScrollTop > 50){
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
        lastScrollTop = scrollTop;
      } else if (lastScrollTop - scrollTop > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        lastScrollTop = scrollTop;
      }
    });
  });