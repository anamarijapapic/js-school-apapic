( function( $ ) {
	'use strict';

	var navigationMenuLinks = document.querySelectorAll('.navigation-menu ul li');

	window.addEventListener('scroll', function(event) {
  	var fromTop = window.scrollY;

		navigationMenuLinks.forEach(function(link) {
			var section = document.querySelector(link.firstChild.hash);

			if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
				link.classList.add('current');
			} else {
				link.classList.remove('current');
			}
		});
	});
}( jQuery ) );
