/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

    //Slick
    (0, _jquery2.default)(".slick-slider").slick({
        infinite: true,
        dots: true,
        arrow: true,
        adaptiveHeight: true
    });
    // Scroll Pane
    if ((0, _jquery2.default)('.scroll-pane').length) {
        (0, _jquery2.default)('.scroll-pane').jScrollPane();
    }
    (0, _jquery2.default)(window).resize(function () {
        if ((0, _jquery2.default)('.scroll-pane').length) {
            (0, _jquery2.default)('.scroll-pane').jScrollPane();
        }
    });

    //Input mask
    if ((0, _jquery2.default)(".in-phone").length > 0) {
        (0, _jquery2.default)(".in-phone").inputmask({
            mask: "+7 999 999 99 99",
            placeholder: "",
            showMaskOnHover: true,
            onincomplete: function onincomplete() {
                (0, _jquery2.default)(this).closest("form").addClass('error-phone');
                (0, _jquery2.default)(this).addClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
            },
            oncomplete: function oncomplete() {
                (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
                (0, _jquery2.default)(this).removeClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
            }
        });
    }
    (0, _jquery2.default)('input.in-phone').on('keydown', function (event) {
        if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
            event.preventDefault();
            (0, _jquery2.default)(this).blur();
            return false;
        }
    });

    //YANDEXREALGOAL SUBMIT SUCCESS
    (0, _jquery2.default)(document).on('af_complete', function (event, response) {
        var form = response.form;

        // Yandex Target
        if (form.hasClass("form-1")) {
            form.attr('data-yareach', 'glav_stran');
        }
        if (form.hasClass("form-19")) {
            form.attr('data-yareach', 'razrab_verst');
        }
        if (form.hasClass("form-18")) {
            form.attr('data-yareach', 'seo_prodviga');
        }
        if (form.hasClass("form-20")) {
            form.attr('data-yareach', 'marketiin');
        }
        if (form.hasClass("form-21")) {
            form.attr('data-yareach', 'rekklama');
        }

        console.log(form.data('yareach'));

        if (response.success) {
            if (form.data('yareach') && typeof yaCounter53189068 != 'undefined') {
                yaCounter53189068.reachGoal(form.data('yareach'));
            }
        }
    });

    // Header Navbar
    (0, _jquery2.default)("#header__nav").on("click", function () {
        (0, _jquery2.default)(this).toggleClass("active");
        (0, _jquery2.default)(".header .nav").toggleClass("active");
    });
    (0, _jquery2.default)("#navbarClose").on("click", function () {
        (0, _jquery2.default)("#header__nav").removeClass("active");
        (0, _jquery2.default)(".header .nav").removeClass("active");
    });
    (0, _jquery2.default)(document).mouseup(function (e) {
        // событие клика по веб-документу
        var navbar = (0, _jquery2.default)(".header .nav.active"); // тут указываем ID элемента
        if (!navbar.is(e.target) && navbar.has(e.target).length === 0) {
            navbar.removeClass("active");
            (0, _jquery2.default)("#header__nav.active").removeClass("active");
        }
    });

    // Toggle
    (0, _jquery2.default)(".toggle-tabs .toggle-tabs__item .toggle-tabs__item__title").on("click", function () {
        var item = (0, _jquery2.default)(this).parent();
        (0, _jquery2.default)(this).toggleClass("active");
        item.find(".toggle-tabs__item__content").slideToggle();
    });

    // Fancybox
    if ((0, _jquery2.default)("[data-fancybox]").length > 0) {
        (0, _jquery2.default)("[data-fancybox]").fancybox({
            autoFocus: false
        });
    }

    // Form Marketing
    (0, _jquery2.default)("#btnInfo").on("click", function () {
        var valueInput = (0, _jquery2.default)("#inputText").val();
        (0, _jquery2.default)(".modal#callModal textarea").val(valueInput);
    });

    // Go to Top
    (0, _jquery2.default)('.go-to-top').on("click", function () {
        (0, _jquery2.default)("html,body").animate({ scrollTop: 0 }, '500');
    });
    if ((0, _jquery2.default)(window).scrollTop() > 150) {
        (0, _jquery2.default)('.go-to-top').addClass("active");
    } else if ((0, _jquery2.default)(window).scrollTop() < 150) {
        (0, _jquery2.default)('.go-to-top').removeClass("active");
    }
    (0, _jquery2.default)(window).scroll(function () {
        if ((0, _jquery2.default)(this).scrollTop() > 150) {
            (0, _jquery2.default)('.go-to-top').addClass("active");
        } else if ((0, _jquery2.default)(this).scrollTop() < 60) {
            (0, _jquery2.default)('.go-to-top').removeClass("active");
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);