
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

});
