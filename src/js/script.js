
jQuery(function ($) {

	//Drawer
	$(".js-hamburger,.js-nav,.js-nav a").click(function () {

		if ($(".js-hamburger").hasClass('is-active')) {
			$('.js-hamburger').removeClass("is-active");
			$('.js-nav').removeClass("is-active");
		} else {
			$('.js-hamburger').addClass("is-active");
			$('.js-nav').addClass("is-active");
		};

	});

	// Smooth Scroll
	// #から始まるURLがクリックされた時
	jQuery('a[href^="#"]').on('click', function () {

		// headerの高さを取得
		var header = jQuery('.header').innerHeight();
		// hrefで指定されたidを取得
		var id = jQuery(this).attr('href');
		// 移動速度を指定（ミリ秒）
		var speed = 500;
		// idの値が#のみだったらターゲットをhtmlタグにする
		var target = jQuery("#" == id ? "html" : id);
		// ページのトップを基準にターゲットの位置を取得
		var position = 0;
		position = jQuery(target).offset().top - header;

		jQuery('html, body').animate({
			scrollTop: position
		},
			speed, 'swing');

		return false;
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
