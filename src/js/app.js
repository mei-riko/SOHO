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

    if ( $("[data-fancybox]").length > 0 ) {
        $("[data-fancybox]").fancybox({
            autoFocus  : false,
        })
    }
    $("#btnInfo").on("click", function(){
        let valueInput = $("#inputText").val();
        $(".modal#callModal textarea").val(valueInput);
    });

    $('.go-to-top').on("click", function(){
        $("body").animate({scrollTop:0}, '500');
    });

    if($(window).scrollTop() > 150) {
        $('.go-to-top').addClass("active");
    } else if ($(window).scrollTop() < 150) {
        $('.go-to-top').removeClass("active");
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $('.go-to-top').addClass("active");
        } else if ($(this).scrollTop() < 60) {
            $('.go-to-top').removeClass("active");
        }
    });
});