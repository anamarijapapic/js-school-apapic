( function( $ ) {
	'use strict';

	$(document).ready(function(){
		$('.navigation-menu ul li').click(function(e) {
			e.preventDefault();
			
			var section = document.querySelector(this.firstChild.getAttribute('href'));
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth',
			});
		});

		$(window).on('scroll', function() {
			var navigationMenuSections = document.querySelectorAll('.navigation-menu ul li');
			
			var fromTop = $(document).scrollTop();
	
			navigationMenuSections.forEach(function(el) {
				var section = document.querySelector(el.firstChild.getAttribute('href'));
	
				if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
					$(el).addClass('active');
				} else {
					$(el).removeClass('active');
				}
			});
		});
	});
}( jQuery ) );
