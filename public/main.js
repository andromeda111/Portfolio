// smooth scroll
$('nav').find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

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

  $(window).scroll(function () {

          var y = $(this).scrollTop();

          $('.nav-list-item > a').each(function (event) {
              if (y >= $($(this).attr('href')).offset().top - 100) {
                  $('.nav-list-item > a').not(this).parent().removeClass('active');
                  $(this).parent().addClass('active');
              } else {
                $(this).parent().removeClass('active');
              }
          });

      });
//   $(window).scroll(function() {
//
//     $('section, nav').each(function() {
//
//       var elementID = $(this).attr('id');
//       var height = $(this).outerHeight();
//       var grttop = $(this).offset().top - 100;
//
//       if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height) {
//         $(".nav-list li a[href='#" + elementID + "']").parent().addClass('active');
//       } else {
//         $(".nav-list li a[href='#" + elementID + "']").parent().removeClass('active');
//       }
// // Potentially remove this if the bottom scroll contact highlight works later on
// // add active class to contact if at bottom of page
//
// 			if($(window).scrollTop() + $(window).height() == $(document).height()) {
// 					console.log('bottom');
// 				$(".nav-list li a[href='#contact']").parent().addClass('active');
// 			}
//     });
//   });
});


$(window).scroll(function() {

	// HEADER / NAVBAR STYLING
	// Scroll greater than 200
	if ($(window).scrollTop() > 200 ){
		if (window.matchMedia('(max-width: 767px)').matches) {
			console.log('TAB ', $(window).width());
			$('.nav-fixed').css({'background': 'rgba(255, 255, 255, 0.8)'});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('.nav-main').removeClass("nav-center")
			$('.nav-title-container').css({"opacity": "0", "color": "#FFF"})
		} else {
			console.log('FULL - screen width above 700');
			$('.nav-fixed').css({'background': 'rgba(255, 255, 255, 0.8)'});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('.nav-main').removeClass("nav-center").addClass('nav-to-right');
			$('.nav-title-container').css({"opacity": "1", "color": "#000"})
      $('.nav-title').css({"display": "inherit"})
		}

  } else {
		// Scroll less than 200
		if (window.matchMedia('(max-width: 767px)').matches) {
			console.log('TAB ', $(window).width());
			$('.nav-fixed').css({'background': 'rgba(255, 255, 255, 0.0)'});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('.nav-main').addClass('nav-center');
			$('.nav-title-container').css({"opacity": "0", "color": "#000"})

		} else {
			console.log('screen width above 700');
			$('.nav-fixed').css({'background': 'rgba(255, 255, 255, 0.0)'});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('.nav-main').removeClass('nav-to-right').addClass('nav-center');
			$('.nav-title-container').css({"opacity": "0", "color": "#FFF"})
      $('.nav-title').fadeOut(300)

		}

 	};


});
