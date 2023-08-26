'use strict';

$(function () {
	var targets = gsap.utils.toArray(".js-img-animation__wrap");

	targets.forEach(function (target) {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: target,
				start: 'top 80%',
			}
		});

		tl.set(target.querySelector(".js-img-animation__img"), {
			opacity: 0,
		}).set(target.querySelector(".js-img-animation__bg"), {
			backgroundColor: '#408F95',
		})
			.fromTo(target.querySelector(".js-img-animation__bg"), {
				scaleX: 0,
			}, {
				scaleX: 1,
				duration: 0.6,
			}).set(target.querySelector(".js-img-animation__img"), {
				opacity: 1,
			}).set(target.querySelector(".js-img-animation__bg"), {
				transformOrigin: 'left center',
			}).fromTo(target.querySelector(".js-img-animation__bg"), {
				scaleX: 1,
			}, {
				scaleX: 0,
				duration: 0.6,
			});
	});

});