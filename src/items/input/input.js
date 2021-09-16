import $ from 'jquery';

export let unitMaskPhone = () => {
    $('input[type="tel"]').inputmask({
        mask: '+7 (999) 999 99 99',
        placeholder: " ",
        showMaskOnHover: false,
        onincomplete: function(){ 
            $(this).closest("form").addClass('error-phone'); 
            $(this).addClass('input--error'); 
            $(this).siblings('.error_phone').addClass('error').html('Укажите корректный номер'); 
            $(this).removeClass('input--success');
        }, 
        oncomplete: function(){ 
            $(this).closest("form").removeClass('error-phone'); 
            $(this).removeClass('input--error'); 
            $(this).siblings('.error_phone').removeClass('error').html(''); 
            $(this).addClass('input--success'); 
        },
    })
}

$(function() {
    // Input Mask Phone
    if( $('input[type="tel"]').length > 0 ) {
        unitMaskPhone();
    }
});

$('input').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});