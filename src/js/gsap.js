'use strict';

// $(function () {
// 	gsap.utils.toArray("js-img-animation-wrap").forEach(function (target) {
// 		gsap.from(target, {
// 			scrollTrigger: {
// 				trigger: target,
// 			},
// 			opacity: 0,
// 			yPercent: 100,
// 		});
// 	});
// });




// ひとつずつの場合
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.js-img-animation__wrap',
		start: 'top 80%',
		markers: true,
	}
});

tl.set(".js-img-animation__img", {
	opacity: 0,
}).fromTo(".js-img-animation__bg", {
	scaleX: 0,
}, {
	scaleX: 1,
	duration: 1.0,
}).set(".js-img-animation__img", {
	opacity: 1,
}).set(".js-img-animation__bg", {
	transformOrigin: 'left center',
}).fromTo(".js-img-animation__bg", {
	scaleX: 1,
}, {
	scaleX: 0,
	duration: 1.0,
});





// テスト用
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