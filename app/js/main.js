$(document).ready(function() {
  // Variables
  var $allNavLinks = $('.nav-list-item > a')
  var $navLink = $('.nav-list li a')
  var $navFixed = $('.nav-fixed')
  var $navListItem = $('.nav-list-item')
  var $navMain = $('.nav-main')
  var $navTitleContainer = $('.nav-title-container')
  var $navTitle = $('.nav-title')

  // Smooth Scroll
  $('nav, .arrow-button').find('a').click(function() {
    smoothScroll($(this))
    return
  })

// On Scroll event handlers
  $(window).scroll(function() {
    var y = $(this).scrollTop()

    // Highlight menu item on scroll
    $allNavLinks.each(function(event) {
      scrollApplyHighlight($(this), y)
      return
    })

    // HEADER / NAVBAR STYLING
    // When Scroll is greater than 200px
    if ($(window).scrollTop() > 200) {
      // Small Media < 768px
      if (window.matchMedia('(max-width: 767px)').matches) {

        $navFixed.css({
          'background': 'rgba(255, 255, 255, 0.8)'
        })
        $navListItem.css({
          'color': '#000',
          'text-shadow': 'none'
        })
        $navMain.removeClass("nav-center")
        $navTitleContainer.css({
          "opacity": "0",
          "color": "#FFF"
        })
      } else {
        // Larger media > 768px
        $navFixed.css({
          'background': 'rgba(255, 255, 255, 0.8)'
        })
        $navListItem.css({
          'color': '#000',
          'text-shadow': 'none'
        })
        $navMain.removeClass("nav-center").addClass('nav-to-right')
        $navTitleContainer.css({
          "opacity": "1",
          "color": "#000"
        })
        $navTitle.css({
          "display": "inherit"
        })
      }

    } else {
      // When Scroll is less than 200px
      // Small Media < 768px
      if (window.matchMedia('(max-width: 767px)').matches) {

        $navFixed.css({
          'background': 'rgba(255, 255, 255, 0.0)'
        })
        $navListItem.css({
          'color': '#FFF',
          'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'
        })
        $navMain.addClass('nav-center')
        $navTitleContainer.css({
          "opacity": "0",
          "color": "#000"
        })

      } else {
        // Larger media > 768px
        $navFixed.css({
          'background': 'rgba(255, 255, 255, 0.0)'
        })
        $navListItem.css({
          'color': '#FFF',
          'text-shadow': '1px 1px 1px rgba(0, 0, 0, 0.8)'
        })
        $navMain.removeClass('nav-to-right').addClass('nav-center')
        $navTitleContainer.css({
          "opacity": "0",
          "color": "#FFF"
        })
        $navTitle.fadeOut(300)
      }

    }
  });

  //////////////
  // Functions
  /////////////

  // Smooth Scroll
  function smoothScroll(thisObj) {
    var $el = thisObj
    var id = $el.attr('href')

    $('html, body').animate({
      scrollTop: $(id).offset().top - $('nav').outerHeight()
    }, 400)

    return
  }

  function scrollApplyHighlight (thisObj, y) {
    var $thisParent = thisObj.parent()

    // If Scroll has reached a page section (by #id), apply .active class to corresponding link element
    if (y >= $(thisObj.attr('href')).offset().top - 100) {
      $allNavLinks.not(thisObj).parent().removeClass('active')
      $thisParent.addClass('active')
    } else {
      $thisParent.removeClass('active')
    }

    return
  }

  // END DOCUMENT READY
});
