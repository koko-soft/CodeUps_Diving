'use strict';

jQuery(function ($) {

	//scroll
	function scrollLock() {
		$('body').addClass('no-scroll');
	}

	function scrollUnlock() {
		$('body').removeClass('no-scroll');
	}

	//loading
	function loadingOpen() {
		$(".js-loading").removeClass("is-none");
	}

	function loadingClose() {
		$(".js-loading").addClass("is-none");
	}

	//訪問したことがあるかチェック
	function isVisited() {
		let bReturn = false;

		if (sessionStorage.getItem('visited') !== null) {
			bReturn = true
		} else {
			sessionStorage.setItem('visited', 'true');
		}
		return bReturn;
	}

	//loadingアニメーションの表示、MV Sliderの停止／開始
	function loadingAnimation() {

		const tl1 = gsap.timeline();
		const circle = $(".js-loading-circle");
		const left = $(".js-loading-left");
		const right = $(".js-loading-right");
		const title = $(".js-loading-title");
		const subtitle = $(".js-loading-subtitle");
		const loading = $(".js-loading");
		const imgWrap = $(".loading__wrap");

		tl1
			.add(function () {
				loadingOpen();
				swiperMv.autoplay.stop();
			})
			.to([circle], { duration: 0.1, autoAlpha: 0 })
			.to([title, subtitle], { duration: 0.2, opacity: 0 })
			.set([left, right], { y: "100%", opacity: 1 })
			.to([left], { duration: 0.9, y: "0%", ease: "Power0.easeNone" })
			.to([right], { duration: 0.9, y: "0%", ease: "Power0.easeNone", delay: 0.1 }, '<')
			.fromTo([title], { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.2 })
			.fromTo([subtitle], { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.4 }, '<')
			.to([loading], { duration: 0.9, autoAlpha: 0, delay: 0.6 })
			.to([imgWrap], { duration: 0.9, scale: 1.2 }, '<')
			.add(function () {
				scrollUnlock();
				swiperMv.autoplay.start();
			})
			;

	}

	//Loading
	window.addEventListener('load', function () {

		if (isVisited()) {

			loadingClose();

		} else {

			scrollLock();
			loadingAnimation();

			//タイムアウトしたら強制的に解除
			setTimeout(function () {
				loadingClose();
				scrollUnlock();
				swiperMv.autoplay.start();
			}, 3500);
		}

	});

	//Drawer
	$(".js-hamburger,.js-sp-nav,.js-sp-nav a").click(function () {

		if ($(".js-hamburger").hasClass('is-active')) {
			closeDrawer();
		} else {
			openDrawer();
		};
	});

	$(".js-logoLink").click(function () {

		if ($(".js-hamburger").hasClass('is-active')) {
			closeDrawer();
		};
	});

	$(window).resize(function () {
		if (window.matchMedia("(min-width: 768px)").matches) {
			closeDrawer();
		}
	})

	function closeDrawer() {
		$('.js-hamburger').removeClass("is-active");
		$('.js-sp-nav').removeClass("is-active");
		scrollUnlock();
	}

	function openDrawer() {
		$('.js-hamburger').addClass("is-active");
		$('.js-sp-nav').addClass("is-active");
		scrollLock();
	}

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

	//Swiper --- mv
	var swiperMv = new Swiper(".js-mv-swiper", {
		effect: 'fade',
		fadeEffect: {
			crossFade: 'true',
		},
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		speed: 2000,

	});

	//Swiper --- campaign
	var swiperCampaign = new Swiper(".js-campaign-swiper", {
		loop: true,
		autoplay: {
			delay: 2000,
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

		//page-top
		$("#page-top").hide();
		$(window).on("scroll", function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			var footHeight = $("footer").innerHeight();
			if (scrollHeight - scrollPosition <= footHeight) {

				if (window.matchMedia("(min-width: 768px)").matches) {
					$("#page-top").css({
						position: "absolute",
						bottom: footHeight + 20,
					});
				} else {
					$("#page-top").css({
						position: "absolute",
						bottom: footHeight + 16,
					});
				};

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

	// image-animation  inview
	var box = $('.colorbox'),
		speed = 700;

	box.each(function () {
		$(this).append('<div class="color"></div>')
		var color = $(this).find($('.color')),
			image = $(this).find('img');
		var counter = 0;

		image.css('opacity', '0');
		color.css('width', '0%');
		color.on('inview', function () {
			if (counter == 0) {
				$(this).delay(200).animate({ 'width': '100%' }, speed, function () {
					image.css('opacity', '1');
					$(this).css({ 'left': '0', 'right': 'auto' });
					$(this).animate({ 'width': '0%' }, speed);
				})
				counter = 1;
			}
		});
	});

	document.cookie = "cookie_name=cookie_value; expires=Sun, 01 Jan 2023 00:00:00 UTC; path=/; domain=codeups.com; secure; samesite=None";

});
