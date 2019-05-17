import $ from "jquery";

$(document).ready(() => {

    // Scroll Pane
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
    $('input.in-phone').on('keydown', function(event) {
        if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
            event.preventDefault();
            $(this).blur();
            return false;
        }
    });

    //YANDEXREALGOAL SUBMIT SUCCESS
    $(document).on('af_complete', function(event, response) {
        var form = response.form;

        // Yandex Target
        if (form.hasClass("form-1")) { form.attr('data-yareach', 'glav_stran'); }
        if (form.hasClass("form-19")) { form.attr('data-yareach', 'razrab_verst'); }
        if (form.hasClass("form-18")) { form.attr('data-yareach', 'seo_prodviga'); }
        if (form.hasClass("form-20")) { form.attr('data-yareach', 'marketiin'); }
        if (form.hasClass("form-21")) { form.attr('data-yareach', 'rekklama'); }
        
        console.log(form.data('yareach'));

        if (response.success) {
            if (form.data('yareach') && typeof yaCounter53189068 != 'undefined') {
              yaCounter53189068.reachGoal(form.data('yareach'));
            }
        }
    });

    // Header Navbar
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

    // Toggle
    $(".toggle-tabs .toggle-tabs__item .toggle-tabs__item__title").on("click", function(){
        let item = $(this).parent();
        $(this).toggleClass("active");
        item.find(".toggle-tabs__item__content").slideToggle();
    });

    // Fancybox
    if ( $("[data-fancybox]").length > 0 ) {
        $("[data-fancybox]").fancybox({
            autoFocus  : false,
        })
    }

    // Form Marketing
    $("#btnInfo").on("click", function(){
        let valueInput = $("#inputText").val();
        $(".modal#callModal textarea").val(valueInput);
    });

    // Go to Top
    $('.go-to-top').on("click", function(){
        $("html,body").animate({scrollTop:0}, '500');
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