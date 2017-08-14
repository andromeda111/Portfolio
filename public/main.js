
$(window).scroll(function() {
	// Scroll greater than 200
	if ($(window).scrollTop() > 200 ){
		if (window.matchMedia('(max-width: 767px)').matches) {
			console.log('TAB ', $(window).width());
			$('.header-fixed').css({'background': 'rgba(255, 255, 255, 0.9)'});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('nav').removeClass("nav-center")
			$('.header-title-container').css({"opacity": "0", "color": "#FFF"})
		} else {
			console.log('FULL - screen width above 700');
			$('.header-fixed').css({'background': 'rgba(255, 255, 255, 0.9)'});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('nav').removeClass("nav-center").addClass('nav-to-right');
			$('.header-title-container').css({"opacity": "1", "color": "#000"})
		}

  } else {
		// Scroll less than 200
		if (window.matchMedia('(max-width: 767px)').matches) {
			console.log('TAB ', $(window).width());
			$('.header-fixed').css({'background': 'rgba(255, 255, 255, 0.0)'});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('nav').addClass('nav-center');
			$('.header-title-container').css({"opacity": "0", "color": "#000"})

		} else {
			console.log('screen width above 700');
			$('.header-fixed').css({'background': 'rgba(255, 255, 255, 0.0)'});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('nav').removeClass('nav-to-right').addClass('nav-center');
			$('.header-title-container').css({"opacity": "0", "color": "#FFF"})

		}

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
