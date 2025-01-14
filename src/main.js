import 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
	headerScroll();
});

function headerScroll() {
	let lastScrollTop = 0;
	const header = document.querySelector('.header');
	const hiddenClass = 'header--hidden';
	const scrollThreshold = 200;

	window.addEventListener('scroll', function () {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

		if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
			header.classList.add(hiddenClass);
		} else if (currentScroll < lastScrollTop) {
			header.classList.remove(hiddenClass);
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	});
}
