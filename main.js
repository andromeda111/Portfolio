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
		if (window.matchMedia('(max-width: 479px)').matches) {
			console.log($(window).width());
			$('.bg').addClass('show');
			$('li').addClass('li-show');
			$('.list').removeClass("to-center").addClass('to-tab');
			$('.nav-title').css({"opacity": "1", "color": "#000"})
		} else {
			console.log('screen width above 700');
	 		$('.bg').addClass('show');
			$('li').addClass('li-show');
			$('.list').removeClass("to-center").addClass('to-right');
			$('.nav-title').css({"opacity": "1", "color": "#000"})
		}

  } else {

		if (window.matchMedia('(max-width: 479px)').matches) {
			$('.bg').removeClass('show');
			$('li').removeClass('li-show');
			$('.list').removeClass("to-tab").addClass('to-center');
			$('.nav-title').css({"opacity": "0", "color": "#FFF"})
		} else {
			$('.bg').removeClass('show');
			$('li').removeClass('li-show');
			$('.list').removeClass('to-right').addClass('to-center');
			$('.nav-title').css({"opacity": "0", "color": "#FFF"})
		}

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
