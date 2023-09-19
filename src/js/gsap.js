'use strict';

window.addEventListener('DOMContentLoaded', function () {

	const tl1 = gsap.timeline();
	const left = $(".js-loading-left");
	const right = $(".js-loading-right");
	const titleWrap = $(".js-loading-header");
	const title = $(".js-loading-title");
	const subtitle = $(".js-loading-subtitle");
	const loading = $(".js-loading");
	const imgWrap = $(".loading__wrap");

	tl1
		.add(function () {
			document.body.style.overflow = 'hidden';
		})
		.set([left, right], { y: "100%", opacity: 1 })
		.to([left], { duration: 0.8, y: "0%", ease: "Power0.easeNone" })
		.to([right], { duration: 0.9, y: "0%", ease: "Power0.easeNone", delay: 0.1 }, '<')
		.fromTo([title], { y: "50%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.3, delay: 0.2 })
		.fromTo([subtitle], { y: "50%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.2 })
		.to([loading], { duration: 0.8, autoAlpha: 0, delay: 0.5 })
		.to([imgWrap], { duration: 0.8, scale: 1.2 }, '<')
		.add(function () {
			document.body.style.overflow = 'auto';
		})
		;
});