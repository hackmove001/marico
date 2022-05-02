function isWebp(callback) {
	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

isWebp(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if (burger) {
	burger.addEventListener('click', function () {
		document.body.classList.toggle('_no-scroll');
		nav.classList.toggle('_active');
		burger.classList.toggle('_active');
	});
}
