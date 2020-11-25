var scrollAnimation;
document.getElementById('contacts').addEventListener('click', function (e) {
	e.preventDefault();
	cancelAnimationFrame(scrollAnimation);

	var
		i = 1,
		prevPageYOffset = pageYOffset;

	scrollAnimation = requestAnimationFrame(function scroll() {
		window.scrollBy(0, 20 + i * 15);

		if (prevPageYOffset === pageYOffset) {
			return;
		}

		prevPageYOffset = pageYOffset;
		scrollAnimation = requestAnimationFrame(scroll);
		i++;
	});
});
