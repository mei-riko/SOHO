import $ from 'jquery'

import '../items/input/input';

$(function() {
  // Animate Scroll
  $(document).on('click', '[data-trigger="scroll"]', function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // Link Disable
  $(document).on('click', '[data-trigger="click"]', function(e){
    e.preventDefault();
  })

  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });

  // Toggle
  const toggle = (elem) => { 
    let classElem = elem.attr("class");
    // первым классом должен идти title
    let classArr = classElem.split(' ');
    // запишем имя для активного класс
    let classActive = classArr[0] + '--active';
    // удалим title и узнаем имя родителя
    let parent = classArr[0].split('__')[0];

    elem.toggleClass( classActive );
    elem.parent().find('.' + parent + '__content' ).slideToggle();
  };

  $('[data-toggle="true"]').on("click", function(){
    toggle( $(this) );
  });

	// Navbar
  $(".header .header__nav#open-nav").on("click", function(){
    $(".navbar.navbar_header").addClass("navbar_header--active");
    $(".overlay").addClass("overlay--navbar");
    $(".overlay").removeClass("overlay--disable");
    $("body").addClass("hidden open-navbar compensate-for-scrollbar");

  });
  $(".navbar.navbar_header #close-nav").on("click", function(){
      $(".navbar.navbar_header").removeClass("navbar_header--active");

      $(".overlay").removeClass("overlay--navbar");
      $(".overlay").addClass("overlay--disable");
      
      $("body").removeClass("hidden");
      $("body").removeClass("open-navbar");
      $("body").removeClass("compensate-for-scrollbar");
  });
});

$(document).mouseup(function (e){ // событие клика по веб-документу
  let dropdownActive = $(".navbar.navbar_header.navbar_header--active"); // элемент
  if (!dropdownActive.is(e.target) // клик был не по блоку
        && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
        && !$("#open-nav").is(e.target) ) { 
            $(".navbar.navbar_header").removeClass("navbar_header--active");

            $(".overlay").removeClass("overlay--navbar");
            $(".overlay").addClass("overlay--disable");
            
            $("body").removeClass("hidden");
            $("body").removeClass("open-navbar");
            $("body").removeClass("compensate-for-scrollbar");
          }
});