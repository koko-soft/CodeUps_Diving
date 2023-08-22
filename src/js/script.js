
jQuery(function ($) {

	//Drawer
	$(".js-hamburger,.sp-nav__items,.sp-nav__item a").click(function () {

		if ($(".js-hamburger").hasClass('is-active')) {
			$('.js-hamburger').removeClass("is-active");
			$('.js-sp-nav').removeClass("is-active");
		} else {
			$('.js-hamburger').addClass("is-active");
			$('.js-sp-nav').addClass("is-active");
		};

	});

	//Swiper --- mv
	var swiper = new Swiper(".js-mv__swiper", {
		effect: 'fade',
		fadeEffect: {
			crossFade: 'true',
		},
		loop: true,
		autoplay: {
			delay: 4000,
		},
		speed: 1000,
	});

	//Swiper --- campaign
	var swiper2 = new Swiper(".js-campaign__swiper", {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		speed: 1000,
		navigation: {
			nextEl: ".campaign__button-prev",
			prevEl: ".campaign__button-next",
		},
		slidesPerView: 'auto',
		spaceBetween: 24,
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 40,
			}
		}
	});

});
