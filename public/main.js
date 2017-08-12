// $(document).ready(function() {
//   $(window).scroll(function() {
//       $(this).scrollTop() > 300 ? $(".navbar").addClass("smaller") : $(".navbar").removeClass("smaller")
//   })
// })

// $(document).ready(function() {
//   $(window).scroll(function() {
//       $(this).scrollTop() > 300 ? $(".navbar-bg").fadeIn(100) : $(".navbar-bg").fadeOut(100)
//   })
// })

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 200 ){
		if (window.matchMedia('(max-width: 767px)').matches) {
			console.log($(window).width());
			$('.header-bg').css({"opacity": "0.9"});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('nav').removeClass("nav-center").addClass('nav-tab');
			$('.header-title').css({"opacity": "1", "color": "#000"})
		} else {
			console.log('screen width above 700');
			$('.header-bg').css({"opacity": "0.9"});
			$('.nav-list-item').css({'color': '#000', 'text-shadow': 'none'});
			$('nav').removeClass("nav-center").addClass('nav-to-right');
			$('.header-title').css({"opacity": "1", "color": "#000"})
		}

  } else {

		if (window.matchMedia('(max-width: 767px)').matches) {
			$('.header-bg').css({"opacity": "0"});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('nav').removeClass("nav-tab").addClass('nav-center');
			$('.header-title').css({"opacity": "0", "color": "#FFF"})
		} else {
			$('.header-bg').css({"opacity": "0"});
			$('.nav-list-item').css({'color': '#FFF', 'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'});
			$('nav').removeClass('nav-to-right').addClass('nav-center');
			$('.header-title').css({"opacity": "0", "color": "#FFF"})
		}

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
