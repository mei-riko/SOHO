!function(e){var a={};function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)r.d(t,o,function(a){return e[a]}.bind(null,o));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="",r(r.s=0)}([function(e,a,r){"use strict";var t,o=r(1),n=(t=o)&&t.__esModule?t:{default:t};(0,n.default)(document).ready((function(){(0,n.default)(".scroll").click((function(){return(0,n.default)("html, body").animate({scrollTop:(0,n.default)((0,n.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,n.default)(".phone").length>0&&(0,n.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,n.default)(this).closest("form").addClass("error-phone"),(0,n.default)(this).addClass("error"),(0,n.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,n.default)(this).closest("form").removeClass("error-phone"),(0,n.default)(this).removeClass("error"),(0,n.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,n.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,n.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,n.default)(this).blur(),!1})),(0,n.default)("[data-fancybox]").fancybox({autoFocus:!1,touch:!1}),(0,n.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,n.default)(".header .header__nav#open-nav").on("click",(function(){(0,n.default)(".navbar.navbar_header").addClass("navbar_header--active"),(0,n.default)(".overlay").addClass("overlay--navbar"),(0,n.default)(".overlay").removeClass("overlay--disable"),(0,n.default)("body").addClass("hidden open-navbar compensate-for-scrollbar")})),(0,n.default)(".navbar.navbar_header #close-nav").on("click",(function(){(0,n.default)(".navbar.navbar_header").removeClass("navbar_header--active"),(0,n.default)(".overlay").removeClass("overlay--navbar"),(0,n.default)(".overlay").addClass("overlay--disable"),(0,n.default)("body").removeClass("hidden"),(0,n.default)("body").removeClass("open-navbar"),(0,n.default)("body").removeClass("compensate-for-scrollbar")})),(0,n.default)(document).mouseup((function(e){var a=(0,n.default)(".navbar.navbar_header.navbar_header--active");a.is(e.target)||0!==a.has(e.target).length||(0,n.default)("#open-nav").is(e.target)||((0,n.default)(".navbar.navbar_header").removeClass("navbar_header--active"),(0,n.default)(".overlay").removeClass("overlay--navbar"),(0,n.default)(".overlay").addClass("overlay--disable"),(0,n.default)("body").removeClass("hidden"),(0,n.default)("body").removeClass("open-navbar"))}))}))},function(e,a){e.exports=jQuery}]);