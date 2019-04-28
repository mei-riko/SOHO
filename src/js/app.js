import $ from "jquery";

$(document).ready(() => {
    if( $('.scroll-pane').length ){
        $('.scroll-pane').jScrollPane();
    }
    $(window).resize(function(){
        if( $('.scroll-pane').length ){
            $('.scroll-pane').jScrollPane();
        }
    });

    //Input mask
    if ( $(".in-phone").length > 0 ) {
        $(".in-phone").inputmask({
            mask: "+7 999 999 99 99", 
            placeholder: "", 
            showMaskOnHover: true, 
            onincomplete: function(){ 
                $(this).closest("form").addClass('error-phone'); 
                $(this).addClass('error'); 
                $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
            }, 
            oncomplete: function(){ 
                $(this).closest("form").removeClass('error-phone'); 
                $(this).removeClass('error'); 
                $(this).siblings(".error_phone").removeClass('error').html(''); 
            }, 
        });
    }
    
    $("#header__nav").on("click", function(){
        $(this).toggleClass("active");
        $(".header .nav").toggleClass("active");
    });
    $("#navbarClose").on("click", function(){
        $("#header__nav").removeClass("active");
        $(".header .nav").removeClass("active");
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var navbar = $(".header .nav.active"); // тут указываем ID элемента
		if (!navbar.is(e.target) && navbar.has(e.target).length === 0) {
            navbar.removeClass("active");
            $("#header__nav.active").removeClass("active");
		}
	});

    $(".toggle-tabs .toggle-tabs__item .toggle-tabs__item__title").on("click", function(){
        let item = $(this).parent();
        $(this).toggleClass("active");
        item.find(".toggle-tabs__item__content").slideToggle();
    });

    if($(window).scrollTop() > 150) {
        // $('.header').addClass("scroll");
        // $('.header .header__email').hide();            
        // $('.header .header__logo').hide();            
    } else if ($(window).scrollTop() < 60) {
        // $('.header').removeClass("scroll");
        // $('.header .header__email').show();            
        // $('.header .header__logo').show();  
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $('.header').addClass("scroll");
            // $('.header .header__email').fadeOut();            
            // $('.header .header__logo').fadeOut();            
        } else if ($(this).scrollTop() < 60) {
            $('.header').removeClass("scroll");
            // $('.header .header__email').fadeIn();            
            // $('.header .header__logo').fadeIn();  
        }
    });
});