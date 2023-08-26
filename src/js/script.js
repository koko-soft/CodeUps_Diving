
jQuery(function ($) {

	//Drawer
	$(".js-hamburger,.js-sp-nav,.js-sp-nav a").click(function () {

		if ($(".js-hamburger").hasClass('is-active')) {
			$('.js-hamburger').removeClass("is-active");
			$('.js-sp-nav').removeClass("is-active");
		} else {
			$('.js-hamburger').addClass("is-active");
			$('.js-sp-nav').addClass("is-active");
		};

	});

	// Smooth Scroll
	jQuery('a[href^="#"]').on('click', function () {

		var header = jQuery('.header').innerHeight();
		var id = jQuery(this).attr('href');
		var speed = 500;
		var target = jQuery("#" == id ? "html" : id);
		var position = 0;
		position = jQuery(target).offset().top - header;

		jQuery('html, body').animate({
			scrollTop: position
		},
			speed, 'swing');

		return false;
	});

	// header
	let header = $('.header');
	let height = $('.mv').height();
	let headerHeight = $('.header').height();
	$(window).scroll(function () {
		if ($(window).scrollTop() > height - headerHeight) {
			header.addClass('is-color');
		} else {
			header.removeClass('is-color');
		}
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
		speed: 2000,
	});

	//Swiper --- campaign
	var swiperCampaign = new Swiper(".js-campaign__swiper", {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
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

		//footer
		$("#page-top").hide();
		$(window).on("scroll", function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			var footHeight = $("footer").innerHeight();
			if (scrollHeight - scrollPosition <= footHeight) {
				$("#page-top").css({
					position: "absolute",
					bottom: footHeight + 20,
				});
			} else {
				if (window.matchMedia("(min-width: 768px)").matches) {
					$("#page-top").css({
						position: "fixed",
						bottom: "20px",
					});
				} else {
					$("#page-top").css({
						position: "fixed",
						bottom: "16px",
					});
				};
			}
		});
	});

	document.cookie = "cookie_name=cookie_value; expires=Sun, 01 Jan 2023 00:00:00 UTC; path=/; domain=codeups.com; secure; samesite=None";


});
