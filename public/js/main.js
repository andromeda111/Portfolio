// Smooth Scroll
$('nav, .arrow-button').find('a').on('click', function() {
  var $el = $(this),
    id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - $('nav').outerHeight()
  }, 400);

  return false;
})

// Highlight menu item on scroll
$(document).ready(function() {

  $('.nav-list li a').click(function() {

    $('.nav-list li a').parent().removeClass('active');
    $(this).parent().addClass('active');

  })

  $(window).scroll(function() {

    var y = $(this).scrollTop();

    $('.nav-list-item > a').each(function(event) {
      if (y >= $($(this).attr('href')).offset().top - 100) {
        $('.nav-list-item > a').not(this).parent().removeClass('active');
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });

  });
});


$(window).scroll(function() {

  // HEADER / NAVBAR STYLING
  // Scroll greater than 200
  if ($(window).scrollTop() > 200) {
    if (window.matchMedia('(max-width: 767px)').matches) {

      $('.nav-fixed').css({
        'background': 'rgba(255, 255, 255, 0.8)'
      });
      $('.nav-list-item').css({
        'color': '#000',
        'text-shadow': 'none'
      });
      $('.nav-main').removeClass("nav-center")
      $('.nav-title-container').css({
        "opacity": "0",
        "color": "#FFF"
      })
    } else {

      $('.nav-fixed').css({
        'background': 'rgba(255, 255, 255, 0.8)'
      });
      $('.nav-list-item').css({
        'color': '#000',
        'text-shadow': 'none'
      });
      $('.nav-main').removeClass("nav-center").addClass('nav-to-right');
      $('.nav-title-container').css({
        "opacity": "1",
        "color": "#000"
      })
      $('.nav-title').css({
        "display": "inherit"
      })
    }

  } else {
    // Scroll less than 200
    if (window.matchMedia('(max-width: 767px)').matches) {

      $('.nav-fixed').css({
        'background': 'rgba(255, 255, 255, 0.0)'
      });
      $('.nav-list-item').css({
        'color': '#FFF',
        'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'
      });
      $('.nav-main').addClass('nav-center');
      $('.nav-title-container').css({
        "opacity": "0",
        "color": "#000"
      })

    } else {

      $('.nav-fixed').css({
        'background': 'rgba(255, 255, 255, 0.0)'
      });
      $('.nav-list-item').css({
        'color': '#FFF',
        'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'
      });
      $('.nav-main').removeClass('nav-to-right').addClass('nav-center');
      $('.nav-title-container').css({
        "opacity": "0",
        "color": "#FFF"
      })
      $('.nav-title').fadeOut(300)
    }

  };
});
