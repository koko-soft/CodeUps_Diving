
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

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
		loop: 'true',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 4000,
		},
		speed: 1000,
	});


	//Swiper --- campaign
	// var swiper = new Swiper(".js-campaign__swiper", {
	// 	// loop: "true",
	// 	slidesPerView: "auto",
	// 	navigation: {
	// 		nextEl: ".campaign__button-next",
	// 		prevEl: ".campaign__button-prev",
	// 	},
	// 	autoplay: {
	// 		delay: 2000,
	// 	},
	// 	speed: 500,

	// 	// loop: true, // ループ有効
	// 	// slidesPerView: auto, // 一度に表示する枚数
	// 	// speed: 500, // ループの時間
	// 	// allowTouchMove: false, // スワイプ無効
	// 	// autoplay: {
	// 	// 	delay: 0, // 途切れなくループ
	// 	// },

	// 	// loop: true,
	// 	// // effect: "fade",
	// 	// // speed: 3000,
	// 	// allowTouchMove: false, //ユーザがスライドできるかどうか
	// 	// autoplay: {
	// 	// 	delay: 3000,
	// 	// },
	// 	// slidesPerView: auto, // 一度に表示する枚数
	// 	// speed: 500, // ループの時間
	// 	// allowTouchMove: false, // スワイプ無効
	// 	// autoplay: {
	// 	// 	delay: 3000, // 途切れなくループ
	// 	// },
	// });

	// const swiper = new Swiper('.js-campaign__swiper', {
	// 	direction: 'vertical',
	// 	loop: true,
	// 	autoplay: {
	// 		delay: 2000,
	// 	},
	// 	slidesPerView: 'auto',
	// 	speed: 500,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// });

	var swiper2 = new Swiper(".js-campaign__swiper", {
		// effect: 'fade',
		// fadeEffect: {
		// 	crossFade: 'true',
		// },
		// loop: 'true',
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 4000,
		},
		slidesPerView: '3',
		speed: 1000,
	});
});
