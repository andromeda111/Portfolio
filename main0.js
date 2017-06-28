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

 		$('.bg').addClass('show');
		$('li').addClass('li-show');
		$('ul').removeClass().addClass('toright');

  } else {

    $('.bg').removeClass('show');
		$('li').removeClass('li-show');
		$('ul').removeClass().addClass('tocenter');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
