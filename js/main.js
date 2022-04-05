// ============================================================

let tableBtnUp = document.getElementById('tableBtnUp');
let tableBtnDown = document.getElementById('tableBtnDown');
let countertop = document.getElementById('countertop');

tableBtnUp.addEventListener("click", () => countertop.classList.add('tableAnimationCSS'));
tableBtnDown.addEventListener("click", () => countertop.classList.remove('tableAnimationCSS'));




window.addEventListener('DOMContentLoaded', function () {
	const scrollUpButton = document.querySelector('.woman-block');
	const scrolledWoman = document.querySelector('.woman-block__img');
	const scrolledEllipse = document.querySelector('.woman-block__ellipse');


	window.addEventListener('scroll', function () {
		// const scrolled = scrollUpButton.pageYOffset;
		const scrolled = scrollUpButton.pageYOffset || document.documentElement.scrollTop;

		if (scrolled >= 200) {
			scrolledWoman.classList.add('animWomanUplift2');
			scrolledEllipse.classList.add('animWomanUplift3');
			scrollUpButton.classList.add('animWomanUplift4');
		}
	});
});


// ============================================================