
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
	var swiperMv = new Swiper(".js-mv__swiper", {
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
	var swiperCampaign = new Swiper(".js-campaign__swiper", {
		loop: true,
		autoplay: {
			delay: 200000,
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

	// ToTop
	// ページトップボタン
	// ページトップボタン
	$(function () {
		const pageTop = $("#page-top");
		pageTop.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				pageTop.fadeIn();
			} else {
				pageTop.fadeOut();
			}
		});
		pageTop.click(function () {
			$("body,html").animate(
				{
					scrollTop: 0,
				},
				500
			);
			return false;
		});
		// フッター手前でストップ
		$("#page-top").hide();
		$(window).on("scroll", function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			var footHeight = $("footer").innerHeight();
			if (scrollHeight - scrollPosition <= footHeight) {
				// ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
				$("#page-top").css({
					position: "absolute",
					bottom: footHeight + 16,
				});
			} else {
				console.log(scrollHeight);
				console.log(scrollPosition);
				console.log(footHeight);
				$("#page-top").css({
					position: "fixed",
					bottom: "16px",
				});
			}
		});
	});

});
