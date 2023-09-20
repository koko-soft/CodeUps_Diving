'use strict';

window.addEventListener('load', function () {

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
			document.body.style.overflow = 'hidden';
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
			document.body.style.overflow = 'auto';
		})
		;
});