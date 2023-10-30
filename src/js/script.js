'use strict';

jQuery(function ($) {

	scrollLock();

	//scroll
	function scrollLock() {
		$('body').addClass('no-scroll');
	}

	function scrollUnlock() {
		$('body').removeClass('no-scroll');
	}

	//loading
	function loadingOpen() {
		$(".loading").removeClass("is-none");
	}

	function loadingClose() {
		$(".loading").animate({
			opacity: 0
		}, 500, function () {
			// アニメーションが完了した後にクラスを追加する
			$(this).addClass("is-none");
		});
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
		const loading = $(".loading");
		const circle = $(".loading__circle");
		const imgWrap = $(".loading__wrap");
		const left = $(".loading__left");
		const right = $(".loading__right");
		const title = $(".heroTitle__title");
		const subtitle = $(".heroTitle__subtitle");

		tl1
			.add(function () {
				loadingOpen();
				swiperMv.autoplay.stop();
			})
			.to([circle], { duration: 0.1, autoAlpha: 0 })
			.set([left, right], { y: "100%", opacity: 1 })
			.to([left], { duration: 0.9, y: "0%", ease: "Power0.easeNone" })
			.to([right], { duration: 0.9, y: "0%", ease: "Power0.easeNone", delay: 0.1 }, '<')
			.fromTo([title], { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.2 })
			.fromTo([subtitle], { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.3 }, '<')
			.to([loading], { duration: 0.9, autoAlpha: 0, delay: 0.3 })
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
			scrollUnlock();

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

	$(window).on("load resize", function () {
		let window_height = window.innerHeight
			? window.innerHeight
			: $(window).innerHeight();
		$(".page-container").css("min-height", window_height + "px");
	});

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
		speed: 1000,
		navigation: {
			nextEl: ".campaign__button-prev",
			prevEl: ".campaign__button-next",
		},
		slidesPerView: 'auto',
		spaceBetween: 42,
		breakpoints: {
			768: {
				spaceBetween: 59,
			}
		},

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

	// modal --- open
	$(".js-modal").click(function () {
		$(".js-modal-background").html($(this).prop("outerHTML"));
		$(".js-modal-background").fadeIn(150);
		scrollLock();
		$(".js-modal-background .gallery__item").addClass("active");
	});

	// modal --- close
	$(".js-modal-background").click(function () {
		$(".js-modal-background").fadeOut(150, function () {
			scrollUnlock();
			$(".gallery__item").removeClass("active");
		});
	});

	// accordion
	$(function () {
		$(".js-accordion-item:first-child .js-accordion-content").css(
			"display",
			"block"
		);
		$(".js-accordion-item:first-child .js-accordion-title").addClass(
			"is-open"
		);
		$(".js-accordion-title").on("click", function () {
			$(this).toggleClass("is-open");
			$(this).next().slideToggle(300);
		});
	});

	// tab
	// $(function () {

	// 	$(".js-tab-content").removeClass("is-active");
	// 	$(".js-tab-content:first-of-type").addClass("is-active");

	// 	const tabButton = $(".js-tab-button");
	// 	const tabContent = $(".js-tab-content");

	// 	tabButton.on("click", function () {

	// 		let index = tabButton.index(this);
	// 		tabButton.removeClass("is-active");
	// 		$(this).addClass("is-active");
	// 		tabContent.eq(index).addClass("is-active");
	// 		tabContent.hide().eq(index).fadeIn(300);
	// 	});
	// });

	//tab スクロール
	//クリックイベントを監視
	$(document).ready(function () {

		//page-info.html内でタブをクリックしたとき
		$(".js-tab-button").click(function (e) {

			//通常のページ遷移をキャンセル
			e.preventDefault();

			//id属性をハッシュ値にセット（例：#tab1）
			var hash = "#" + $(this).attr("id");
			window.localStorage.hash = hash;

			activeInfoTab(hash);

		});

		//別ページから/sub-info.htmlを開いたとき
		var currentURL = window.location.pathname;

		if (currentURL === "/sub-info.html") {
			// /sub-info.htmlが開かれたときのみ実行される処理をこちらに書く
			activeInfoTab();
		}


	});

	$(document).ready(function () {

		//別ページから/page-info.htmlを開いたとき
		var currentURL = window.location.pathname;

		if (currentURL === "/page-info.html") {
			// /sub-info.htmlが開かれたときのみ実行される処理をこちらに書く
			var hash = window.location.hash;
			activeInfoTab(hash);
		}

		//自分のページ内でメニューをクリックしたとき
		//ハッシュ値が変更されたら
		$(window).on("hashchange", function () {
			var hash = window.location.hash;
			activeInfoTab(hash);
		});

		//ページ内リンク（全ページ共通の処理）
		var currentPage = window.location.pathname;
		$('a[href^="' + currentPage + '#"]').click(function (event) {
			// $('a[href^="#"]').click(function () {

			//現在のページのURLを取得

			//リンクのURLを取得
			var linkPath = $(this).prop('pathname');

			//現在のページとリンクが同じである場合のみスムーズスクロールを適用
			if (currentPage === linkPath) {
				//デフォルトのアクションを防ぐ
				// event.preventDefault();

				//idがあればそこへスクロール
				//idがなければ一番上へスクロール
				const headerHeight = $(".js-header").height();
				// $("main").css("margin-top", headerHeight);
				// let id = $(this).attr('href').split('#')[1];
				// let target = $('#' + id).offset().top; // 対象となる要素の位置を取得
				let href = $(this).attr("href").replace(currentPage, "");
				let target = $(href == "#" || href == "" ? "html" : href);
				let position = target.offset().top - headerHeight;


				//下層Infoページはタブの切り替えを行う
				if (currentPage === "/page-info.html") {
					activeInfoTab(href);
				}

				$("body,html").animate({ scrollTop: position }, speed);

				return false;
			}
		});

	});



	function activeInfoTab(hash = "") {
		//現在のハッシュを取得
		// var hash = window.location.hash;

		const tabButton = $(".js-tab-button");
		const tabContent = $(".js-tab-content");
		var index = 0;

		//全ての表示を初期化
		tabButton.removeClass("is-active");
		tabContent.removeClass("is-active");

		if (hash !== "") {
			//id属性にhashを持つクラスのインデックスを取得
			index = tabButton.index($(hash))
			// var index = tabButton.index(hash);
			//取得できなければ1番初めのタブをアクティブ化
			if (index < 0) {
				index = 0;
			}

		} else {
			//ハッシュがなければ1番初めのタブをアクティブ化
			index = 0;
			// tabButton.first().addClass("is-active");
			// tabContent.first().addClass("is-active");
			// tabContent.hide().first().fadeIn(300);
		}

		tabButton.eq(index).addClass("is-active");
		tabContent.eq(index).addClass("is-active");
		tabContent.hide().eq(index).fadeIn(300);
		// $(".js-tab-content:first-of-type").addClass("is-active");


		// 	tabButton.on("click", function () {

		// 		let index = tabButton.index(this);
		// 		tabButton.removeClass("is-active");
		// 		$(this).addClass("is-active");
		// 		tabContent.eq(index).addClass("is-active");
		// 		tabContent.hide().eq(index).fadeIn(300);
		// 	});
	};

	// blog-archive toggle
	$(".js-blog-archive .blog-archive__year p").on("click", function () {
		$(this).next(".blog-archive__months").slideToggle();
		$(this).toggleClass("is-active");
	});

	document.cookie = "cookie_name=cookie_value; expires=Sun, 01 Jan 2023 00:00:00 UTC; path=/; domain=codeups.com; secure; samesite=None";

});
