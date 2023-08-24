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

console.log("targets:start");
$(function () {
	var targets = gsap.utils.toArray(".animation-test");

	console.log(targets);
	targets.forEach(function (target) {
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: target,
				start: 'top 50%',
			}
		});

		tl3.set(target.querySelector(".animation-box1"), {
			opacity: 0,
		}).fromTo(target.querySelector(".animation-box2"), {
			scaleX: 0,
		}, {
			scaleX: 1,
			duration: 1.0,
		}).set(target.querySelector(".animation-box1"), {
			opacity: 1,
		}).set(target.querySelector(".animation-box1"), {
			transformOrigin: 'left center',
		}).fromTo(target.querySelector(".animation-box2"), {
			scaleX: 1,
		}, {
			scaleX: 0,
			duration: 1.0,
		});
	});

});


//テスト用　複数　まとめて動くやつ
// console.log("targets:start");
// $(function () {
// 	var targets = gsap.utils.toArray(".animation-test");

// 	console.log(targets);
// 	targets.forEach(function (target) {
// 		// ここで共通のアニメーションを設定する
// 		// const tl3 = gsap.timeline();
// 		const tl3 = gsap.timeline({
// 			scrollTrigger: {
// 				// trigger: '.animation-test',
// 				trigger: target,
// 				start: 'top 50%',
// 				markers: true,
// 			}
// 		});

// 		tl3.set(".animation-box1", {
// 			opacity: 0,
// 		}).fromTo(".animation-box2", {
// 			scaleX: 0,
// 		}, {
// 			scaleX: 1,
// 			duration: 1.0,
// 		}).set(".animation-box1", {
// 			opacity: 1,
// 		}).set(".animation-box2", {
// 			transformOrigin: 'left center',
// 		}).fromTo(".animation-box2", {
// 			scaleX: 1,
// 		}, {
// 			scaleX: 0,
// 			duration: 1.0,
// 		});
// 	});

// });


// テスト用　ひとつだけ
// const tl3 = gsap.timeline();

// tl3.set(".animation-box1", {
// 	opacity: 0,
// }).fromTo(".animation-box2", {
// 	scaleX: 0,
// }, {
// 	scaleX: 1,
// 	duration: 1.0,
// }).set(".animation-box1", {
// 	opacity: 1,
// }).set(".animation-box2", {
// 	transformOrigin: 'left center',
// }).fromTo(".animation-box2", {
// 	scaleX: 1,
// }, {
// 	scaleX: 0,
// 	duration: 1.0,
// });