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

	tl1.set([left, right], { y: "100%", opacity: 1 })
		.set([titleWrap], { zIndex: 99999 })
		.to([left], { duration: 2, y: "0%", ease: "power1.out", delay: 1 })
		.to([right], { duration: 2.2, y: "0%", ease: "power1.out", delay: 0.2 }, '<')
		.to([title], { opacity: 1, duration: 1.5, delay: 0.5 })
		.fromTo([subtitle], { opacity: 0, y: "50%" }, { opacity: 1, y: 0, duration: 1 }, '-=0.2')
		.to([loading], { autoAlpha: 0, duration: 2, delay: 1.8 })
		.to([imgWrap], { scale: 1.2, duration: 2 }, '<')
		.set([titleWrap], { zIndex: 10 })
		;
});